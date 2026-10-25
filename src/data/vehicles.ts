/**
 * Data armada berdasarkan daftar model yang diberikan pemilik.
 *
 * - Jangan mengarang nomor polisi, tahun kendaraan, jumlah armada, atau fasilitas.
 * - Foto unit yang tersedia ditautkan langsung ke kendaraan yang sesuai;
 *   foto kategori menjadi fallback untuk unit tanpa foto spesifik.
 * - Ketersediaan untuk tanggal pemesanan tetap perlu dikonfirmasi admin.
 */
import alphardFacelift from "@/assets/armada/alphard-facelift.webp";
import avanzaVelozManual from "@/assets/armada/avanza-veloz-manual.webp";
import bigbus50Seat from "@/assets/armada/bigbus-50-seat.webp";
import busMedium35Seat from "@/assets/armada/bus-medium-35-seat.webp";
import bydM6Phev from "@/assets/armada/byd-m6-phev.webp";
import elfLong19Seat from "@/assets/armada/elf-long-19-seat.webp";
import fortunerGr from "@/assets/armada/fortuner-gr.webp";
import fortunerLegender from "@/assets/armada/fortuner-legender.webp";
import hiaceCommuter15Seat from "@/assets/armada/hiace-commuter-15-seat.webp";
import hiacePremio14Seat from "@/assets/armada/Hiace-Premio-14-Seat.webp";
import innovaVenturer from "@/assets/armada/innova-venturer.webp";
import innovaZenixGHev from "@/assets/armada/innova-zenix-g-hev.webp";
import innovaZenixQHev from "@/assets/armada/innova-zenix-q-hev.webp";
import innovaZenixVHev from "@/assets/armada/innova-zenix-v-hev.webp";
import landcruiser300Vxr from "@/assets/armada/landcruiser-300-vx-r.webp";
import mercedesBenzSprinter from "@/assets/armada/mercedes-benz-sprinter.webp";
import newAgyaCvt from "@/assets/armada/new-agya-cvt.webp";
import newAlphardHev from "@/assets/armada/new-alphard-hev.webp";
import newAvanzaCvt from "@/assets/armada/new-avanza-cvt.webp";
import newBrioAt from "@/assets/armada/new-brio-at.webp";
import newCamry from "@/assets/armada/new-camry.webp";
import newDenzaD9Ev from "@/assets/armada/new-denza-d9-ev.webp";
import newVelozHybrid from "@/assets/armada/new-veloz-hybrid.webp";
import newXeniaCvt from "@/assets/armada/new-xenia-cvt.webp";
import newXl7At from "@/assets/armada/new-xl7-at.webp";
import newXpanderCvt from "@/assets/armada/new-xpander-cvt.webp";
import innovaRebornDiesel from "@/assets/armada/innova-reborn-diesel.webp";
import pajeroSportDakar from "@/assets/armada/pajero-sport-dakar.webp";
import hiacePremioLuxury from "@/assets/hiace-premio/hiace-premio-luxury-9-seat.webp";
import garageCityCars from "@/assets/garasi/garage-city-cars.webp";
import garageMpvPair from "@/assets/garasi/garage-mpv-pair.webp";
import garageAlphard from "@/assets/garasi/garage-alphard.webp";
import garageFleetLineup from "@/assets/garasi/garage-fleet-lineup.webp";

export type VehicleCategory = {
  id: string;
  label: string;
};

export const vehicleCategories: VehicleCategory[] = [
  { id: "city-car", label: "City Car" },
  { id: "regular-car-mpv", label: "Regular Car MPV" },
  { id: "premium-suv", label: "Premium SUV" },
  { id: "shuttle-car", label: "Shuttle Car" },
];

export type Vehicle = {
  id: string;
  name: string;
  category: string; // id dari vehicleCategories
  description: string;
  image: string;
  imageAlt: string;
  imageScale?: number;
  capacity?: string; // hanya diisi jika terverifikasi
  transmission?: string; // hanya diisi jika terverifikasi
  facilities?: string[]; // hanya diisi jika terverifikasi
  availabilityStatus?: "tersedia" | "menunggu-konfirmasi";
  active: boolean;
};

const categoryDetails: Record<string, { description: string; image: string; imageAlt: string }> = {
  "city-car": {
    description: "Pilihan kendaraan kategori City Car.",
    image: garageCityCars,
    imageAlt: "Deretan kendaraan city car di garasi",
  },
  "regular-car-mpv": {
    description: "Pilihan kendaraan kategori Regular Car MPV.",
    image: garageMpvPair,
    imageAlt: "Dua kendaraan MPV di garasi",
  },
  "premium-suv": {
    description: "Pilihan kendaraan kategori Premium SUV.",
    image: garageAlphard,
    imageAlt: "Kendaraan premium di garasi",
  },
  "shuttle-car": {
    description: "Pilihan kendaraan kategori Shuttle Car.",
    image: garageFleetLineup,
    imageAlt: "Deretan kendaraan armada di garasi",
  },
};

const vehicleImages: Record<string, string> = {
  "new-agya-cvt": newAgyaCvt,
  "new-brio-at": newBrioAt,
  "avanza-veloz-manual": avanzaVelozManual,
  "new-avanza-cvt": newAvanzaCvt,
  "new-xenia-cvt": newXeniaCvt,
  "new-veloz-hybrid": newVelozHybrid,
  "new-xl7-at": newXl7At,
  "new-xpander-cvt": newXpanderCvt,
  "innova-reborn-diesel": innovaRebornDiesel,
  "innova-venturer": innovaVenturer,
  "innova-zenix-g-hev": innovaZenixGHev,
  "innova-zenix-v-hev": innovaZenixVHev,
  "innova-zenix-q-hev": innovaZenixQHev,
  "fortuner-gr": fortunerGr,
  "fortuner-legender": fortunerLegender,
  "pajero-sport-dakar": pajeroSportDakar,
  "new-camry": newCamry,
  "alphard-facelift": alphardFacelift,
  "new-alphard-hev": newAlphardHev,
  "new-denza-d9-ev": newDenzaD9Ev,
  "landcruiser-300-vx-r": landcruiser300Vxr,
  "byd-m6-phev": bydM6Phev,
  "hiace-premio-14-seat": hiacePremio14Seat,
  "mercedes-benz-sprinter": mercedesBenzSprinter,
  "hiace-commuter-15-seat": hiaceCommuter15Seat,
  "elf-long-19-seat": elfLong19Seat,
  "bus-medium-35-seat": busMedium35Seat,
  "bigbus-50-seat": bigbus50Seat,
};

const vehicleImageScales: Record<string, number> = {
  "new-agya-cvt": 1.13,
  "new-brio-at": 1.18,
  "avanza-veloz-manual": 1.64,
  "new-avanza-cvt": 1.26,
  "new-xenia-cvt": 1.09,
  "new-veloz-hybrid": 1.1,
  "new-xl7-at": 1.04,
  "new-xpander-cvt": 1.68,
  "innova-reborn-diesel": 1.07,
  "innova-venturer": 1.03,
  "innova-zenix-g-hev": 1.21,
  "innova-zenix-v-hev": 1.13,
  "innova-zenix-q-hev": 1.49,
  "fortuner-gr": 1,
  "fortuner-legender": 1.12,
  "pajero-sport-dakar": 2.01,
  "new-camry": 1.03,
  "alphard-facelift": 1.05,
  "new-alphard-hev": 1,
  "new-denza-d9-ev": 1.59,
  "landcruiser-300-vx-r": 1.13,
  "byd-m6-phev": 1.59,
  "hiace-premio-luxury-9-seat": 1,
  "mercedes-benz-sprinter": 1.56,
  "hiace-commuter-15-seat": 1.11,
  "hiace-premio-14-seat": 1,
  "elf-long-19-seat": 1.1,
  "bus-medium-35-seat": 1.5,
  "bigbus-50-seat": 1.02,
};

function createVehicle(
  id: string,
  name: string,
  category: string,
  image = vehicleImages[id] ?? categoryDetails[category]?.image,
): Vehicle {
  const details = categoryDetails[category];

  if (!details) {
    throw new Error(`Kategori kendaraan tidak dikenal: ${category}`);
  }

  return {
    id,
    name,
    category,
    description: details.description,
    image: image ?? details.image,
    imageAlt: image === details.image ? details.imageAlt : `Dokumentasi unit ${name}`,
    imageScale: vehicleImageScales[id],
    active: true,
  };
}

export const vehicles: Vehicle[] = [
  createVehicle("new-agya-cvt", "New Agya CVT", "city-car"),
  createVehicle("new-brio-at", "New Brio AT", "city-car"),

  createVehicle("avanza-veloz-manual", "Avanza Veloz Manual", "regular-car-mpv"),
  createVehicle("new-avanza-cvt", "New Avanza CVT", "regular-car-mpv"),
  createVehicle("new-xenia-cvt", "New Xenia CVT", "regular-car-mpv"),
  createVehicle("new-veloz-hybrid", "New Veloz Hybrid", "regular-car-mpv"),
  createVehicle("new-xl7-at", "New XL 7 AT", "regular-car-mpv"),
  createVehicle("new-xpander-cvt", "New Xpander CVT", "regular-car-mpv"),
  createVehicle("innova-reborn-diesel", "Innova Reborn Diesel", "regular-car-mpv"),

  createVehicle("innova-venturer", "Innova Venturer", "premium-suv"),
  createVehicle("innova-zenix-g-hev", "Innova Zenix G HEV", "premium-suv"),
  createVehicle("innova-zenix-v-hev", "Innova Zenix V HEV", "premium-suv"),
  createVehicle("innova-zenix-q-hev", "Innova Zenix Q HEV", "premium-suv"),
  createVehicle("fortuner-gr", "Fortuner GR", "premium-suv"),
  createVehicle("fortuner-legender", "Fortuner Legender", "premium-suv"),
  createVehicle("pajero-sport-dakar", "Pajero Sport Dakar", "premium-suv"),
  createVehicle("new-camry", "New Camry", "premium-suv"),
  createVehicle("alphard-facelift", "Alphard Facelift", "premium-suv"),
  createVehicle("new-alphard-hev", "New Alphard HEV", "premium-suv"),
  createVehicle("new-denza-d9-ev", "New Denza D9 EV", "premium-suv"),
  createVehicle("landcruiser-300-vx-r", "Landcruiser 300 VX-R", "premium-suv"),
  createVehicle("byd-m6-phev", "BYD M6 PHEV", "premium-suv"),
  createVehicle(
    "hiace-premio-luxury-9-seat",
    "Hiace Premio Luxury 9 Seat",
    "premium-suv",
    hiacePremioLuxury,
  ),
  createVehicle("mercedes-benz-sprinter", "Mercedes Benz Sprinter", "premium-suv"),

  createVehicle("hiace-commuter-15-seat", "Hiace Commuter 15 Seat", "shuttle-car"),
  createVehicle("hiace-premio-14-seat", "Hiace Premio 14 Seat", "shuttle-car"),
  createVehicle("elf-long-19-seat", "Elf Long 19 Seat", "shuttle-car"),
  createVehicle("bus-medium-35-seat", "Bus Medium 35 Seat", "shuttle-car"),
  createVehicle("bigbus-50-seat", "Bigbus 50 Seat", "shuttle-car"),
];
