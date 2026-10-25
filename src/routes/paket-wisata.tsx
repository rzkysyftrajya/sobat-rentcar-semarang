import { createFileRoute } from "@tanstack/react-router";

import tourHeroImage from "@/assets/paket-wisata/Paket-Wisata-Semarang.webp";
import { CtaBand } from "@/components/shared/CtaBand";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { WhatsappLink } from "@/components/shared/WhatsappLink";
import { siteConfig } from "@/config/site";
import { tourPackages } from "@/data/tour-packages";

const pageTitle = `Paket Wisata Semarang | ${siteConfig.name}`;
const pageDescription =
  "Jelajahi pilihan paket wisata Semarang dan sekitarnya bersama Sobat RentCar. Konsultasikan destinasi, rute, tanggal, penjemputan, dan kendaraan melalui WhatsApp.";
const canonicalUrl = new URL("/paket-wisata", siteConfig.domain).href;

const serviceNotes = [
  {
    title: "Perjalanan dengan pengemudi",
    description:
      "Layanan dengan pengemudi dapat dikonsultasikan sesuai kebutuhan perjalanan dan layanan yang tersedia.",
  },
  {
    title: "Rute yang dibicarakan bersama",
    description:
      "Destinasi dan urutan perjalanan dapat dibahas lebih dahulu agar rencana perjalanan sesuai dengan waktu dan kebutuhan Anda.",
  },
  {
    title: "Kebutuhan dikonfirmasi admin",
    description:
      "Titik penjemputan, kendaraan, fasilitas, durasi, dan ketersediaan perlu dikonfirmasi langsung sebelum reservasi.",
  },
];

const bookingSteps = [
  "Pilih paket wisata yang paling mendekati rencana perjalanan Anda.",
  "Konsultasikan tanggal, jumlah peserta, destinasi, dan titik penjemputan melalui WhatsApp.",
  "Konfirmasikan itinerary serta kendaraan yang tersedia bersama admin.",
  "Setelah detail disepakati, lanjutkan reservasi melalui WhatsApp.",
];

const faqs = [
  {
    question: "Apakah itinerary dapat disesuaikan?",
    answer:
      "Silakan konsultasikan destinasi, waktu, dan kebutuhan perjalanan Anda. Admin akan membantu membahas rute yang memungkinkan; itinerary dan durasi perlu dikonfirmasi sebelum reservasi.",
  },
  {
    question: "Apakah bisa menentukan titik penjemputan?",
    answer:
      "Sampaikan titik penjemputan yang diinginkan saat konsultasi. Cakupan dan pengaturannya akan dikonfirmasi oleh admin sesuai rencana perjalanan.",
  },
  {
    question: "Apakah bisa memesan perjalanan untuk keluarga atau rombongan?",
    answer:
      "Anda dapat menyampaikan jumlah peserta dan kebutuhan perjalanan keluarga atau rombongan. Admin akan membantu mengonfirmasi pilihan kendaraan yang tersedia dan sesuai.",
  },
  {
    question: "Bagaimana cara mengonfirmasi ketersediaan kendaraan?",
    answer:
      "Hubungi admin melalui WhatsApp dengan menyertakan tanggal, rencana perjalanan, titik penjemputan, dan jumlah peserta. Ketersediaan kendaraan dikonfirmasi langsung oleh admin.",
  },
];

export const Route = createFileRoute("/paket-wisata")({
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
  component: TourPackages,
});

function TourPackages() {
  return (
    <>
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:pb-20">
          <Breadcrumbs items={[{ label: "Paket Wisata" }]} inverted />
          <div className="mt-8 grid items-center gap-8 border-t border-white/15 pt-8 sm:mt-10 sm:gap-10 sm:pt-10 md:grid-cols-[1fr_0.9fr] lg:gap-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                Rencanakan perjalanan Anda
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Paket Wisata Semarang
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Temukan inspirasi perjalanan di Semarang dan sekitarnya. Ceritakan rencana Anda
                kepada admin untuk membahas destinasi, rute, dan kendaraan yang sesuai.
              </p>
              <WhatsappLink
                context={{ kind: "package", itemName: "Semarang" }}
                variant="cta"
                size="lg"
                className="mt-7"
              >
                Konsultasi Paket Wisata
              </WhatsappLink>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
              <img
                src={tourHeroImage}
                alt="Kolase destinasi wisata Semarang, termasuk Kota Lama, Kampung Batik, Sam Poo Kong, dan Saloka"
                className="aspect-[16/10] w-full bg-white object-cover"
                fetchPriority="high"
              />
              <p className="px-4 py-3 text-xs text-white/65">
                Pilihan destinasi wisata Semarang dan sekitarnya
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="daftar-paket" className="bg-background scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
              Pilihan perjalanan
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Temukan inspirasi wisata
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Destinasi di bawah ini adalah kandidat untuk dibahas, bukan itinerary pasti.
              Kesesuaian rute, durasi, fasilitas, serta ketersediaan kendaraan perlu dikonfirmasi
              kepada admin.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {tourPackages.map((travelPackage) => (
              <article
                key={travelPackage.name}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_22px_60px_-48px_rgba(32,29,23,0.45)]"
              >
                <img
                  src={travelPackage.image}
                  alt={travelPackage.imageAlt}
                  className="aspect-[16/10] w-full bg-secondary object-contain"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-gold">
                    {travelPackage.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                    {travelPackage.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {travelPackage.description}
                  </p>
                  <div className="mt-5">
                    <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                      Destinasi kandidat
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {travelPackage.highlights.map((destination) => (
                        <li
                          key={destination}
                          className="flex items-start gap-2 text-sm leading-5 text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                          />
                          {destination}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <WhatsappLink
                    context={{ kind: "package", itemName: travelPackage.name }}
                    variant="cta"
                    size="default"
                    className="mt-6 w-full"
                  >
                    Konsultasi via WhatsApp
                  </WhatsappLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
              Sebelum perjalanan
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Rencana perjalanan dibahas bersama
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {serviceNotes.map((note) => (
              <article key={note.title} className="border-t border-border py-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{note.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{note.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                Alur pemesanan
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Mulai dari konsultasi
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Admin akan membantu membahas rencana perjalanan dan mengonfirmasi detail sebelum
                reservasi dilanjutkan.
              </p>
            </div>
            <ol className="space-y-4">
              {bookingSteps.map((step, index) => (
                <li key={step} className="flex gap-4 border-b border-border pb-4 last:border-0">
                  <span
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
              Pertanyaan umum
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Sebelum konsultasi
            </h2>
          </div>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl font-normal text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Rencanakan perjalanan bersama Sobat RentCar Semarang."
        description="Sampaikan destinasi, tanggal, jumlah peserta, dan titik penjemputan yang Anda rencanakan. Admin akan membantu membahas itinerary serta mengonfirmasi kendaraan yang tersedia melalui WhatsApp."
        context={{ kind: "package", itemName: "Semarang" }}
      />
    </>
  );
}
