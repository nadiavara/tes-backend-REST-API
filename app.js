const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'karyawan'
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});


const checkLogin = (req, res, next) => {
 
  if (req.query.login === 'true') {
    req.loggedIn = true;
  } else {
    req.loggedIn = false;
  }
  next();
};

// Endpoint GET untuk menampilkan semua karyawan
app.get('/api/karyawan', (req, res) => {
  const sql = 'SELECT * FROM karyawan';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ karyawan: results });
    }
  });
});

// Endpoint GET untuk menampilkan karyawan yang sedang login
app.get('/api/login_karyawan', checkLogin, (req, res) => {
  if (req.loggedIn) {
    // Implementasi sesuai kebutuhan untuk menampilkan karyawan yang sedang login
    res.json({ user: 'nunungs' });
  } else {
    res.status(401).json({ error: 'Not logged in' });
  }
});

// Endpoint GET untuk menampilkan karyawan yang tidak ada pada tabel user
app.get('/api/missing_karyawan', (req, res) => {
  const sql = 'SELECT * FROM karyawan WHERE id NOT IN (SELECT id FROM user)';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ missing_karyawan: results });
    }
  });
});

// Endpoint GET untuk menampilkan data karyawan pada Unit beserta salarynya
app.get('/api/karyawan_unit', (req, res) => {
  const sql = 'SELECT * FROM karyawan WHERE nama_unit = "HR"';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({karyawan_unit: results });
    }
  });
});

// Endpoint POST untuk menambahkan karyawan unit kerja
app.post('/api/add_karyawan', (req, res) => {
  const { nama_karyawan, nama_unit, salary } = req.body;
  const sql = 'INSERT INTO karyawan (nama_karyawan, nama_unit, salary) VALUES (?, ?, ?)';
  connection.query(sql, [nama_karyawan, nama_unit, salary], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, message: 'Karyawan berhasil ditambahkan', add_karyawanId: result.insertId });
    }
  });
});

// Endpoint PUT untuk update salary karyawan
app.put('/api/update-salary/:nama_karyawan', (req, res) => {
  const { name } = req.params;
  const { salary } = req.body;
  const sql = 'UPDATE karyawan SET salary = ? WHERE nama_karyawan = ?';
  connection.query(sql, [salary, nama_karyawan], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, message: 'Salary karyawan berhasil diupdate' });
    }
  });
});

// Endpoint DELETE untuk menghapus karyawan
app.delete('/api/delete-employee/:nama_karyawan', (req, res) => {
  const { name } = req.params;
  const sql = 'DELETE FROM karyawan WHERE nama_karyawan = ?';
  connection.query(sql, [nama_karyawan], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, message: 'Karyawan berhasil dihapus' });
    }
  });
});


process.on('SIGINT', () => {
  connection.end((err) => {
    console.log('Database connection closed');
    process.exit(err ? 1 : 0);
  });
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
