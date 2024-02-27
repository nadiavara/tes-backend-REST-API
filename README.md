Berikut adalah langkah-langkah untuk membuat REST API menggunakan Node.js dan Express sesuai dengan kebutuhan yang Anda jelaskan:

### Langkah 1: Persiapkan Lingkungan Pengembangan

1. Pastikan Node.js dan npm terinstal
2. Buat direktori proyek dan inisialisasi proyek dengan `npm init -y`.

### Langkah 2: Instalasi Modul dan Dependensi

```bash
npm install express mysql body-parser
```

### Langkah 3: Buat File `app.js`

```javascript

- Membuat Endpoint untuk menampilkan karyawan yang sedang login
- Implementasikan logika untuk menampilkan karyawan yang sedang login
- Endpoint untuk menampilkan data karyawan yang tidak ada pada tabel user
- Implementasikan logika untuk menampilkan data karyawan yang tidak ada pada tabel user
- Endpoint untuk menampilkan data karyawan unit HR beserta salarynya
- Implementasikan logika untuk menampilkan data karyawan unit HR beserta salarynya
- Endpoint untuk menambahkan karyawan unit kerja "Technical Jakarta" dengan salary 9.000.000
- Implementasikan logika untuk menambahkan karyawan unit kerja
- Endpoint untuk update salary karyawan "Indra" menjadi 10.000.000
- Implementasikan logika untuk update salary karyawan
  

### Langkah 4: Git dan GitHub

```bash
git init
echo "node_modules/" > .gitignore
echo "config/database.json" >> .gitignore
git add .
git commit -m "tes-backend-REST-API"
```

### Langkah 5: Buat `README.md`

Buat file `README.md` yang menjelaskan environment dan cara membangun project tersebut. Cantumkan informasi seperti versi Node.js, modul yang digunakan, dan langkah-langkah instalasi dan penggunaan.

### Langkah 6: Push ke GitHub

1. Buat repository baru di GitHub.
2. Hubungkan proyek lokal Anda dengan repository GitHub:

   ```bash
   git remote add origin https://github.com/nadiavara/tes-backend-REST-API.git
   ```

3. Push proyek ke GitHub:

   ```bash
   git push -u origin master
   ```

   Selesai