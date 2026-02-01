# ✨ Little Charms - Handmade Accessories E-Commerce

**Little Charms** adalah platform e-commerce yang dirancang untuk memasarkan perhiasan tangan (handmade) dan aksesoris kustom. Proyek ini menggabungkan estetika desain modern dengan fungsionalitas belanja digital yang lengkap.

---

## 📸 Screenshots

![Products Overview](src/image/screenshoot_web.png)
*Tampilan koleksi Product Little Charms*

## ✨ Fitur Utama

### 🛍️ Katalog & Filtering
* **Product Collection**: Menampilkan produk kategori Bracelets, Rings, Phone Straps, dan Keychains secara dinamis.
* **Aesthetic Filter**: Sistem penyaringan produk berdasarkan tren (Y2K, Coquette, Album Music) untuk memudahkan user mencari gaya tertentu.
* **Stock Management**: Status ketersediaan barang (In Stock) yang terupdate secara otomatis.

### 🛒 Keranjang Belanja & Checkout
* **Automated Calculation**: Kalkulasi subtotal, pajak (8%), dan total belanja secara real-time di halaman Shopping Cart.
* **Quantity Control**: Fitur untuk menambah atau mengurangi jumlah item langsung di keranjang.
* **Secure Payment**: Integrasi antarmuka pembayaran yang aman (Stripe integration).

### 📖 Branding & Informasi
* **Our Story**: Halaman profil bisnis yang menjelaskan perjalanan brand sejak tahun 2023.
* **Blog & Tips**: Edukasi pelanggan mengenai tren fashion terbaru dan cara merawat aksesoris handmade.
* **Contact & FAQ**: Sistem bantuan pelanggan terpadu melalui form kontak dan daftar pertanyaan umum.

## 🛠️ Tech Stack

* **Frontend:** React.js / Tailwind CSS
* **Server:** Nginx
* **Database:** MySQL (Dikelola via Navicat)
* **Containerization:** Docker & Docker Compose
* **Design:** Figma / Canva

## 📁 Struktur Folder

Berdasarkan arsitektur proyek:
- `nginx/`: Konfigurasi web server.
- `src/`: Source code utama aplikasi.
    - `components/`: Komponen UI (Navbar, Product Card, Footer).
    - `pages/`: Halaman utama (Home, Shop, Blog, Cart).
    - `assets/`: Asset gambar produk dan ikon.
- `docker-compose.yml`: Konfigurasi orkestrasi container untuk deployment.

## 🚀 Cara Instalasi

Pastikan kamu sudah menginstal **Docker** dan **Docker Compose** di perangkatmu.

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/dfulndri/LittleCharms-E-Commerence.git](https://github.com/dfulndri/LittleCharms-E-Commerence.git)
   cd web_littlecharms