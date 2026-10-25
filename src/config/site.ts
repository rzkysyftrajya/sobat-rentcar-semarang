/** Konfigurasi terpusat brand, profil perusahaan, dan kontak Sobat RentCar Semarang. */
export const siteConfig = {
  name: "Sobat RentCar Semarang",
  shortName: "Sobat RentCar",
  domain: "https://sobatrentcarsemarang.com",
  tagline: "Perjalanan Lebih Nyaman Bersama Sobat RentCar Semarang",
  description:
    "Layanan rental mobil di Semarang dan sekitarnya untuk kebutuhan pribadi, keluarga, bisnis, dan wisata. Konsultasi pemesanan melalui WhatsApp.",
  company: {
    legalName: "CV. Sobat Transport",
    nib: "2901240060348",
    ministryDecree: "AHU-0003588-AH.01.14 Tahun 2024",
    taxNumber: "03.752.277.8-517.000",
  },
  location: "Jl. Tlompak RT.03/RW.08, Kelurahan Tandang, Kecamatan Tembalang, Kota Semarang 50274",
  email: "sobatrent@gmail.com",
  contacts: {
    reservation: [
      { name: "Reni", phone: "0811 2792 600" },
      { name: "Agus", phone: "0819 1422 5951" },
    ],
    feedback: "0811 3837 111",
  },
  whatsapp: {
    primary: "0811 2792 600",
    backup: "0819 1422 5951",
  },
  /**
   * Tanda status data bisnis. Selama false, jangan menampilkan klaim
   * (tahun berdiri, jumlah armada, ulasan, penghargaan, dsb).
   */
  dataStatus: {
    kontakTerverifikasi: true,
    ulasanGoogleTerverifikasi: true,
    logoResmiTersedia: false, // set true + pasang file logo di src/assets saat logo asli diterima
  },
} as const;

export type NavItem = { label: string; path: string };

export const navigation: NavItem[] = [
  { label: "Beranda", path: "/" },
  { label: "Tentang", path: "/tentang" },
  { label: "Armada", path: "/armada" },
  { label: "Layanan", path: "/layanan" },
  { label: "Artikel", path: "/artikel" },
  { label: "Galeri", path: "/galeri" },
  { label: "Paket Wisata", path: "/paket-wisata" },
];
