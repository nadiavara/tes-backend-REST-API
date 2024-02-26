const app = require('./app'); // Import modul Express dari file app.js

const port = process.env.PORT || 3000;

// Jalankan server pada port tertentu
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});