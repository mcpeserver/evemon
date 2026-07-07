export interface SiteConfig {
  name: string;
  description: string;
  server: {
    javaIp: string;
    bedrockIp: string;
    javaPort: number;
    bedrockPort: number;
  };
  socials: {
    discord: string;
    whatsapp: string;
  };
  navigation: {
    name: string;
    href: string;
  }[];
  philosophy: {
    title: string;
    content: string;
    quote: string;
  };
  rules: {
    id: string;
    title: string;
    description: string;
    iconName: string;
  }[];
  consequences: {
    text: string;
    author: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "EVEMON SMP",
  description: "Website resmi EVEMON SMP - Komunitas Minecraft yang tenang, misterius, dan penuh petualangan di bawah sinar rembulan.",
  server: {
    javaIp: "play.evemonsmp.xyz",
    bedrockIp: "pe.evemonsmp.xyz",
    javaPort: 25565,
    bedrockPort: 19132,
  },
  socials: {
    discord: "https://discord.gg/9KUN2byKRM",
    whatsapp: "https://wa.me/62895602592430",
  },
  navigation: [
    { name: "Beranda", href: "#beranda" },
    { name: "Filosofi", href: "#filosofi" },
    { name: "Informasi Server", href: "#server-info" },
    { name: "Aturan", href: "#aturan" },
    { name: "Komunitas", href: "#komunitas" },
  ],
  philosophy: {
    title: "Cahaya di Tengah Kesunyian",
    content: "Di bawah naungan EVEMON, petualangan bukanlah tentang seberapa cepat kita menaklukkan naga, melainkan seberapa dalam kita meresapi kesunyian malam, seberapa hangat kita menyapa sesama pengelana, dan seberapa indah kita membangun peradaban di atas tanah yang damai. Bulan sabit menjadi saksi bisu dari setiap pondok kayu yang didirikan, setiap jalan setapak yang dirintis, dan setiap tawa yang dibagikan di sekitar api unggun yang berderak hangat.",
    quote: "Perjalanan sejati tidak diukur dari jarak yang ditempuh, melainkan dari kedamaian yang kita temukan dan tinggalkan di sepanjang jalan setapak dunia EVEMON.",
  },
  rules: [
    {
      id: "rule-1",
      title: "Saling Menghormati & Menjaga Adab",
      description: "Menghargai sesama pemain tanpa memandang suku, agama, ras, dan antar-golongan. Komunikasi yang sehat adalah pilar utama kedamaian komunitas.",
      iconName: "ShieldAlert",
    },
    {
      id: "rule-2",
      title: "Anti-Griefing & Anti-Mencuri",
      description: "Dilarang keras merusak, mengubah, atau mengambil barang milik pemain lain tanpa izin tertulis atau persetujuan lisan yang jelas.",
      iconName: "HeartCrack",
    },
    {
      id: "rule-3",
      title: "Gunakan Klien & Modifikasi Orisinal",
      description: "Dilarang menggunakan cheat, hacked client, X-ray, atau modifikasi ilegal apa pun yang memberikan keuntungan tidak adil atas pemain lain.",
      iconName: "FileX",
    },
    {
      id: "rule-4",
      title: "Hormati Wilayah & Klaim Pemain Lain",
      description: "Jangan membangun terlalu dekat dengan area pemain lain tanpa persetujuan mereka. Berikan ruang yang cukup agar setiap pemain dapat berekspresi.",
      iconName: "Compass",
    },
    {
      id: "rule-5",
      title: "Jaga Kelestarian Alam Minecraft",
      description: "Hindari penebangan pohon tanpa menanam kembali (no floating trees) dan jangan membuat lubang-lubang galian tak teratur di permukaan bumi.",
      iconName: "TreePine",
    },
    {
      id: "rule-6",
      title: "Dilarang Eksploitasi Bug & Glitch",
      description: "Melaporkan setiap celah keamanan atau bug server kepada tim moderator, bukan menyalahgunakannya demi keuntungan pribadi.",
      iconName: "Terminal",
    },
  ],
  consequences: {
    text: "Setiap pelanggaran memiliki konsekuensi yang nyata. Kami percaya pada keadilan, namun kami tidak mentolerir tindakan yang merusak kedamaian dan keharmonisan dunia EVEMON. Jagalah tempat ini layaknya rumahmu sendiri.",
    author: "Tim Konsili EVEMON SMP",
  },
};
