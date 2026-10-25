/**
 * Helper WhatsApp terpusat: membentuk URL wa.me, menyusun pesan otomatis
 * berdasarkan konteks halaman, meng-encode pesan, dan hanya menyediakan URL
 * setelah kontak bisnis diverifikasi.
 */
import { siteConfig } from "@/config/site";

/** Normalisasi "0811 2792 600" -> "628112792600". */
export function toInternationalDigits(number: string): string {
  const digits = number.replace(/\D/g, "");
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  if (digits.startsWith("62")) return digits;
  return digits;
}

export type WaContext =
  | { kind: "general" }
  | { kind: "vehicle"; itemName: string }
  | { kind: "service"; itemName: string }
  | { kind: "package"; itemName: string }
  | { kind: "form"; data: Record<string, string | undefined> };

const salutation = "Halo Sobat RentCar Semarang,";

function buildMessage(context: WaContext): string {
  switch (context.kind) {
    case "vehicle":
      return `${salutation} saya ingin menanyakan ketersediaan kendaraan: ${context.itemName}.`;
    case "service":
      return `${salutation} saya ingin berkonsultasi mengenai layanan: ${context.itemName}.`;
    case "package": {
      const packageName = context.itemName.replace(/^(?:Paket )?Wisata\s+/i, "");
      return `${salutation} saya ingin konsultasi Paket Wisata ${packageName}. Mohon informasi itinerary, ketersediaan kendaraan, dan proses pemesanan.`;
    }
    case "form": {
      const d = context.data;
      const lines = [
        salutation,
        "saya ingin mengajukan permintaan pemesanan dengan data berikut:",
        "",
        `Nama: ${d.nama ?? "-"}`,
        `Nomor WhatsApp: ${d.whatsapp ?? "-"}`,
        `Jenis layanan: ${d.layanan ?? "-"}`,
        d.kendaraan ? `Kendaraan/kategori yang diminati: ${d.kendaraan}` : undefined,
        d.tanggal ? `Tanggal perjalanan: ${d.tanggal}` : undefined,
        d.tujuan ? `Tujuan perjalanan: ${d.tujuan}` : undefined,
        d.durasi ? `Durasi: ${d.durasi}` : undefined,
        d.penumpang ? `Jumlah penumpang: ${d.penumpang}` : undefined,
        d.catatan ? `Catatan tambahan: ${d.catatan}` : undefined,
      ].filter(Boolean);
      return lines.join("\n");
    }
    case "general":
    default:
      return `${salutation} saya ingin berkonsultasi mengenai kebutuhan transportasi.`;
  }
}

/** URL WhatsApp untuk konteks tertentu, atau null bila kontak belum aman digunakan. */
export function buildWaUrl(
  context: WaContext,
  which: "primary" | "backup" = "primary",
): string | null {
  if (!siteConfig.dataStatus.kontakTerverifikasi) return null;

  const raw = which === "backup" ? siteConfig.whatsapp.backup : siteConfig.whatsapp.primary;
  if (!raw) return null;
  return `https://wa.me/${toInternationalDigits(raw)}?text=${encodeURIComponent(buildMessage(context))}`;
}

/** URL WhatsApp, atau null selama kontak belum terverifikasi/tersedia. */
export function waHref(context: WaContext, which: "primary" | "backup" = "primary"): string | null {
  return buildWaUrl(context, which);
}

export function waConfigured(): boolean {
  return (
    siteConfig.dataStatus.kontakTerverifikasi &&
    Boolean(siteConfig.whatsapp.primary || siteConfig.whatsapp.backup)
  );
}
