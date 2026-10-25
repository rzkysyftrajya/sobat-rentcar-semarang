/**
 * Formulir konsultasi pemesanan tanpa harga.
 * Data form diubah menjadi pesan WhatsApp — tidak ada backend.
 */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";

import { services } from "@/data/services";
import { vehicles } from "@/data/vehicles";
import { waHref } from "@/lib/whatsapp";

const schema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  whatsapp: z
    .string()
    .min(9, "Nomor WhatsApp tidak valid")
    .regex(/^[0-9+\s-]+$/, "Nomor tidak valid"),
  layanan: z.string().min(1, "Pilih jenis layanan"),
  kendaraan: z.string().optional(),
  tanggal: z.string().optional(),
  tujuan: z.string().min(1, "Tujuan perjalanan harus diisi"),
  durasi: z.string().optional(),
  penumpang: z.string().optional(),
  catatan: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const url = waHref({
      kind: "form",
      data: {
        nama: data.nama,
        whatsapp: data.whatsapp,
        layanan: data.layanan,
        kendaraan: data.kendaraan || undefined,
        tanggal: data.tanggal || undefined,
        tujuan: data.tujuan,
        durasi: data.durasi || undefined,
        penumpang: data.penumpang || undefined,
        catatan: data.catatan || undefined,
      },
    });
    setWaUrl(url);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setWaUrl(null);
    reset();
  };

  const activeServices = services.filter((s) => s.active);
  const activeVehicles = vehicles.filter((v) => v.active);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
        <CheckCircle2 aria-hidden="true" className="mx-auto size-12 text-green-500" />
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">
          Data perjalanan siap dikirim
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Klik tombol di bawah untuk membuka WhatsApp dengan pesan yang sudah terisi otomatis.
          Admin akan membantu mengonfirmasi detail perjalanan Anda.
        </p>
        {waUrl ? (
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-red-hover"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            Buka WhatsApp
          </a>
        ) : (
          <div className="mt-4 flex items-start gap-2 rounded-lg border border-border bg-secondary/40 p-4 text-left text-sm text-muted-foreground">
            <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>
              Kontak WhatsApp belum dapat digunakan saat ini. Silakan coba hubungi admin melalui
              informasi kontak yang tersedia.
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={handleReset}
          className="mt-3 inline-flex text-sm text-muted-foreground underline hover:text-foreground"
        >
          Isi ulang formulir
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-[0_24px_70px_-52px_rgba(32,29,23,0.5)] sm:p-9"
    >
      <h3 className="font-display text-2xl font-semibold text-foreground">Formulir konsultasi</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Isi data perjalanan dan kami siapkan pesan WhatsApp otomatis untuk Anda.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* Nama */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nama" className="text-sm font-semibold text-foreground">
            Nama <span aria-hidden="true" className="text-primary">*</span>
          </label>
          <input
            id="nama"
            type="text"
            autoComplete="name"
            placeholder="Nama lengkap Anda"
            {...register("nama")}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            aria-invalid={!!errors.nama}
            aria-describedby={errors.nama ? "nama-error" : undefined}
          />
          {errors.nama && (
            <p id="nama-error" className="text-xs text-destructive" role="alert">
              {errors.nama.message}
            </p>
          )}
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="whatsapp" className="text-sm font-semibold text-foreground">
            Nomor WhatsApp <span aria-hidden="true" className="text-primary">*</span>
          </label>
          <input
            id="whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="08xx xxxx xxxx"
            {...register("whatsapp")}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? "wa-error" : undefined}
          />
          {errors.whatsapp && (
            <p id="wa-error" className="text-xs text-destructive" role="alert">
              {errors.whatsapp.message}
            </p>
          )}
        </div>

        {/* Jenis layanan */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="layanan" className="text-sm font-semibold text-foreground">
            Jenis layanan <span aria-hidden="true" className="text-primary">*</span>
          </label>
          <select
            id="layanan"
            {...register("layanan")}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            aria-invalid={!!errors.layanan}
            aria-describedby={errors.layanan ? "layanan-error" : undefined}
          >
            <option value="">Pilih layanan…</option>
            {activeServices.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.layanan && (
            <p id="layanan-error" className="text-xs text-destructive" role="alert">
              {errors.layanan.message}
            </p>
          )}
        </div>

        {/* Kendaraan */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="kendaraan" className="text-sm font-semibold text-foreground">
            Kendaraan / kategori{" "}
            <span className="font-normal text-muted-foreground">(opsional)</span>
          </label>
          <select
            id="kendaraan"
            {...register("kendaraan")}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">Belum ditentukan</option>
            {activeVehicles.map((v) => (
              <option key={v.id} value={v.name}>
                {v.name}
              </option>
            ))}
          </select>
        </div>

        {/* Tujuan */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="tujuan" className="text-sm font-semibold text-foreground">
            Tujuan perjalanan <span aria-hidden="true" className="text-primary">*</span>
          </label>
          <input
            id="tujuan"
            type="text"
            placeholder="Contoh: Kota Lama Semarang, Bandara Ahmad Yani"
            {...register("tujuan")}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            aria-invalid={!!errors.tujuan}
            aria-describedby={errors.tujuan ? "tujuan-error" : undefined}
          />
          {errors.tujuan && (
            <p id="tujuan-error" className="text-xs text-destructive" role="alert">
              {errors.tujuan.message}
            </p>
          )}
        </div>

        {/* Tanggal */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="tanggal" className="text-sm font-semibold text-foreground">
            Tanggal perjalanan{" "}
            <span className="font-normal text-muted-foreground">(opsional)</span>
          </label>
          <input
            id="tanggal"
            type="date"
            {...register("tanggal")}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>

        {/* Durasi */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="durasi" className="text-sm font-semibold text-foreground">
            Durasi <span className="font-normal text-muted-foreground">(opsional)</span>
          </label>
          <input
            id="durasi"
            type="text"
            placeholder="Contoh: 1 hari, 3 jam, 2 malam"
            {...register("durasi")}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>

        {/* Penumpang */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="penumpang" className="text-sm font-semibold text-foreground">
            Jumlah penumpang{" "}
            <span className="font-normal text-muted-foreground">(opsional)</span>
          </label>
          <input
            id="penumpang"
            type="number"
            min={1}
            placeholder="Contoh: 4"
            {...register("penumpang")}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>

        {/* Catatan */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="catatan" className="text-sm font-semibold text-foreground">
            Catatan tambahan{" "}
            <span className="font-normal text-muted-foreground">(opsional)</span>
          </label>
          <textarea
            id="catatan"
            rows={4}
            placeholder="Informasi tambahan yang perlu diketahui admin…"
            {...register("catatan")}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
          />
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Data ini hanya digunakan untuk menyusun pesan WhatsApp. Tidak ada data yang disimpan ke
        server.
      </p>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-red-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <MessageCircle aria-hidden="true" className="size-4" />
        Siapkan Pesan WhatsApp
      </button>
    </form>
  );
}
