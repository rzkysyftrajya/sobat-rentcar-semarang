import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, MapPin, MessageCircle } from "lucide-react";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CompanyProfile } from "@/components/shared/CompanyProfile";
import { siteConfig } from "@/config/site";
import { waHref } from "@/lib/whatsapp";
import { toInternationalDigits } from "@/lib/whatsapp";
import heroImage from "@/assets/hero/hero-section.webp";
import garageMaintenance from "@/assets/garasi/garage-maintenance.webp";
import garageFleetLineup from "@/assets/garasi/garage-fleet-lineup.webp";
import pomnasDocumentation from "@/assets/dokumentasi-driver/driver-documentation-18.webp";
import driverTeamGarage from "@/assets/dokumentasi-driver/driver-documentation-12.webp";

const pageTitle = `Tentang | ${siteConfig.name}`;
const pageDescription =
  "Kenali Sobat RentCar Semarang — layanan transportasi yang mengutamakan kemudahan konsultasi dan kenyamanan perjalanan untuk kebutuhan pribadi, keluarga, bisnis, dan wisata.";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: new URL("/tentang", siteConfig.domain).href },
    ],
    links: [{ rel: "canonical", href: new URL("/tentang", siteConfig.domain).href }],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* HERO TENTANG */}
      <section className="relative isolate min-h-[430px] overflow-hidden bg-[#0A1220] sm:min-h-[520px]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-35 sm:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1220]/95 via-[#0A1220]/75 to-[#0A1220]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/75 via-transparent to-[#0A1220]/20" />
        </div>
        <div className="relative mx-auto flex min-h-[430px] max-w-6xl items-end px-4 pb-14 pt-20 sm:min-h-[520px] sm:px-6 sm:pb-20">
          <div className="absolute left-4 top-8 sm:left-6 sm:top-10">
            <Breadcrumbs items={[{ label: "Tentang" }]} inverted />
          </div>
          <div className="absolute inset-x-4 bottom-14 max-w-3xl sm:inset-x-6 sm:bottom-20">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold sm:text-sm">
              {siteConfig.shortName}
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tentang {siteConfig.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* PENGENALAN */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading eyebrow="Siapa kami" title="Sobat RentCar Semarang" align="left" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Sobat RentCar Semarang adalah layanan rental mobil yang beroperasi di Semarang dan
                  sekitarnya. Kami melayani berbagai kebutuhan transportasi — dari perjalanan
                  keluarga di dalam kota, perjalanan bisnis, transportasi rombongan, hingga wisata
                  ke destinasi sekitar Semarang.
                </p>
                <p>
                  Setiap kebutuhan perjalanan bersifat unik. Karena itu, kami mengutamakan
                  konsultasi langsung sebelum pemesanan, agar pilihan kendaraan dan layanan dapat
                  disesuaikan dengan rencana perjalanan Anda.
                </p>
                <p>
                  Berbasis di Tandang, Kecamatan Tembalang, Kota Semarang, Jawa Tengah, kami
                  tersedia untuk dihubungi melalui WhatsApp untuk konsultasi kebutuhan transportasi
                  Anda.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_70px_-48px_rgba(32,29,23,0.5)]">
              <img
                src={garageMaintenance}
                alt="Petugas memeriksa kendaraan di area garasi"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CompanyProfile />

      {/* PENDEKATAN PELAYANAN */}
      <section className="section-soft">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Cara kami bekerja"
            title="Pendekatan pelayanan"
            description="Kami percaya bahwa perjalanan yang baik dimulai dari perencanaan yang matang dan komunikasi yang jelas."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MessageCircle,
                title: "Konsultasi Dahulu",
                desc: "Setiap pemesanan diawali dengan konsultasi kebutuhan perjalanan agar pilihan kendaraan dan layanan sesuai.",
              },
              {
                icon: Users,
                title: "Beragam Kebutuhan",
                desc: "Kami melayani individu, keluarga kecil, rombongan besar, hingga kebutuhan perjalanan bisnis dan wisata.",
              },
              {
                icon: MapPin,
                title: "Fokus Semarang",
                desc: "Layanan difokuskan untuk kebutuhan transportasi di Semarang dan sekitarnya, termasuk perjalanan ke luar kota.",
              },
              {
                icon: Heart,
                title: "Konfirmasi Langsung",
                desc: "Detail layanan, jenis kendaraan, dan ketersediaannya selalu dikonfirmasi langsung dengan admin sebelum pemesanan.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-t border-border bg-transparent py-6 first:border-t-0 sm:first:border-t"
              >
                <div className="flex size-9 items-center justify-center rounded-full bg-brand-gold/10">
                  <item.icon aria-hidden="true" className="size-4 text-brand-gold" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NILAI PERUSAHAAN */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Yang kami junjung"
            title="Nilai pelayanan"
            description="Prinsip-prinsip sederhana yang memandu cara kami melayani setiap kebutuhan perjalanan."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Transparansi",
                desc: "Informasi yang kami sampaikan sesuai dengan kondisi aktual. Ketersediaan kendaraan dan detail layanan dikonfirmasi sebelum pemesanan, bukan dijanjikan tanpa kepastian.",
              },
              {
                title: "Kenyamanan Pelanggan",
                desc: "Pilihan layanan dirancang untuk memudahkan perjalanan Anda, bukan mempersulit. Dari konsultasi awal hingga konfirmasi pemesanan, prosesnya sederhana dan langsung.",
              },
              {
                title: "Fleksibilitas",
                desc: "Kami memahami bahwa setiap perjalanan berbeda. Pilihan layanan dengan driver maupun lepas kunci tersedia untuk berbagai kebutuhan dan rencana perjalanan.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOKUMENTASI */}
      <section className="section-soft">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Galeri"
            title="Dokumentasi armada dan kegiatan"
            description="Beberapa momen armada dan tim Sobat RentCar Semarang."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: garageFleetLineup,
                alt: "Deretan kendaraan Sobat RentCar di garasi",
                label: "Kendaraan siap jalan",
              },
              {
                src: driverTeamGarage,
                alt: "Tim driver Sobat Transport di area garasi",
                label: "Tim layanan",
              },
              {
                src: pomnasDocumentation,
                alt: "Armada bus dan kru dalam kegiatan POMNAS XIX Jawa Tengah",
                label: "Kegiatan POMNAS XIX",
                fit: "contain",
              },
            ].map((img) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`aspect-[4/3] w-full bg-muted ${
                    img.fit === "contain" ? "object-contain" : "object-cover"
                  }`}
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMASI KONTAK */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">Kontak kami</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Reservasi
                </h3>
                <ul className="mt-3 space-y-4">
                  {siteConfig.contacts.reservation.map((admin, index) => {
                    const whatsappUrl = waHref(
                      { kind: "general" },
                      index === 0 ? "primary" : "backup",
                    );

                    return (
                      <li key={admin.name}>
                        <p className="text-sm font-semibold text-foreground">
                          Admin {index + 1} — {admin.name}
                        </p>
                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                          <a
                            href={`tel:+${toInternationalDigits(admin.phone)}`}
                            className="text-primary hover:underline"
                          >
                            {admin.phone}
                          </a>
                          {whatsappUrl && (
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              WhatsApp
                            </a>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="space-y-5">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Kritik & saran
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    <a
                      href={`tel:+${toInternationalDigits(siteConfig.contacts.feedback)}`}
                      className="text-primary hover:underline"
                    >
                      {siteConfig.contacts.feedback}
                    </a>
                    <a
                      href={`https://wa.me/${toInternationalDigits(siteConfig.contacts.feedback)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Alamat usaha
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {siteConfig.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 inline-block text-sm text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Siapkan rencana perjalanan Anda"
        description="Hubungi admin untuk konsultasi kebutuhan transportasi melalui WhatsApp."
      />
    </>
  );
}
