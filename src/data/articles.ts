/**
 * Dataset artikel SEO yang relevan untuk brand Sobat RentCar Semarang.
 * Konten dibuat untuk panduan umum, bukan klaim pengalaman perusahaan.
 */
import perjalananBisnisImage from "@/assets/card-hero-section/perjalanan-bisnis.webp";
import perjalananKeluargaImage from "@/assets/card-hero-section/perjalanan-keluarga.webp";
import pilihanArmadaImage from "@/assets/card-hero-section/pilihan-armada.webp";
import jelajahSemarangImage from "@/assets/card-hero-section/jelajah-semarang.webp";
import wisataPilihanImage from "@/assets/card-hero-section/wisata-pilihan.webp";
import rombonganImage from "@/assets/artikel/Tips-Menentukan-Jenis-Kendaraan-untuk-Perjalanan-Rombongan.webp";
import rentalDriverImage from "@/assets/artikel/Rental-Mobil-dengan-Driver-atau-Lepas-Kunci.webp";
import bandunganImage from "@/assets/artikel/persiapan-wisata-semarang-bandungan.webp";
import penjemputanImage from "@/assets/artikel/tips-penjemputan-bandara-stasiun-semarang.webp";

export type ArticleCategory =
  | "Wisata Semarang"
  | "Panduan Transportasi"
  | "Tips Perjalanan"
  | "Perjalanan Bisnis"
  | "Panduan Rental Mobil";

export type ArticleBlock =
  { type: "p"; text: string } | { type: "h2"; text: string } | { type: "ul"; items: string[] };

export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  category: ArticleCategory;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  content: ArticleBlock[];
};

export const articleCategories: ArticleCategory[] = [
  "Wisata Semarang",
  "Panduan Transportasi",
  "Tips Perjalanan",
  "Perjalanan Bisnis",
  "Panduan Rental Mobil",
];

export const articles: Article[] = [
  {
    title: "Panduan Memilih Rental Mobil untuk Perjalanan di Semarang",
    slug: "panduan-memilih-rental-mobil-semarang",
    excerpt:
      "Sebelum memesan kendaraan, pastikan Anda menyesuaikan jenis perjalanan, kapasitas penumpang, durasi, dan pilihan layanan agar pengalaman di Semarang tetap nyaman.",
    coverImage: pilihanArmadaImage,
    coverImageAlt: "Kendaraan rental yang siap digunakan untuk perjalanan di Semarang",
    category: "Panduan Rental Mobil",
    publishedAt: "2026-10-05",
    updatedAt: "2026-10-20",
    content: [
      {
        type: "p",
        text: "Memesan rental mobil terasa sederhana, tetapi keputusan yang kurang tepat bisa membuat perjalanan terasa lebih berat karena kendaraan tidak sesuai kebutuhan, durasi tidak jelas, atau jadwal tidak terekam dengan baik. Panduan ini membantu Anda menyiapkan kebutuhan sebelum menghubungi admin dan mempermudah proses pemesanan.",
      },
      { type: "h2", text: "1. Tentukan kebutuhan perjalanan Anda" },
      {
        type: "p",
        text: "Pertama, pahami apakah perjalanan Anda bersifat dalam kota, antar kota, wisata keluarga, atau agenda bisnis. Perjalanan dalam kota biasanya lebih ringan dan cocok untuk kendaraan yang ringkas, sementara perjalanan antarkota atau rombongan sering memerlukan kapasitas ruang yang lebih luas dan waktu tempuh yang lebih realistis.",
      },
      { type: "h2", text: "2. Pilih layanan yang sesuai dengan pola perjalanan" },
      {
        type: "p",
        text: "Layanan dengan driver cocok jika Anda ingin fokus pada agenda atau tidak ingin repot mengatur rute. Sedangkan lepas kunci memberi fleksibilitas lebih dalam hal jadwal, namun Anda tetap perlu menilai kesiapan diri dalam mengelola perjalanan, termasuk waktu tempuh dan aturan penggunaan kendaraan. Selalu konfirmasi detail layanan sebelum finalisasi pemesanan.",
      },
      { type: "h2", text: "3. Sesuaikan kendaraan dengan jumlah penumpang dan bagasi" },
      {
        type: "ul",
        items: [
          "Hitung jumlah penumpang serta bagasi yang dibawa agar tidak terasa sesak saat berkendara.",
          "Untuk perjalanan keluarga atau rombongan, pilih kendaraan yang memberi ruang gerak lebih nyaman.",
          "Pastikan kapasitas aktual kendaraan sesuai dengan kebutuhan, bukan hanya melihat nama model saja.",
        ],
      },
      { type: "h2", text: "4. Konfirmasi durasi dan penggunaan kendaraan" },
      {
        type: "p",
        text: "Sampaikan rencana keberangkatan, tujuan, dan durasi penggunaan kendaraan secara jelas. Hal ini penting untuk memastikan waktu sewa, titik penjemputan, dan kebutuhan perubahan jadwal bisa dibahas sejak awal. Jangan lupa menanyakan hal-hal seperti penggunaan di luar kota, titik antar-jemput, atau pembatasan area perjalanan yang mungkin berlaku.",
      },
      { type: "h2", text: "Checklist sebelum memesan" },
      {
        type: "ul",
        items: [
          "Tentukan tujuan dan estimasi durasi perjalanan.",
          "Pilih layanan dengan driver atau lepas kunci sesuai kebutuhan.",
          "Cocokkan jumlah penumpang, bagasi, dan kenyamanan selama perjalanan.",
          "Sampaikan jadwal, titik penjemputan, dan kebutuhan khusus ke admin.",
          "Konfirmasi semua persyaratan dan ketentuan sewa sebelum booking.",
        ],
      },
      {
        type: "p",
        text: "Dengan informasi yang jelas, proses pemesanan akan lebih cepat dan hasilnya lebih sesuai dengan kebutuhan perjalanan Anda. Jika Anda sedang merencanakan aktivitas di Semarang, konsultasikan kebutuhan kendaraan melalui WhatsApp agar rekomendasi lebih tepat.",
      },
    ],
  },
  {
    title: "Itinerary Wisata Semarang 1 Hari",
    slug: "itinerary-wisata-semarang-1-hari",
    excerpt:
      "Buat rencana satu hari yang realistis dengan menggabungkan destinasi ikonik, jeda makan, dan waktu istirahat tanpa terlalu padat untuk keluarga atau pasangan.",
    coverImage: jelajahSemarangImage,
    coverImageAlt: "Destinasi wisata di Semarang untuk itinerary satu hari",
    category: "Wisata Semarang",
    publishedAt: "2026-10-13",
    content: [
      {
        type: "p",
        text: "Satu hari di Semarang mungkin terasa cukup untuk mengeksplorasi beberapa lokasi utama, tetapi rencana yang efektif tetap membutuhkan keseimbangan antara waktu perjalanan, istirahat, dan destinasi yang realistis. Jangan menganggap semua tempat bisa dikunjungi dalam satu jadwal tanpa mempertimbangkan jam operasional, lalu lintas, dan kebutuhan istirahat.",
      },
      { type: "h2", text: "Contoh itinerary yang bisa dijadikan acuan" },
      {
        type: "ul",
        items: [
          "Pagi: mulai dari Kota Lama Semarang untuk menikmati suasana heritage dan bangunan kolonial di sekitar kawasan itu.",
          "Siang: lanjutkan ke Lawang Sewu untuk melihat arsitektur bangunan bersejarah yang menjadi ikon kota.",
          "Sore: berkunjung ke kawasan Simpang Lima untuk santai, makan, atau menikmati suasana pusat kota sebelum kembali.",
          "Jika waktu memungkinkan: tambahkan destinasi lain yang berdekatan atau pilih spot foto tambahan di area sekitar kota.",
        ],
      },
      { type: "h2", text: "Tips menyesuaikan jadwal" },
      {
        type: "p",
        text: "Urutan lokasi sebaiknya disesuaikan dengan jarak dan arah perjalanan. Misalnya, mulai dari area yang lebih dekat ke pusat kota terlebih dahulu, lalu lanjutkan ke tujuan yang lebih jauh bila waktu masih memungkinkan. Jam operasional tiap destinasi bisa berubah, sementara lalu lintas di kota juga berpengaruh dengan estimasi waktu tempuh.",
      },
      { type: "h2", text: "Makan, istirahat, dan kondisi perjalanan" },
      {
        type: "p",
        text: "Simpan jeda untuk makan siang, minum, dan istirahat pendek. Ini sangat penting jika Anda membawa keluarga atau rombongan. Selain itu, pantau kondisi lalu lintas dan cuaca, terutama jika rencana Anda mencakup area yang lebih ramai di siang hari atau lintasan yang cukup panjang.",
      },
      { type: "h2", text: "Alternatif untuk kedatangan dari stasiun atau bandara" },
      {
        type: "p",
        text: "Bagi pengunjung yang tiba dari stasiun atau bandara, pilih destinasi yang dapat dijangkau dengan waktu tempuh yang relatif pendek dan hindari terlalu banyak berpindah lokasi. Fokus pada dua sampai tiga titik utama agar rencana tidak terlalu berat. Jika jadwal kedatangan berubah, Anda bisa menyesuaikan urutan kunjungan tanpa mengorbankan waktu istirahat.",
      },
      {
        type: "p",
        text: "Selalu cek jam operasional dan kondisi akses saat hari H, karena destinasi, jalur, serta kepadatan lalu lintas dapat berubah sesuai situasi. Dengan rencana yang fleksibel, kunjungan tetap terasa nyaman dan tidak terlalu terburu-buru.",
      },
    ],
  },
  {
    title: "Rekomendasi Perencanaan Wisata Semarang untuk Keluarga",
    slug: "perencanaan-wisata-semarang-keluarga",
    excerpt:
      "Merencanakan liburan keluarga di Semarang berarti menyeimbangkan destinasi yang menarik, jadwal yang realistis, dan kenyamanan perjalanan untuk semua anggota keluarga.",
    coverImage: perjalananKeluargaImage,
    coverImageAlt: "Keluarga merencanakan liburan di Semarang dengan kendaraan yang sesuai",
    category: "Wisata Semarang",
    publishedAt: "2026-10-12",
    content: [
      {
        type: "p",
        text: "Liburan keluarga akan terasa lebih menyenangkan ketika perjalanan tidak terlalu padat. Semarang menawarkan pilihan destinasi yang cukup beragam, mulai dari kawasan bersejarah di Kota Lama hingga area yang lebih santai untuk berfoto, menikmati kuliner, atau sekadar berjalan santai sambil menikmati angin kota.",
      },
      { type: "h2", text: "Pilih destinasi yang sesuai usia dan kebutuhan keluarga" },
      {
        type: "ul",
        items: [
          "Kota Lama Semarang cocok untuk menjelajah area bersejarah dengan suasana yang lebih santai.",
          "Lawang Sewu menjadi pilihan yang populer untuk pengalaman historis dan foto keluarga.",
          "Simpang Lima dan area sekitar pusat kota cocok untuk jeda santai, makan, atau waktu berkumpul singkat.",
          "Apabila Anda ingin suasana yang lebih tenang, pilih destinasi dengan waktu tempuh yang lebih terukur dan tidak terlalu padat.",
        ],
      },
      { type: "h2", text: "Menyusun jadwal yang nyaman" },
      {
        type: "p",
        text: "Jika bersama anak kecil, batasi jumlah destinasi utama dalam satu hari. Dua sampai tiga titik cukup untuk menjaga stamina dan mengurangi rasa capek. Saat merancang rute, utamakan lokasi yang berdekatan agar waktu tempuh antar destinasi tidak terlalu lama.",
      },
      { type: "h2", text: "Siapkan kebutuhan keluarga dengan matang" },
      {
        type: "ul",
        items: [
          "Siapkan camilan, air minum, dan obat pribadi yang mungkin dibutuhkan.",
          "Cek cuaca dan kenyamanan pakaian yang akan dipakai selama perjalanan.",
          "Sediakan waktu istirahat agar anak atau anggota keluarga tidak kelelahan saat perjalanan berlangsung.",
        ],
      },
      { type: "h2", text: "Pilih kendaraan yang mendukung kenyamanan" },
      {
        type: "p",
        text: "Untuk perjalanan keluarga, kendaraan yang memberi ruang lebih lega biasanya terasa lebih nyaman, terutama saat membawa banyak barang atau anak. Diskusikan jumlah penumpang, kebutuhan bagasi, dan rute dengan admin sebelum pemesanan agar pilihan kendaraan lebih tepat.",
      },
      {
        type: "p",
        text: "Karena waktu kunjungan, jam operasional, dan arus lalu lintas bisa berubah, usahakan rencana bersifat fleksibel. Dengan pendekatan yang realistis, perjalanan keluarga di Semarang bisa terasa lebih lancar dan menyenangkan untuk semua orang.",
      },
    ],
  },
  {
    title: "Panduan Transportasi untuk Perjalanan Bisnis di Semarang",
    slug: "transportasi-perjalanan-bisnis-semarang",
    excerpt:
      "Perjalanan bisnis di Semarang memerlukan rencana yang efisien, termasuk penjemputan, urutan lokasi, dan antisipasi perubahan jadwal yang bisa terjadi di lapangan.",
    coverImage: perjalananBisnisImage,
    coverImageAlt:
      "Perjalanan bisnis di Semarang dengan kebutuhan transportasi yang rapi dan efisien",
    category: "Perjalanan Bisnis",
    publishedAt: "2026-10-15",
    content: [
      {
        type: "p",
        text: "Perjalanan dinas sering kali menuntut efisiensi. Di Semarang, kebutuhan transportasi bisnis biasanya tidak hanya soal mengantar dari satu titik ke titik lain, tetapi juga menjaga ritme agenda tetap fleksibel saat jadwal meeting berubah atau lalu lintas padat di pusat kota.",
      },
      { type: "h2", text: "Rencanakan jadwal dan urutan lokasi" },
      {
        type: "p",
        text: "Sebelum berangkat, susun urutan meeting atau kunjungan berdasarkan lokasi. Mengelompokkan area yang searah membantu mengurangi waktu tempuh dan meminimalkan kelelahan. Jika agenda melibatkan beberapa lokasi dalam satu hari, beri jeda waktu realistis untuk persiapan, diskusi, dan perubahan jadwal yang mungkin terjadi.",
      },
      { type: "h2", text: "Penjemputan dari stasiun atau bandara" },
      {
        type: "p",
        text: "Bagi perjalanan dinas yang dimulai dari stasiun atau bandara, pastikan waktu kedatangan dan titik penjemputan sudah jelas. Informasikan nomor perjalanan, estimasi waktu tiba, dan kebutuhan khusus kepada admin atau pengemudi. Menyediakan kontak yang valid serta titik temu yang jelas sangat membantu bila ada perubahan jadwal di menit-menit terakhir.",
      },
      { type: "h2", text: "Pilih kendaraan sesuai kebutuhan agenda" },
      {
        type: "ul",
        items: [
          "Untuk perjalanan dengan tim kecil, kendaraan yang nyaman untuk dua sampai empat orang biasanya cukup.",
          "Jika agenda melibatkan beberapa orang dan bagasi, pilih kendaraan dengan ruang yang lebih leluasa.",
          "Bila jadwal padat, perhitungkan lama perjalanan antar titik agar tidak mengganggu kehadiran di lokasi berikutnya.",
        ],
      },
      { type: "h2", text: "Informasi yang perlu disampaikan sebelum pemesanan" },
      {
        type: "ul",
        items: [
          "Tujuan utama dan urutan lokasi yang akan dikunjungi.",
          "Estimasi jumlah penumpang dan kebutuhan bagasi.",
          "Jam keberangkatan dari titik awal dan harapan waktu kedatangan.",
          "Kebutuhan khusus seperti penjemputan di stasiun, bandara, atau lokasi meeting tertentu.",
        ],
      },
      {
        type: "p",
        text: "Perjalanan bisnis tetap harus memiliki fleksibilitas. Dengan perencanaan yang jelas, keputusan di lapangan akan lebih mudah dibuat, serta peluang keterlambatan atau kebingungan saat jadwal berubah dapat dikurangi.",
      },
    ],
  },
  {
    title: "Tips Menentukan Jenis Kendaraan untuk Perjalanan Rombongan",
    slug: "tips-kendaraan-perjalanan-rombongan",
    excerpt:
      "Perjalanan rombongan memerlukan perencanaan kendaraan yang lebih hati-hati, terutama saat jumlah penumpang, bagasi, dan rute lebih kompleks dibanding perjalanan individu.",
    coverImage: rombonganImage,
    coverImageAlt: "Rombongan wisatawan berfoto di samping minibus untuk perjalanan bersama",
    category: "Tips Perjalanan",
    publishedAt: "2026-10-20",
    content: [
      {
        type: "p",
        text: "Saat membawa rombongan, fokus utama bukan sekadar mengatur jumlah kursi, tetapi juga memastikan tiap orang merasa nyaman selama perjalanan. Kebutuhan rombongan sering lebih kompleks karena ada perbedaan jadwal, titik kumpul, serta kebutuhan bagasi yang harus diperhitungkan sejak awal.",
      },
      { type: "h2", text: "Hitung peserta dan bagasi secara realistis" },
      {
        type: "p",
        text: "Gunakan angka yang lebih akurat daripada estimasi kasar. Rombongan dengan 10 orang jelas berbeda kebutuhan kendaraannya dengan rombongan yang berjumlah 20 atau lebih. Selain jumlah penumpang, bagasi juga berpengaruh; perlengkapan acara, tas, hingga perangkat kegiatan dapat menghabiskan banyak ruang di dalam kendaraan.",
      },
      { type: "h2", text: "Pilih kendaraan berdasarkan kapasitas aktual" },
      {
        type: "ul",
        items: [
          "Satu kendaraan besar bisa lebih praktis jika rombongan berangkat dari satu titik dan menuju satu tujuan.",
          "Jika agenda dibagi ke beberapa titik, beberapa kendaraan kecil mungkin lebih fleksibel.",
          "Kapasitas kendaraan harus dihitung berdasarkan jumlah penumpang dan ruang bagasi, bukan hanya nama model atau kapasitas tampilan.",
        ],
      },
      { type: "h2", text: "Pertimbangkan kenyamanan dan durasi perjalanan" },
      {
        type: "p",
        text: "Perjalanan jauh biasanya menuntut kenyamanan lebih, terutama saat rombongan terdiri dari orang dengan usia berbeda. Perhatikan posisi duduk, keluasan ruang, serta kemungkinan kebutuhan istirahat selama perjalanan. Kesesuaian kendaraan juga memengaruhi rasa nyaman saat menempuh rute tertentu pada jam tertentu.",
      },
      { type: "h2", text: "Checklist yang perlu dikonfirmasi" },
      {
        type: "ul",
        items: [
          "Jumlah penumpang dan perkiraan bagasi yang dibawa.",
          "Titik penjemputan dan lokasi tujuan akhir.",
          "Durasi perjalanan serta kebutuhan berhenti di tengah jalan.",
          "Kebutuhan khusus seperti kursi tambahan atau rute yang lebih efisien.",
        ],
      },
      {
        type: "p",
        text: "Setelah semua detail tercatat, konsultasikan kebutuhan tersebut dengan admin agar rekomendasi kendaraan lebih tepat. Kejelasan informasi akan memudahkan proses pemesanan dan menjaga perjalanan tetap nyaman bagi seluruh rombongan.",
      },
    ],
  },
  {
    title: "Rental Mobil dengan Driver atau Lepas Kunci?",
    slug: "rental-mobil-driver-atau-lepas-kunci",
    excerpt:
      "Pilih layanan sesuai kebutuhan Anda: driver membantu kelancaran agenda, sementara lepas kunci memberi fleksibilitas lebih dalam pengaturan jadwal dan rute.",
    coverImage: rentalDriverImage,
    coverImageAlt: "Infografik perbandingan rental mobil dengan driver dan lepas kunci",
    category: "Panduan Rental Mobil",
    publishedAt: "2026-10-22",
    content: [
      {
        type: "p",
        text: "Memilih layanan rental mobil bukan hanya soal kendaraan, tetapi juga cara penggunaan. Dua opsi yang paling umum adalah rental dengan driver dan lepas kunci. Keduanya punya kelebihan masing-masing, tergantung jenis perjalanan, jumlah penumpang, dan tingkat kenyamanan yang Anda butuhkan.",
      },
      { type: "h2", text: "Kapan sebaiknya memilih dengan driver?" },
      {
        type: "p",
        text: "Layanan dengan driver sangat cocok untuk perjalanan yang memerlukan efisiensi dan fokus pada agenda. Jika Anda tidak ingin repot mengatur rute, ingin menghemat waktu menyetir, atau bepergian bersama keluarga yang membutuhkan kenyamanan lebih, layanan dengan driver bisa menjadi pilihan yang lebih santai. Ini juga membantu bila jadwal padat atau rute tidak familiar.",
      },
      { type: "h2", text: "Kapan sebaiknya memilih lepas kunci?" },
      {
        type: "p",
        text: "Lepas kunci memberi kontrol penuh atas jadwal, rute, dan durasi perjalanan. Pilihan ini biasanya cocok untuk perjalanan mandiri, kunjungan ke beberapa titik dalam satu hari, atau kebutuhan yang mengharuskan Anda lebih fleksibel dalam mengatur waktu. Namun, Anda tetap perlu memastikan bahwa pengemudi atau penyewa memenuhi kesiapan dan pemahaman yang cukup tentang penggunaan kendaraan serta ketentuan operasional yang disepakati.",
      },
      { type: "h2", text: "Pertimbangkan kebutuhan perjalanan Anda" },
      {
        type: "ul",
        items: [
          "Perjalanan bisnis sering lebih nyaman dengan driver agar fokus pada agenda dan meeting.",
          "Perjalanan keluarga atau wisata bisa dipilih sesuai tingkat kenyamanan dan kebutuhan rute.",
          "Perjalanan mandiri lebih cocok bila Anda ingin kontrol penuh terhadap waktu dan jalur perjalanan.",
        ],
      },
      { type: "h2", text: "Hal yang perlu dikonfirmasi sebelum booking" },
      {
        type: "ul",
        items: [
          "Durasi penggunaan kendaraan dan titik penjemputan.",
          "Tujuan perjalanan serta area penggunaan yang diizinkan.",
          "Kebutuhan khusus seperti jumlah penumpang dan bagasi.",
          "Ketentuan layanan dan tanggung jawab masing-masing pihak.",
        ],
      },
      {
        type: "p",
        text: "Keputusan terbaik adalah yang paling sesuai dengan pola perjalanan Anda, bukan hanya yang paling umum. Selalu bicarakan kebutuhan detail dengan admin agar pilihan layanan Anda benar-benar mendukung perjalanan yang diinginkan.",
      },
    ],
  },
  {
    title: "Persiapan Perjalanan Wisata dari Semarang ke Bandungan",
    slug: "persiapan-wisata-semarang-bandungan",
    excerpt:
      "Perjalanan dari Semarang menuju Bandungan perlu perencanaan rute, waktu istirahat, dan kesiapan kendaraan agar perjalanan terasa lebih lancar dan nyaman.",
    coverImage: bandunganImage,
    coverImageAlt: "Infografik persiapan perjalanan wisata dari Semarang menuju Bandungan",
    category: "Wisata Semarang",
    publishedAt: "2026-10-24",
    content: [
      {
        type: "p",
        text: "Perjalanan menuju kawasan dataran tinggi seperti Bandungan sering kali menjadi pilihan favorit untuk melepas penat. Namun, rencana yang baik tetap perlu mempertimbangkan waktu tempuh, cuaca, dan kebutuhan istirahat agar perjalanan tidak terlalu melelahkan.",
      },
      { type: "h2", text: "Rencanakan rute dan waktu keberangkatan" },
      {
        type: "p",
        text: "Tentukan jam berangkat yang tidak terlalu pagi dan tidak terlalu sore, supaya Anda masih punya cukup waktu untuk menikmati perjalanan tanpa terburu-buru. Kondisi lalu lintas dapat berubah, jadi estimasi waktu tempuh harus tetap realistis dan disesuaikan dengan hari keberangkatan.",
      },
      { type: "h2", text: "Bawa perlengkapan yang relevan" },
      {
        type: "ul",
        items: [
          "Pakaian yang nyaman untuk cuaca dataran tinggi, termasuk lapisan ringan bila udara terasa lebih dingin.",
          "Air minum dan camilan untuk perjalanan yang mungkin memakan waktu lebih lama.",
          "Obat pribadi, perlengkapan kecil, dan barang yang mudah dibawa saat stop di beberapa titik perjalanan.",
        ],
      },
      { type: "h2", text: "Sesuaikan kendaraan dengan perjalanan" },
      {
        type: "p",
        text: "Bila membawa keluarga atau rombongan, pilih kendaraan yang memberi ruang cukup untuk penumpang dan bagasi. Rute menuju dataran tinggi lebih nyaman bila kendaraan yang dipilih tidak terlalu sempit dan tetap aman untuk perjalanan dengan tingkatan waktu tempuh yang mungkin bervariasi.",
      },
      { type: "h2", text: "Tetap fleksibel saat hari H" },
      {
        type: "p",
        text: "Kondisi jalan, cuaca, dan waktu tempuh dapat berubah. Oleh karena itu, tetap siapkan rencana alternatif bila ada perubahan jadwal, kepadatan lalu lintas, atau kebutuhan berhenti sementara. Kejelasan dan fleksibilitas adalah kunci agar perjalanan tetap nyaman.",
      },
      {
        type: "p",
        text: "Dengan persiapan yang matang, perjalanan dari Semarang menuju Bandungan akan terasa lebih santai dan terencana. Anda bisa fokus menikmati destinasi tanpa terlalu banyak khawatir soal logistik perjalanan.",
      },
    ],
  },
  {
    title: "Tips Menyiapkan Penjemputan di Bandara atau Stasiun Semarang",
    slug: "tips-penjemputan-bandara-stasiun-semarang",
    excerpt:
      "Persiapan penjemputan yang rapi membantu perjalanan terasa lebih aman dan lancar, terutama saat jadwal kedatangan, jumlah penumpang, dan lokasi tujuan berubah.",
    coverImage: penjemputanImage,
    coverImageAlt: "Infografik tips menyiapkan penjemputan di bandara atau stasiun Semarang",
    category: "Tips Perjalanan",
    publishedAt: "2026-10-26",
    content: [
      {
        type: "p",
        text: "Penjemputan di bandara atau stasiun memerlukan koordinasi yang jelas. Keterlambatan penerbangan, perubahan jadwal kereta, atau perbedaan titik temu bisa mempersulit perjalanan bila tidak diantisipasi sejak awal. Persiapan yang rapi akan membuat proses penjemputan lebih nyaman untuk semua pihak.",
      },
      { type: "h2", text: "Siapkan data penting sebelum hari H" },
      {
        type: "ul",
        items: [
          "Nomor penerbangan atau kereta beserta estimasi waktu kedatangan.",
          "Jumlah penumpang yang akan dijemput dan jumlah bagasi yang dibawa.",
          "Titik temu yang jelas, termasuk akses atau pintu masuk yang paling mudah dijangkau.",
        ],
      },
      { type: "h2", text: "Komunikasi yang jelas" },
      {
        type: "p",
        text: "Saat mengatur penjemputan, pastikan kontak yang aktif mudah dihubungi. Beri tahu admin atau pengemudi jika ada perubahan jadwal, titik kedatangan, atau kebutuhan khusus seperti bagasi berlebih, anak kecil, atau penumpang yang membutuhkan waktu ekstra saat turun dari kendaraan.",
      },
      { type: "h2", text: "Lebih siap menghadapi perubahan jadwal" },
      {
        type: "p",
        text: "Aktivitas di bandara atau stasiun bisa berubah dengan cepat. Jika ada penundaan kedatangan, sebaiknya koordinasi dilakukan mulai dini agar waktu tunggu tidak membebani perjalanan. Sediakan beberapa opsi rute atau lokasi tujuan yang sudah diidentifikasi sebelumnya agar penjemputan dapat berlanjut dengan lancar.",
      },
      { type: "h2", text: "Checklist sebelum berangkat" },
      {
        type: "ul",
        items: [
          "Konfirmasi nama, waktu kedatangan, dan titik pertemuan.",
          "Cek jumlah penumpang dan kapasitas bagasi yang dibawa.",
          "Sampaikan alamat tujuan dan kebutuhan khusus bila ada.",
          "Tentukan jadwal komunikasi bila ada perubahan tiba-tiba.",
        ],
      },
      {
        type: "p",
        text: "Inti dari penjemputan yang efektif adalah komunikasi yang jelas, jadwal yang realistis, dan kesiapan terhadap perubahan. Dengan persiapan yang matang, perjalanan dari bandara atau stasiun menjadi lebih tertata dan nyaman.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article, limit = 2): Article[] {
  const sameCategory = articles.filter(
    (a) => a.slug !== article.slug && a.category === article.category,
  );
  const others = articles.filter((a) => a.slug !== article.slug && a.category !== article.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
