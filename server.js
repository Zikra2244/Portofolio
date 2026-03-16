const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server portofolio berhasil berjalan!`);
  console.log(`   - Akses dari dalam VPS (lokal): http://localhost:${PORT}`);
  console.log(
    `   - Akses dari luar (publik/browser): http://<ALAMAT_IP_PUBLIK_ANDA>:${PORT}`,
  );
});
