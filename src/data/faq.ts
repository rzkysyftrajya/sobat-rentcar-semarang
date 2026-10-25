/**
 * FAQ faktual. Jawaban hanya menjelaskan proses konsultasi dan pilihan layanan;
 * tidak menjanjikan ketentuan operasional yang belum dikonfirmasi.
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Bagaimana cara memesan kendaraan?",
    answer:
      "Pemesanan dilakukan melalui konsultasi WhatsApp. Sampaikan kebutuhan perjalanan Anda — tujuan, tanggal, dan jumlah penumpang — lalu admin akan membantu menyesuaikan pilihan layanan dan kendaraan.",
  },
  {
    question: "Informasi apa yang perlu saya siapkan saat konsultasi?",
    answer:
      "Siapkan jenis layanan yang diinginkan, tujuan perjalanan, tanggal, durasi, dan jumlah penumpang. Dengan informasi tersebut, admin dapat merekomendasikan kendaraan yang sesuai.",
  },
  {
    question: "Apakah bisa rental dengan driver atau lepas kunci?",
    answer:
      "Terdapat pilihan layanan dengan driver maupun lepas kunci. Ketentuan masing-masing pilihan akan dijelaskan admin saat konsultasi, termasuk persyaratannya.",
  },
  {
    question: "Apakah tersedia kendaraan untuk rombongan?",
    answer:
      "Terdapat kategori minibus/Elf untuk kebutuhan rombongan. Untuk jumlah peserta tertentu, sampaikan saat konsultasi agar admin dapat menyiapkan pilihan yang sesuai.",
  },
  {
    question: "Di mana area layanan yang dicakup?",
    answer:
      "Layanan difokuskan untuk kebutuhan transportasi di Semarang dan sekitarnya. Untuk tujuan yang lebih jauh, sampaikan saat konsultasi agar dapat dibicarakan lebih detail.",
  },
  {
    question: "Bagaimana jika saya belum menentukan destinasi?",
    answer:
      "Anda tetap bisa menghubungi admin untuk konsultasi awal. Admin dapat membantu membahas pilihan destinasi dan rute perjalanan sesuai kebutuhan Anda.",
  },
];
