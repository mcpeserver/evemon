# 🌙 EVEMON SMP — Website Resmi Komunitas Minecraft

Selamat datang di repositori resmi **EVEMON SMP**! Website ini dirancang dengan penuh dedikasi sebagai representasi identitas visual dunia EVEMON yang tenang, misterius, elegan, dan penuh makna. Desainnya mengusung konsep *Minimalism*, *Dark Luxury*, *Moonlight*, dan *Cinematic*, menghindari kesan template AI generik demi menghadirkan rasa petualangan murni di bawah sinar rembulan malam.

---

## 🌌 Filosofi Desain

Logo **EVEMON** mengusung simbol bulan sabit yang melambangkan perjalanan, waktu, dan perubahan berkelanjutan, sedangkan bintang-bintang di sekelilingnya melambangkan harapan dan arah tujuan bersama. 

Untuk merefleksikan identitas tersebut secara kuat, website ini:
- **Didominasi oleh Warna Kegelapan Murni**: *Obsidian Black*, *Charcoal*, *Graphite*, dan *Moon White* sebagai teks utama, dengan aksen *Moon Glow* (cahaya rembulan) serta sedikit kilatan emas sebagai penanda visual yang elegan.
- **Aset Minecraft yang Sinematik**: Latar belakang serta citra utama menggambarkan lanskap malam sunyi bergaya Minecraft semi-realistis dengan kabut tipis dan desa tenang di kejauhan.
- **Teks Filosofi Ringkas**: Bagian filosofi dikemas dalam ukuran huruf kecil, rapi, dan bergaya editorial layaknya artikel majalah premium.

---

## 🛠️ Struktur Proyek

Website ini dibangun menggunakan **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** untuk animasi, dan **Lucide React** untuk ikonografi.

```bash
/
├── .github/                       # GitHub workflow, issue, & PR templates
├── src/
│   ├── assets/                    # Aset utama (logo.png, hero.png, background.png)
│   ├── components/                # Komponen modular visual React
│   │   ├── DeveloperBar.tsx       # Developer Bar dinamis di atas header
│   │   ├── Navbar.tsx             # Navigasi utama dengan auto-scroll & blur
│   │   ├── Hero.tsx               # Header hero interaktif dengan salin IP
│   │   ├── Philosophy.tsx         # Bagian filosofi artikel editorial
│   │   ├── ServerInfo.tsx         # Informasi akses Java & Bedrock Edition
│   │   ├── Rules.tsx              # Kartu regulasi & aturan server
│   │   ├── Consequences.tsx       # Kutipan konsekuensi (editorial blockquote)
│   │   └── Footer.tsx             # Footer minimalis dengan relasi dinamis
│   ├── config/
│   │   └── site.ts                # Konfigurasi teks, IP, port, & sosial server
│   ├── hooks/
│   │   └── useDeveloperConfig.ts  # Hook untuk fetch data developer secara dinamis
│   ├── index.css                  # Konfigurasi font (Inter, Space Grotesk, JetBrains Mono)
│   └── App.tsx                    # Layout utama dengan parallax background
├── package.json                   # Daftar dependensi & script pembangunan
└── tsconfig.json                  # Konfigurasi penulisan TypeScript
```

---

## ⚙️ Cara Mengubah Data Server & Aset

### 1. Mengubah Data Server (`src/config/site.ts`)
Semua informasi server dipusatkan pada file `src/config/site.ts`. Anda dapat memperbarui IP, Port, tautan sosial, regulasi, maupun kutipan konsekuensi langsung di sana tanpa perlu menyentuh file komponen utama:
```typescript
export const siteConfig = {
  name: "EVEMON SMP",
  server: {
    javaIp: "play.evemonsmp.xyz",
    bedrockIp: "pe.evemonsmp.xyz",
    javaPort: 25565,
    bedrockPort: 19132,
  },
  // ... sesuaikan data lainnya
}
```

### 2. Mengubah Gambar & Aset Visual (`src/assets/`)
Untuk mengganti visual website, cukup timpa gambar yang ada di folder `/src/assets/` dengan nama dan format file yang persis sama:
- `logo.png`: Logo utama berbentuk bulan sabit dan bintang.
- `hero.png`: Ilustrasi Minecraft bertema malam sunyi untuk latar belakang header utama.
- `background.png`: Ilustrasi bertema hutan kabut Minecraft untuk latar belakang parallax.

---

## ⚡ Integrasi Data Developer Dinamis

Untuk menjaga fleksibilitas tanpa perlu mengubah kode sumber website, informasi pengembang dan komunitas di-fetch secara dinamis dari API eksternal berikut di sisi klien pada komponen **DeveloperBar** dan **Footer**:

```javascript
fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
  .then(res => res.json())
  .then(data => {
    // Data dimuat secara otomatis:
    // data.name, data.contact.whatsapp, data.website.portfolio, data.community.name, dll.
  });
```
Jika data dari API berubah, Developer Bar dan Footer akan ikut terbarui secara instan secara otomatis.

---

## 🚀 Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas disarankan) dan **npm**.

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/username/evemon-smp-website.git
   cd evemon-smp-website
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Mode Pengembangan**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

4. **Build untuk Produksi**:
   ```bash
   npm run build
   ```

---

## ☁️ Panduan Deploy ke Vercel

Proyek ini sepenuhnya kompatibel dan siap di-deploy ke **Vercel**:
1. Hubungkan repositori GitHub Anda ke akun Vercel.
2. Tambahkan proyek baru dan pilih repositori ini.
3. Gunakan konfigurasi default (Vite/React). Vercel akan otomatis mendeteksi script pembangunan dan menyajikan website Anda secara instan di edge network mereka.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT** - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut. Dikembangkan dengan penuh rasa hormat oleh **Ran Dev** untuk seluruh pengelana jagat Minecraft. 🌙
