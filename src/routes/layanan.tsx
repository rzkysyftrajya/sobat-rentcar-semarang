import { createFileRoute } from "@tanstack/react-router";
import { Car, Users, MapPin, Briefcase, Shield, Compass } from "lucide-react";

import { BookingForm } from "@/components/shared/BookingForm";
import { CtaBand } from "@/components/shared/CtaBand";
import { PageIntro } from "@/components/shared/PageIntro";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsappLink } from "@/components/shared/WhatsappLink";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

const pageTitle = `Layanan | ${siteConfig.name}`;
const pageDescription =
  "Kenali pilihan layanan Sobat RentCar Semarang untuk perjalanan dengan driver, lepas kunci, keluarga, bisnis, rombongan, wisata, dan sewa mobil pengantin. Detail layanan dan ketersediaan perlu dikonfirmasi.";
const canonicalUrl = new URL("/layanan", siteConfig.domain).href;

export const Route = createFileRoute("/layanan")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: canonicalUrl },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: Services,
});

const serviceIcons: Record<string, React.ElementType> = {
  "dengan-driver": Car,
  "lepas-kunci": Shield,
  "transportasi-keluarga": Users,
  "perjalanan-bisnis": Briefcase,
  "transportasi-rombongan": Users,
  "perjalanan-wisata": MapPin,
  "sewa-mobil-pengantin": Car,
};

function Services() {
  const activeServices = services.filter((service) => service.active);

  return (
    <>
      {/* PAGE HEADER */}
      <PageIntro
        items={[{ label: "Layanan" }]}
        eyebrow="Kebutuhan perjalanan"
        title="Perjalanan dimulai dari pilihan yang tepat."
        description="Temukan pilihan layanan untuk berbagai kebutuhan perjalanan. Informasi ini merupakan gambaran umum; detail dan ketersediaan perlu dikonfirmasi sebelum pemesanan."
      />

      {/* SERVICES GRID */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {activeServices.map((service) => {
              const Icon = serviceIcons[service.id] ?? Compass;
              return (
                <article
                  key={service.id}
                  id={service.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_22px_60px_-48px_rgba(32,29,23,0.45)] transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Service header */}
                  <div className="flex items-start gap-4 border-b border-border bg-secondary/35 p-5 sm:p-7">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                      <Icon aria-hidden="true" className="size-5 text-brand-gold" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Service body */}
                  <div className="hidden flex-1 flex-col gap-5 p-5 sm:p-7 lg:flex">
                    {/* Benefits */}
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Manfaat layanan</h3>
                      <ul className="mt-2 space-y-1.5">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitable for */}
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Cocok untuk</h3>
                      <ul className="mt-2 space-y-1.5">
                        {service.suitableFor.map((suit) => (
                          <li key={suit} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden="true" />
                            {suit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Consultation needs */}
                    <div className="rounded-xl border border-border bg-background/70 p-4">
                      <h3 className="text-sm font-bold text-foreground">
                        Informasi yang perlu disiapkan saat konsultasi
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {service.consultNeeds.map((need) => (
                          <li key={need} className="text-sm text-muted-foreground">
                            — {need}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-xs font-semibold text-primary">
                      Detail layanan dan ketersediaan dikonfirmasi langsung sebelum pemesanan.
                    </p>

                    {/* CTA */}
                    <div className="mt-auto">
                      <WhatsappLink
                        context={{ kind: "service", itemName: service.title }}
                        variant="cta"
                        size="default"
                        className="w-full"
                      >
                        Konsultasikan Kebutuhan
                      </WhatsappLink>
                    </div>
                  </div>

                  <details className="group mx-5 mb-5 rounded-xl border border-border bg-background lg:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                      Rincian layanan
                      <span
                        aria-hidden="true"
                        className="font-sans text-lg font-normal text-brand-gold transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="border-t border-border px-4 py-4">
                      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
                        Manfaat layanan
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
                        Cocok untuk
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {service.suitableFor.map((suit) => (
                          <li key={suit} className="text-sm leading-6 text-muted-foreground">
                            {suit}
                          </li>
                        ))}
                      </ul>

                      <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
                        Informasi untuk konsultasi
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {service.consultNeeds.map((need) => (
                          <li key={need} className="text-sm leading-6 text-muted-foreground">
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>

                  <div className="px-5 pb-5 lg:hidden">
                    <p className="mb-3 text-xs leading-5 text-muted-foreground">
                      Detail dan ketersediaan dikonfirmasi langsung sebelum pemesanan.
                    </p>
                    <WhatsappLink
                      context={{ kind: "service", itemName: service.title }}
                      variant="cta"
                      size="default"
                      className="w-full"
                    >
                      Konsultasikan Kebutuhan
                    </WhatsappLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONSULTATION PROCESS */}
      <section className="section-soft">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Langkah konsultasi"
            title="Cara memulai"
            description="Proses konsultasi sederhana untuk mendapatkan layanan yang sesuai dengan kebutuhan perjalanan Anda."
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Kenali kebutuhan",
                desc: "Pelajari pilihan layanan pada halaman ini dan tentukan jenis perjalanan yang paling sesuai.",
              },
              {
                step: "02",
                title: "Hubungi admin",
                desc: "Sampaikan kebutuhan perjalanan melalui WhatsApp — tujuan, tanggal, durasi, dan jumlah penumpang.",
              },
              {
                step: "03",
                title: "Konfirmasi bersama",
                desc: "Admin akan membantu menyesuaikan pilihan kendaraan dan mengonfirmasi detail pemesanan.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-border bg-background p-6 sm:p-7 list-none"
              >
                <span className="font-display text-3xl text-brand-gold">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="bg-background" id="konsultasi">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Formulir konsultasi"
            title="Sampaikan kebutuhan perjalanan"
            description="Isi formulir berikut dan kami siapkan pesan WhatsApp otomatis berisi detail perjalanan Anda."
          />
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>
      </section>

      <CtaBand
        title="Siapkan rencana perjalanan"
        description="Hubungi admin untuk konsultasi detail layanan dan ketersediaan kendaraan yang sesuai dengan kebutuhan Anda."
      />
    </>
  );
}
