import ambarawaImage from "@/assets/paket-wisata/Jelajah-Ambarawa.webp";
import semarangImage from "@/assets/paket-wisata/Jelajah-Semarang.webp";
import customTripImage from "@/assets/paket-wisata/Paket-Wisata-Custom.webp";
import familyTripImage from "@/assets/paket-wisata/Wisata-Keluarga-Rekreasi.webp";
import bandunganImage from "@/assets/paket-wisata/Wisata-Bandungan-Ungaran.webp";
import themeParkImage from "@/assets/paket-wisata/wisata-themepark.webp";

/**
 * Inspirasi paket wisata. Destinasi adalah kandidat dan perlu dikonfirmasi
 * bersama admin; data ini bukan itinerary operasional.
 */
export type TourPackage = {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
};

export const tourPackages: TourPackage[] = [
  {
    id: "jelajah-semarang",
    name: "Jelajah Semarang",
    slug: "jelajah-semarang",
    category: "City Tour",
    image: semarangImage,
    imageAlt: "Kolase destinasi wisata Semarang, termasuk Kota Lama dan Sam Poo Kong",
    description:
      "Jelajahi landmark, kawasan bersejarah, dan daya tarik Kota Semarang dalam perjalanan yang direncanakan sesuai waktu dan kebutuhan pelanggan.",
    highlights: [
      "Kota Lama Semarang",
      "Lawang Sewu",
      "Sam Poo Kong",
      "Kampung Batik Semarang",
      "Pusat oleh-oleh",
    ],
  },
  {
    id: "wisata-bandungan-ungaran",
    name: "Wisata Bandungan & Ungaran",
    slug: "wisata-bandungan-ungaran",
    category: "Alam dan Pegunungan",
    image: bandunganImage,
    imageAlt: "Kolase destinasi di kawasan Bandungan dan Ungaran",
    description:
      "Perjalanan menikmati suasana pegunungan dan wisata alam di kawasan Bandungan dan Ungaran.",
    highlights: ["Candi Gedong Songo", "Kawasan Bandungan", "Destinasi pilihan di sekitar Ungaran"],
  },
  {
    id: "jelajah-ambarawa",
    name: "Jelajah Ambarawa",
    slug: "jelajah-ambarawa",
    category: "Sejarah dan Keluarga",
    image: ambarawaImage,
    imageAlt: "Kolase pemandangan Rawa Pening dan Museum Kereta Api Ambarawa",
    description:
      "Jelajahi wisata sejarah dan pemandangan alam di kawasan Ambarawa dengan perjalanan yang disesuaikan kebutuhan.",
    highlights: [
      "Museum Kereta Api Ambarawa",
      "Rawa Pening",
      "Destinasi pilihan di sekitar Ambarawa",
    ],
  },
  {
    id: "wisata-keluarga-rekreasi",
    name: "Wisata Keluarga & Rekreasi",
    slug: "wisata-keluarga-rekreasi",
    category: "Family Trip",
    image: familyTripImage,
    imageAlt: "Kolase destinasi rekreasi keluarga",
    description:
      "Pilihan perjalanan untuk keluarga yang ingin menikmati rekreasi bersama dalam satu agenda perjalanan.",
    highlights: ["Dusun Semilir", "Cimory on the Valley", "Destinasi rekreasi lain yang sesuai"],
  },
  {
    id: "wisata-theme-park",
    name: "Wisata Theme Park",
    slug: "wisata-theme-park",
    category: "Hiburan",
    image: themeParkImage,
    imageAlt: "Kolase wahana Saloka Theme Park",
    description: "Rencanakan perjalanan berfokus pada taman hiburan untuk keluarga atau rombongan.",
    highlights: ["Saloka Theme Park"],
  },
  {
    id: "paket-wisata-custom",
    name: "Paket Wisata Custom",
    slug: "paket-wisata-custom",
    category: "Private Trip",
    image: customTripImage,
    imageAlt: "Pilihan tujuan perjalanan wisata custom di Semarang",
    description:
      "Konsultasikan rencana perjalanan berdasarkan destinasi, tanggal, durasi, titik penjemputan, jumlah peserta, dan kendaraan yang tersedia.",
    highlights: [
      "Destinasi ditentukan bersama admin",
      "Rute dan agenda disesuaikan melalui konsultasi",
    ],
  },
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackages.find((travelPackage) => travelPackage.slug === slug);
}
