# Gunakan base image Node.js versi 18 yang ringan (Alpine)
FROM node:18-alpine

# Tetapkan direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu
# Ini memanfaatkan cache Docker agar 'npm install' hanya berjalan jika ada perubahan dependensi
COPY package*.json ./

# Instal semua dependensi proyek
RUN npm install

# Salin sisa file proyek ke dalam direktori kerja di container
COPY . .

# Beri tahu Docker bahwa container akan berjalan di port 3000
EXPOSE 3000

# Perintah untuk menjalankan aplikasi saat container dimulai
CMD ["node", "server.js"]