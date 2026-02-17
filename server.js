// 1. Impor library yang dibutuhkan
const express = require('express');
const path = require('path');

// 2. Inisialisasi aplikasi Express
const app = express();
const PORT = process.env.PORT || 3000;

// 3. Middleware untuk menyajikan file statis dari folder 'public'
// Ini sudah cukup untuk menyajikan index.html, foto_profil.jpg, dll.
app.use(express.static(path.join(__dirname, 'public')));

// CATATAN: Rute app.get('/') yang sebelumnya ada di sini telah dihapus.
// Alasannya, baris app.use(express.static(...)) di atas sudah secara otomatis 
// menangani penyajian file 'index.html' saat alamat utama ('/') diakses.
// Ini membuat kode lebih bersih dan efisien.

// 4. Menjalankan server dan memberikan log yang lebih informatif
// Menambahkan '0.0.0.0' secara eksplisit memastikan server mendengarkan
// koneksi dari semua alamat IP, bukan hanya localhost.
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server portofolio berhasil berjalan!`);
  console.log(`   - Akses dari dalam VPS (lokal): http://localhost:${PORT}`);
  console.log(`   - Akses dari luar (publik/browser): http://<ALAMAT_IP_PUBLIK_ANDA>:${PORT}`);
});
