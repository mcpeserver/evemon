# Panduan Kontribusi — EVEMON SMP Website

Pertama-tama, terima kasih telah tertarik untuk berkontribusi pada pengembangan website resmi **EVEMON SMP**! Komunitas kami tumbuh karena kontribusi tulus dari para pengembang seperti Anda.

Untuk menjaga kualitas kode tetap bersih, elegan, dan sesuai dengan identitas visual EVEMON, mohon perhatikan beberapa panduan kontribusi berikut.

---

## 🌌 Arah Kontribusi

Kami sangat menyambut pembenahan bug, peningkatan performa, optimalisasi aksesibilitas, atau perapian desain UI.

Namun mohon diingat:
- **Jangan Mengubah Tema Warna**: Kami berkomitmen pada identitas *Moonlight Dark Luxury* (hitam, abu-abu, silver, bulan sabit). Kontribusi yang mengubah tema menjadi hijau, ungu cerah, atau neon akan ditolak kecuali atas permintaan konsili.
- **Batas Teks Filosofi**: Tetap pertahankan teks filosofi dan deskripsi panjang dalam ukuran kecil yang anggun demi menjaga keindahan ruang kosong (*whitespace*).

---

## 🛠️ Langkah Memulai

1. **Fork Repositori**: Lakukan fork repositori ini ke akun GitHub Anda.
2. **Buat Branch Fitur**: Buat branch baru dari branch utama dengan nama deskriptif.
   ```bash
   git checkout -b fitur/nama-fitur-anda
   ```
3. **Lakukan Perubahan**: Tulis kode Anda sesuai dengan panduan TypeScript dan Tailwind CSS v4.
4. **Validasi Kode**: Pastikan tidak ada kesalahan ketik ataupun kesalahan linting:
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit Perubahan**: Lakukan commit dengan pesan yang jelas dan ramah.
   ```bash
   git commit -m "fitur: menambahkan animasi lembut pada transisi kartu aturan"
   ```
6. **Push & Pull Request**: Push ke branch fork Anda dan ajukan Pull Request ke branch utama repositori ini.

---

## 📝 Aturan Penulisan Kode

- Gunakan **TypeScript** secara ketat untuk tipe data baru.
- Gunakan ikonografi dari **Lucide React**. Jangan membuat SVG manual di dalam komponen kecuali jika sangat mendesak.
- Selalu uji responsivitas tampilan mulai dari layar ponsel kecil hingga monitor desktop ultra-wide.

Kami sangat menghargai kontribusi Anda di bawah naungan rembulan yang sama! 🌙
