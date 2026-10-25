/** Koleksi dokumentasi armada, kegiatan, dan destinasi. */
import garageAlphard from "@/assets/garasi/garage-alphard.webp";
import garageCityCars from "@/assets/garasi/garage-city-cars.webp";
import garageFleetLineup from "@/assets/garasi/garage-fleet-lineup.webp";
import garageMaintenance from "@/assets/garasi/garage-maintenance.webp";
import garageMpvPair from "@/assets/garasi/garage-mpv-pair.webp";
import batikDay2024 from "@/assets/aktivitas/hari-batik-nasional-2024.webp";
import hiacePremioLuxury01 from "@/assets/hiace-premio/hiace-premio-luxury-01.webp";
import hiacePremioLuxury02 from "@/assets/hiace-premio/hiace-premio-luxury-02.webp";
import hiacePremioLuxury03 from "@/assets/hiace-premio/hiace-premio-luxury-03.webp";
import bandunganDestinations from "@/assets/paket-wisata/Wisata-Bandungan-Ungaran.webp";
import driverPhoto01 from "@/assets/dokumentasi-driver/driver-documentation-01.webp";
import driverPhoto02 from "@/assets/dokumentasi-driver/driver-documentation-02.webp";
import driverPhoto03 from "@/assets/dokumentasi-driver/driver-documentation-03.webp";
import driverPhoto04 from "@/assets/dokumentasi-driver/driver-documentation-04.webp";
import driverPhoto05 from "@/assets/dokumentasi-driver/driver-documentation-05.webp";
import driverPhoto06 from "@/assets/dokumentasi-driver/driver-documentation-06.webp";
import driverPhoto07 from "@/assets/dokumentasi-driver/driver-documentation-07.webp";
import driverPhoto08 from "@/assets/dokumentasi-driver/driver-documentation-08.webp";
import driverPhoto09 from "@/assets/dokumentasi-driver/driver-documentation-09.webp";
import driverPhoto10 from "@/assets/dokumentasi-driver/driver-documentation-10.webp";
import driverPhoto11 from "@/assets/dokumentasi-driver/driver-documentation-11.webp";
import driverPhoto12 from "@/assets/dokumentasi-driver/driver-documentation-12.webp";
import driverPhoto13 from "@/assets/dokumentasi-driver/driver-documentation-13.webp";
import driverPhoto14 from "@/assets/dokumentasi-driver/driver-documentation-14.webp";
import driverPhoto15 from "@/assets/dokumentasi-driver/driver-documentation-15.webp";
import driverPhoto16 from "@/assets/dokumentasi-driver/driver-documentation-16.webp";
import driverPhoto17 from "@/assets/dokumentasi-driver/driver-documentation-17.webp";
import driverPhoto18 from "@/assets/dokumentasi-driver/driver-documentation-18.webp";
import driverPhoto19 from "@/assets/dokumentasi-driver/driver-documentation-19.webp";
import driverPhoto20 from "@/assets/dokumentasi-driver/driver-documentation-20.webp";
import driverPhoto21 from "@/assets/dokumentasi-driver/driver-documentation-21.webp";
import driverPhoto22 from "@/assets/dokumentasi-driver/driver-documentation-22.webp";
import driverPhoto23 from "@/assets/dokumentasi-driver/driver-documentation-23.webp";
import driverPhoto24 from "@/assets/dokumentasi-driver/driver-documentation-24.webp";
import driverPhoto25 from "@/assets/dokumentasi-driver/driver-documentation-25.webp";
import driverPhoto26 from "@/assets/dokumentasi-driver/driver-documentation-26.webp";
import driverPhoto27 from "@/assets/dokumentasi-driver/driver-documentation-27.webp";
import driverPhoto28 from "@/assets/dokumentasi-driver/driver-documentation-28.webp";
import driverPhoto29 from "@/assets/dokumentasi-driver/driver-documentation-29.webp";
import driverPhoto30 from "@/assets/dokumentasi-driver/driver-documentation-30.webp";

const driverGalleryImages = [
  driverPhoto01,
  driverPhoto02,
  driverPhoto03,
  driverPhoto04,
  driverPhoto05,
  driverPhoto06,
  driverPhoto07,
  driverPhoto08,
  driverPhoto09,
  driverPhoto10,
  driverPhoto11,
  driverPhoto12,
  driverPhoto13,
  driverPhoto14,
  driverPhoto15,
  driverPhoto16,
  driverPhoto17,
  driverPhoto18,
  driverPhoto19,
  driverPhoto20,
  driverPhoto21,
  driverPhoto22,
  driverPhoto23,
  driverPhoto24,
  driverPhoto25,
  driverPhoto26,
  driverPhoto27,
  driverPhoto28,
  driverPhoto29,
  driverPhoto30,
];

export type GalleryCategory = "Armada" | "Perjalanan" | "Destinasi" | "Aktivitas Layanan";

export const galleryCategories: GalleryCategory[] = [
  "Armada",
  "Perjalanan",
  "Destinasi",
  "Aktivitas Layanan",
];

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "garage-fleet-lineup",
    title: "Barisan armada di garasi",
    category: "Armada",
    image: garageFleetLineup,
    alt: "Beberapa kendaraan Sobat RentCar terparkir berjajar di garasi",
  },
  {
    id: "garage-mpv-pair",
    title: "Dua unit MPV di garasi",
    category: "Armada",
    image: garageMpvPair,
    alt: "Dua mobil MPV hitam terparkir berdampingan di garasi",
  },
  {
    id: "garage-alphard",
    title: "Alphard untuk perjalanan khusus",
    category: "Armada",
    image: garageAlphard,
    alt: "Mobil Alphard hitam dengan dekorasi bunga terparkir di garasi",
  },
  {
    id: "garage-city-cars",
    title: "Pilihan city car",
    category: "Armada",
    image: garageCityCars,
    alt: "Deretan mobil city car berwarna-warni di garasi",
  },
  {
    id: "garage-maintenance",
    title: "Persiapan kendaraan",
    category: "Aktivitas Layanan",
    image: garageMaintenance,
    alt: "Petugas memeriksa kendaraan di area garasi",
  },
  {
    id: "hiace-premio-luxury-01",
    title: "Hiace Premio Luxury 9 Seat",
    category: "Armada",
    image: hiacePremioLuxury01,
    alt: "Dokumentasi eksterior dan interior Hiace Premio Luxury dengan kabin premium",
  },
  {
    id: "hiace-premio-luxury-02",
    title: "Interior Hiace Premio Luxury",
    category: "Armada",
    image: hiacePremioLuxury02,
    alt: "Hiace Premio Luxury hitam dan pilihan interior kursi premium",
  },
  {
    id: "hiace-premio-luxury-03",
    title: "Kabin Hiace Premio Luxury",
    category: "Armada",
    image: hiacePremioLuxury03,
    alt: "Interior kabin Hiace Premio Luxury dengan kursi captain seat",
  },
  {
    id: "hari-batik-nasional-2024",
    title: "Perayaan Hari Batik Nasional 2024",
    category: "Aktivitas Layanan",
    image: batikDay2024,
    alt: "Kolase dokumentasi tim Sobat Transport mengenakan batik bersama kendaraan pada Hari Batik Nasional 2 Oktober 2024",
  },
  {
    id: "dest-highland",
    title: "Bandungan dan Ungaran",
    category: "Destinasi",
    image: bandunganDestinations,
    alt: "Kolase destinasi di kawasan Bandungan dan Ungaran",
  },
  ...driverGalleryImages.map((image, index) => ({
    id: `driver-documentation-${String(index + 1).padStart(2, "0")}`,
    title: `Dokumentasi layanan driver ${String(index + 1).padStart(2, "0")}`,
    category: "Aktivitas Layanan" as const,
    image,
    alt: `Dokumentasi layanan driver Sobat Transport nomor ${index + 1}`,
  })),
];
