import whatsappIcon from "@/assets/icon-wa.png";

import { waHref } from "@/lib/whatsapp";

/**
 * Tombol WhatsApp mengambang. Ditempatkan di kanan bawah agar tidak
 * menghalangi navigasi maupun CTA utama pada layar kecil.
 */
export function WhatsAppFloat() {
  const href = waHref({ kind: "general" });
  const className =
    "fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed sm:bottom-6 sm:right-6";

  if (!href) {
    return (
      <button
        type="button"
        disabled
        className={className}
        aria-label="WhatsApp tidak tersedia karena kontak belum terverifikasi"
        title="Kontak belum terverifikasi"
      >
        <img src={whatsappIcon} alt="" aria-hidden="true" className="size-14 rounded-full" />
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Konsultasi via WhatsApp"
    >
      <img src={whatsappIcon} alt="" aria-hidden="true" className="size-14 rounded-full" />
    </a>
  );
}
