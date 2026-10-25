/**
 * Data layanan. Hanya menampilkan layanan yang disebut website lama;
 * setiap layanan punya flag `active` agar mudah dinonaktifkan.
 * Jangan menambah klaim operasional (syarat, cakupan wilayah, fasilitas) di sini.
 */
export type Service = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  benefits: string[];
  suitableFor: string[];
  consultNeeds: string[];
  active: boolean;
};

export const services: Service[] = [
  {
    id: "dengan-driver",
    title: "Rental Mobil dengan Driver",
    slug: "rental-dengan-driver",
    shortDescription:
      "Perjalanan dengan pengemudi sehingga Anda dapat fokus pada perjalanan tanpa perlu mengurus rute dan parkir.",
    benefits: [
      "Tidak perlu menyetir sendiri, cukup duduk dan menikmati perjalanan.",
      "Pengemudi membantu mengurus rute dan parkir.",
      "Cocok untuk perjalanan panjang atau lokasi yang tidak Anda kenal.",
    ],
    suitableFor: [
      "Keluarga yang ingin perjalanan lebih santai.",
      "Perjalanan bisnis dengan jadwal yang padat.",
      "Wisatawan yang belum familiar dengan area Semarang.",
    ],
    consultNeeds: [
      "Rute atau tujuan perjalanan.",
      "Tanggal dan perkiraan durasi.",
      "Jumlah penumpang.",
    ],
    active: true,
  },
  {
    id: "lepas-kunci",
    title: "Rental Mobil Lepas Kunci",
    slug: "rental-lepas-kunci",
    shortDescription:
      "Menyewa kendaraan yang Anda kendarai sendiri untuk fleksibilitas perjalanan sesuai rencana Anda.",
    benefits: [
      "Kendali penuh atas rute dan jadwal perjalanan.",
      "Cocok untuk kebutuhan mobilitas harian atau aktivitas pribadi.",
      "Rencana perjalanan dapat diatur sendiri.",
    ],
    suitableFor: [
      "Individu atau keluarga yang nyaman menyetir sendiri.",
      "Kebutuhan mobilitas harian di sekitar Semarang.",
      "Perjalanan dengan rencana yang fleksibel.",
    ],
    consultNeeds: [
      "Tanggal pengambilan dan pengembalian.",
      "Rencana tujuan perjalanan.",
      "Jenis kendaraan yang diinginkan.",
    ],
    active: true,
  },
  {
    id: "transportasi-keluarga",
    title: "Transportasi Keluarga",
    slug: "transportasi-keluarga",
    shortDescription:
      "Kendaraan yang nyaman untuk perjalanan keluarga, dari acara keluarga di kota hingga liburan bersama.",
    benefits: [
      "Ruang yang lebih lega untuk keluarga dan bawaan.",
      "Rencana perjalanan dapat dikonsultasikan terlebih dahulu.",
      "Cocok untuk acara keluarga, liburan, dan kunjungan antarkota.",
    ],
    suitableFor: [
      "Liburan keluarga di Semarang dan sekitarnya.",
      "Acara keluarga seperti pengajian, walimahan, atau kondangan antarkota.",
      "Penjemputan keluarga dari stasiun atau bandara.",
    ],
    consultNeeds: [
      "Jumlah anggota keluarga yang ikut perjalanan.",
      "Tujuan dan tanggal perjalanan.",
      "Kebutuhan khusus (misalnya ruang bagasi lebih).",
    ],
    active: true,
  },
  {
    id: "perjalanan-bisnis",
    title: "Transportasi Perjalanan Bisnis",
    slug: "transportasi-bisnis",
    shortDescription:
      "Mendukung jadwal kerja dengan transportasi yang tertata untuk meeting, kunjungan klien, dan kegiatan korporat.",
    benefits: [
      "Perjalanan antar lokasi kerja lebih tertata.",
      "Waktu perjalanan dapat digunakan untuk persiapan kerja.",
      "Cocok untuk jadwal beberapa lokasi dalam satu hari.",
    ],
    suitableFor: [
      "Kunjungan klien atau meeting di berbagai lokasi.",
      "Pekerja yang sedang bertugas di Semarang.",
      "Kegiatan perusahaan seperti inspeksi atau survei lapangan.",
    ],
    consultNeeds: [
      "Agenda dan lokasi yang akan dikunjungi.",
      "Tanggal dan durasi pengerjaan.",
      "Jumlah orang yang ikut serta.",
    ],
    active: true,
  },
  {
    id: "transportasi-rombongan",
    title: "Transportasi Rombongan",
    slug: "transportasi-rombongan",
    shortDescription:
      "Pengangkutan rombongan dengan kendaraan berkapasitas lebih besar untuk kegiatan bersama.",
    benefits: [
      "Satu armada untuk satu rombongan, memudahkan koordinasi.",
      "Cocok untuk kegiatan keberangkatan bersama dengan titik kumpul yang sama.",
      "Rencana perjalanan rombongan dapat dibahas lebih detail saat konsultasi.",
    ],
    suitableFor: [
      "Rombongan keluarga besar atau arisan.",
      "Kegiatan organisasi, kantor, atau sekolah.",
      "Keberangkatan bersama ke luar kota.",
    ],
    consultNeeds: [
      "Jumlah peserta rombongan.",
      "Titik kumpul dan tujuan.",
      "Tanggal keberangkatan.",
    ],
    active: true,
  },
  {
    id: "perjalanan-wisata",
    title: "Perjalanan Wisata",
    slug: "perjalanan-wisata",
    shortDescription:
      "Perjalanan wisata ke destinasi di Semarang dan sekitarnya dengan rencana perjalanan yang dibicarakan terlebih dahulu.",
    benefits: [
      "Rencana kunjungan destinasi dapat dikonsultasikan lebih dahulu.",
      "Fokus pada kenyamanan perjalanan, bukan sekadar sampai tujuan.",
      "Bisa disesuaikan dengan ritme perjalanan keluarga atau rombongan.",
    ],
    suitableFor: [
      "Wisatawan yang berkunjung ke Semarang.",
      "Warga Semarang yang ingin menjelajah destinasi sekitar.",
      "Rombongan wisata keluarga atau komunitas.",
    ],
    consultNeeds: ["Destinasi yang ingin dikunjungi.", "Durasi perjalanan.", "Jumlah peserta."],
    active: true,
  },
];
