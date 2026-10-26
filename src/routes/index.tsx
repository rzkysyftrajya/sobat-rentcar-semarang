import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Car,
  Users,
  MapPin,
  Briefcase,
  Shield,
  Clock,
  Phone,
  ChevronDown,
  ArrowRight,
  Star,
  Quote,
  ArrowUpRight,
  Instagram,
  Music2,
  Play,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsappLink } from "@/components/shared/WhatsappLink";
import { CompanyProfile } from "@/components/shared/CompanyProfile";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { vehicles } from "@/data/vehicles";
import { tourPackages } from "@/data/tour-packages";
import { faqs } from "@/data/faq";
import { articles, formatDate } from "@/data/articles";
import { googleReviews } from "@/data/google-reviews";
import heroImage from "@/assets/hero/hero-section.webp";
import businessTripImage from "@/assets/card-hero-section/perjalanan-bisnis.webp";
import garageFleetLineup from "@/assets/garasi/garage-fleet-lineup.webp";
import garageCityCars from "@/assets/garasi/garage-city-cars.webp";
import batikDay2024 from "@/assets/aktivitas/hari-batik-nasional-2024.webp";
import driverServiceHiace from "@/assets/dokumentasi-driver/driver-documentation-15.webp";
import driverTeamGarage from "@/assets/dokumentasi-driver/driver-documentation-12.webp";
import driverServiceAlphard from "@/assets/dokumentasi-driver/driver-documentation-29.webp";
import featuredHiacePremio from "@/assets/hiace-premio/hiace-premio-luxury-featured.webp";
import communityPress from "@/assets/komunitas-rental/community-press.webp";
import communityKorembi from "@/assets/komunitas-rental/community-korembi.webp";
import communityTripArta from "@/assets/komunitas-rental/community-trip-arta.webp";
import communitySemarangHebat from "@/assets/komunitas-rental/community-semarang-hebat.webp";
import clientAkademiKepolisian from "@/assets/klien/Akademi-Kepolisian.webp";
import clientAngkasaPura from "@/assets/klien/angkasa-pura.webp";
import clientBappenas from "@/assets/klien/bappenas.webp";
import clientDprRi from "@/assets/klien/DPR-RI.webp";
import clientKemenag from "@/assets/klien/kemenag.webp";
import clientKemenkes from "@/assets/klien/kemenkes.webp";
import clientKemenkoPerekonomian from "@/assets/klien/kemenko-perekonomian.webp";
import clientKementerianSekretariatNegara from "@/assets/klien/kementerian-sekretariat-negara.webp";
import clientPoldaJawaTengah from "@/assets/klien/polda-jawa-tengah.webp";
import clientPln from "@/assets/klien/PLN.webp";
import clientPertamina from "@/assets/klien/pertamina.webp";
import clientPupr from "@/assets/klien/pupr.webp";
import paymentBca from "@/assets/pembayaran/bca.jpg - Diedit.webp";
import paymentBni from "@/assets/pembayaran/bni.jpg - Diedit.webp";
import paymentBri from "@/assets/pembayaran/bri.jpg - Diedit.webp";
import paymentDana from "@/assets/pembayaran/dana.jpg - Diedit.webp";
import paymentMandiri from "@/assets/pembayaran/mandiri.jpg - Diedit.webp";

const homeDescription =
  "Layanan rental mobil di Semarang dan sekitarnya untuk kebutuhan pribadi, keluarga, bisnis, rombongan, dan wisata. Konsultasi pemesanan melalui WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.name },
      { name: "description", content: homeDescription },
      { property: "og:title", content: siteConfig.name },
      { property: "og:description", content: homeDescription },
      { property: "og:url", content: siteConfig.domain },
      { name: "twitter:title", content: siteConfig.name },
      { name: "twitter:description", content: homeDescription },
    ],
    links: [{ rel: "canonical", href: siteConfig.domain }],
  }),
  component: Index,
});

const serviceIcons: Record<string, React.ElementType> = {
  "dengan-driver": Car,
  "lepas-kunci": Shield,
  "transportasi-keluarga": Users,
  "perjalanan-bisnis": Briefcase,
  "transportasi-rombongan": Users,
  "perjalanan-wisata": MapPin,
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-foreground hover:text-primary transition-colors"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{question}</span>
        <ChevronDown
          aria-hidden="true"
          className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{answer}</p>}
    </div>
  );
}

function Index() {
  const activeServices = services.filter((s) => s.active);
  const previewVehicles = vehicles.filter((v) => v.active).slice(0, 3);
  const featuredVehicle = vehicles.find((vehicle) => vehicle.id === "hiace-premio-luxury-9-seat");
  const featuredVehicleName = "Hiace Premio Luxury";
  const previewPackages = tourPackages.slice(0, 3);
  const previewArticles = articles.slice(0, 3);

  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const revealTargets = document.querySelectorAll<HTMLElement>(
      "main > section:not(:first-child) > div",
    );

    revealTargets.forEach((target, index) => {
      target.classList.add(index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative isolate overflow-hidden bg-[#0A1220] lg:px-6 lg:py-6"
        aria-label="Hero"
      >
        <div className="relative isolate flex min-h-[620px] flex-col justify-center overflow-hidden bg-[#0A1220] sm:min-h-[680px] lg:h-[min(720px,calc(100svh-7rem))] lg:min-h-[620px] lg:justify-start lg:rounded-[1.75rem]">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-[68%_center] opacity-100 sm:object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1220]/55 via-[#0A1220]/45 to-[#0A1220]/85 lg:bg-gradient-to-r lg:from-[#0A1220]/90 lg:via-[#0A1220]/48 lg:to-[#0A1220]/12" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/55 via-transparent to-[#0A1220]/10 lg:bg-[radial-gradient(ellipse_at_50%_15%,rgba(194,165,106,0.16),transparent_58%)]" />
          </div>

          <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-24 sm:px-6 sm:py-32 lg:items-start lg:justify-center lg:px-10 lg:pt-16">
            <div className="max-w-2xl text-center lg:text-center">
              <p className="flex items-center justify-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand-gold sm:text-sm lg:justify-center">
                <span aria-hidden="true" className="h-px w-8 bg-brand-gold lg:hidden" />
                {siteConfig.shortName} — Semarang
              </p>
              <h1 className="mt-4 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-5xl xl:text-6xl">
                {siteConfig.tagline}
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-lg sm:leading-8 lg:text-base">
                Pilihan layanan transportasi di Semarang dan sekitarnya — dengan driver atau lepas
                kunci — untuk kebutuhan pribadi, keluarga, bisnis, dan wisata.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center lg:justify-center">
                <WhatsappLink context={{ kind: "general" }} variant="cta" size="xl">
                  Konsultasi Pemesanan
                </WhatsappLink>
                <Link
                  to="/armada"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-brand-gold/70 hover:bg-white/10"
                >
                  Jelajahi Armada
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEUNGGULAN ──────────────────────────────────────────── */}
      <section className="bg-background" aria-labelledby="keunggulan-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.7fr] md:items-end md:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                Mengapa Sobat RentCar
              </p>
              <h2
                id="keunggulan-heading"
                className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                Kemudahan yang kami tawarkan
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground md:justify-self-end md:text-base">
              Pilihan layanan yang mudah dikonsultasikan, fleksibel sesuai kebutuhan, dan tersedia
              untuk berbagai jenis perjalanan.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-16">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-border bg-secondary sm:min-h-[380px] lg:min-h-[470px]">
              <img
                src={businessTripImage}
                alt="Driver Sobat RentCar mendampingi perjalanan dengan kendaraan premium"
                className="absolute inset-0 h-full w-full object-cover object-[center_55%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/65 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-semibold tracking-wide text-white drop-shadow sm:bottom-7 sm:left-7">
                Perjalanan nyaman, layanan yang bisa dikonsultasikan.
              </p>
            </div>

            <div className="grid gap-3 min-[400px]:grid-cols-2 sm:gap-4">
              {[
                {
                  icon: Phone,
                  title: "Konsultasi Langsung",
                  desc: "Sampaikan kebutuhan perjalanan melalui WhatsApp dan diskusikan pilihan yang sesuai.",
                  link: "/layanan" as const,
                  linkLabel: "Lihat layanan",
                },
                {
                  icon: Car,
                  title: "Pilihan Kendaraan",
                  desc: "Kenali kategori kendaraan yang dapat disesuaikan untuk perjalanan Anda.",
                  link: "/armada" as const,
                  linkLabel: "Jelajahi armada",
                },
                {
                  icon: Clock,
                  title: "Fleksibel Sesuai Rencana",
                  desc: "Pilih layanan dengan driver atau lepas kunci sesuai tujuan dan rencana perjalanan.",
                  link: "/layanan" as const,
                  linkLabel: "Pilih layanan",
                },
                {
                  icon: Shield,
                  title: "Konfirmasi Langsung",
                  desc: "Detail layanan dan ketersediaan kendaraan dikonfirmasi bersama admin sebelum pemesanan.",
                  link: "/layanan" as const,
                  linkLabel: "Pelajari proses",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group flex flex-col rounded-xl border border-border/80 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/50 hover:shadow-md sm:p-5"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-brand-gold/10">
                    <item.icon aria-hidden="true" className="size-[18px] text-brand-gold" />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                  </div>
                  <Link
                    to={item.link}
                    className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {item.linkLabel}
                    <span className="flex size-7 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-0.5">
                      <ArrowRight aria-hidden="true" className="size-3.5" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CompanyProfile />

      {/* ── TENTANG ─────────────────────────────────────────────── */}
      <section className="bg-background" aria-labelledby="tentang-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
          <img
            src={garageFleetLineup}
            alt="Deretan kendaraan Sobat RentCar di garasi"
            className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
              Tentang Sobat RentCar
            </p>
            <h2
              id="tentang-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Kenali layanan kami lebih dekat.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Sobat RentCar Semarang melayani kebutuhan transportasi pribadi, keluarga, bisnis,
              rombongan, dan wisata. Konsultasikan kebutuhan perjalanan untuk menemukan layanan yang
              sesuai.
            </p>
            <Link
              to="/tentang"
              className="mt-6 inline-flex min-h-10 items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Tentang kami
            </Link>
          </div>
        </div>
      </section>

      {/* ── KATEGORI LAYANAN ────────────────────────────────────── */}
      <section className="section-soft" aria-labelledby="layanan-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Kebutuhan perjalanan"
            title="Pilihan layanan"
            description="Kenali pilihan layanan untuk berbagai jenis perjalanan. Detail layanan dan ketersediaan dikonfirmasi langsung dengan admin."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeServices.map((service) => {
              const Icon = serviceIcons[service.id] ?? Car;
              return (
                <div
                  key={service.id}
                  className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/10">
                    <Icon aria-hidden="true" className="size-5 text-brand-gold" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <WhatsappLink
                    context={{ kind: "service", itemName: service.title }}
                    variant="outline"
                    size="sm"
                    className="mt-5 w-full"
                  >
                    Konsultasikan Kebutuhan
                  </WhatsappLink>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/layanan"
              className="inline-flex min-h-10 items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Lihat detail semua layanan
            </Link>
          </div>
        </div>
      </section>

      {siteConfig.dataStatus.ulasanGoogleTerverifikasi && (
        <section className="section-soft" aria-labelledby="ulasan-heading">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                  Cerita pelanggan
                </p>
                <h2
                  id="ulasan-heading"
                  className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                >
                  Perjalanan nyaman, kata mereka.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Simak pengalaman pelanggan Sobat RentCar yang dibagikan di Google Maps.
                </p>
              </div>

              <div className="w-fit rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold text-muted-foreground">Rating Google Maps</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="font-display text-4xl font-semibold tracking-tight text-foreground">
                    {googleReviews.rating.toLocaleString("id-ID")}
                  </span>
                  <span className="text-sm text-muted-foreground">/ 5</span>
                  <div className="flex gap-0.5 text-brand-gold" aria-label="5 dari 5 bintang">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} aria-hidden="true" className="size-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {googleReviews.reviewCount} ulasan · diperiksa {googleReviews.checkedAt}
                </p>
                <a
                  href={googleReviews.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  Lihat semua ulasan
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>

            <div className="reviews-marquee mt-8 space-y-4 overflow-hidden sm:space-y-5">
              {[googleReviews.reviews, googleReviews.reviews].map((rowReviews, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`reviews-marquee-track flex w-max gap-4 sm:gap-5 ${
                    rowIndex === 0 ? "reviews-marquee-top" : "reviews-marquee-bottom"
                  }`}
                >
                  {[0, 1].map((copy) => (
                    <div
                      key={copy}
                      className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
                      aria-hidden={copy === 1 ? "true" : undefined}
                    >
                      {rowReviews.map((review, reviewIndex) => (
                        <article
                          key={`${review.name}-${review.quote}-${reviewIndex}`}
                          className="flex w-[min(82vw,25rem)] shrink-0 flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:w-[24rem] sm:p-7"
                        >
                          <div className="flex items-center justify-between">
                            {"rating" in review && review.rating ? (
                              <div
                                className="flex gap-1 text-brand-gold"
                                aria-label={`${review.rating} dari 5 bintang`}
                              >
                                {Array.from({ length: review.rating }, (_, index) => (
                                  <Star
                                    key={index}
                                    aria-hidden="true"
                                    className="size-4 fill-current"
                                  />
                                ))}
                              </div>
                            ) : (
                              <span className="text-xs font-medium text-muted-foreground">
                                Google Maps
                              </span>
                            )}
                            <Quote aria-hidden="true" className="size-7 text-brand-gold/40" />
                          </div>
                          <blockquote className="mt-5 min-h-24 flex-1 text-sm leading-7 text-foreground sm:text-base">
                            “{review.quote}”
                          </blockquote>
                          <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                            <div
                              aria-hidden="true"
                              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white"
                            >
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{review.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {"source" in review ? review.source : "Ulasan di Google Maps"}
                              </p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PILIHAN ARMADA ──────────────────────────────────────── */}
      <section className="bg-background" aria-labelledby="armada-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Pilihan kendaraan"
            title="Kategori armada"
            description="Berbagai kategori kendaraan untuk didiskusikan sesuai kebutuhan. Ketersediaan tipe tertentu dikonfirmasi langsung dengan admin."
            align="left"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">{vehicle.name}</h3>
                  {vehicle.availabilityStatus === "menunggu-konfirmasi" && (
                    <p className="mt-1 text-xs font-semibold text-primary">
                      Ketersediaan menunggu konfirmasi
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {vehicle.description}
                  </p>
                  <WhatsappLink
                    context={{ kind: "vehicle", itemName: vehicle.name }}
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full"
                  >
                    Tanyakan Ketersediaan
                  </WhatsappLink>
                </div>
              </div>
            ))}
          </div>
          {featuredVehicle && (
            <article className="mt-8 grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:grid-cols-[1.05fr_0.95fr]">
              <Link
                to="/armada"
                className="group relative block aspect-square min-h-64 overflow-hidden bg-secondary sm:aspect-auto sm:min-h-80"
                aria-label={`Lihat armada ${featuredVehicleName}`}
              >
                <img
                  src={featuredHiacePremio}
                  alt="Foto Hiace Premio Luxury dengan tampilan interior"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Armada pilihan
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {featuredVehicleName}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                  Hiace Premio Luxury dengan kabin premium untuk perjalanan bersama. Tanyakan detail
                  unit dan ketersediaannya langsung kepada admin.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <WhatsappLink
                    context={{ kind: "vehicle", itemName: featuredVehicleName }}
                    variant="cta"
                    size="sm"
                  >
                    Konsultasikan unit
                  </WhatsappLink>
                  <Link
                    to="/galeri"
                    className="inline-flex min-h-10 items-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                  >
                    Lihat foto lainnya
                  </Link>
                </div>
              </div>
            </article>
          )}
          <div className="mt-8 text-center">
            <Link
              to="/armada"
              className="inline-flex min-h-10 items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Lihat semua kategori armada
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOKUMENTASI GARASI ──────────────────────────────────── */}
      <section className="section-soft" aria-label="Dokumentasi armada di garasi">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Dokumentasi armada"
            title="Lihat suasana garasi Sobat RentCar."
            description="Beberapa pilihan kendaraan yang menjadi bagian dari armada kami. Tipe dan ketersediaan unit dikonfirmasi langsung dengan admin."
            align="left"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                image: garageFleetLineup,
                alt: "Beberapa kendaraan Sobat RentCar terparkir berjajar di garasi",
                title: "Armada di garasi",
              },
              {
                image: garageCityCars,
                alt: "Deretan mobil city car berwarna-warni di garasi",
                title: "Pilihan kendaraan",
              },
            ].map((photo) => (
              <Link
                key={photo.title}
                to="/galeri"
                className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16">
                  <p className="font-display text-lg font-semibold text-white">{photo.title}</p>
                  <p className="mt-1 text-sm text-white/80">Lihat galeri foto</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                  Layanan dengan driver
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                  Perjalanan nyaman, ditemani tim kami.
                </h3>
              </div>
              <Link
                to="/galeri"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                Lihat galeri
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                {
                  image: driverServiceHiace,
                  alt: "Driver Sobat Transport bersama unit Hiace putih",
                },
                {
                  image: driverTeamGarage,
                  alt: "Tim driver Sobat Transport di area garasi",
                },
                {
                  image: driverServiceAlphard,
                  alt: "Driver bersama unit Alphard untuk layanan perjalanan",
                },
              ].map((photo) => (
                <Link
                  key={photo.image}
                  to="/galeri"
                  className="group block overflow-hidden rounded-xl border border-border bg-card"
                  aria-label="Lihat dokumentasi layanan dengan driver di galeri"
                >
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/galeri"
            className="group mt-5 flex max-w-xl items-center gap-4 rounded-xl border border-border/80 bg-background/70 p-3 transition-colors hover:border-brand-gold/50 hover:bg-background"
          >
            <img
              src={batikDay2024}
              alt="Dokumentasi tim Sobat Transport mengenakan batik pada perayaan 2 Oktober 2024"
              className="h-20 w-24 shrink-0 rounded-lg object-cover"
              loading="lazy"
            />
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Momen kebersamaan · 2024
              </span>
              <span className="mt-1 block font-display text-sm font-semibold text-foreground">
                Hari Batik Nasional
              </span>
              <span className="mt-1 block text-xs text-muted-foreground group-hover:text-primary">
                Lihat dokumentasi di galeri
              </span>
            </span>
          </Link>
          <div className="mt-8 text-center">
            <Link
              to="/galeri"
              className="inline-flex min-h-10 items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Lihat semua galeri
            </Link>
          </div>
        </div>
      </section>

      {/* ── KOMUNITAS RENTAL ───────────────────────────────────── */}
      <section className="border-t border-border/70 bg-background" aria-label="Komunitas rental">
        <div className="mx-auto max-w-6xl overflow-hidden px-4 py-10 sm:px-6 sm:py-12">
          <div className="mb-6 max-w-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Jejaring rental
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
              Tumbuh bersama komunitas.
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Bagian dari semangat kebersamaan para pelaku rental mobil.
            </p>
          </div>
          <div className="community-marquee overflow-hidden">
            <div className="community-marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 gap-3 pr-3"
                  aria-hidden={copy === 1 ? "true" : undefined}
                >
                  {[
                    {
                      image: communityPress,
                      alt: "Logo komunitas PRESS",
                    },
                    {
                      image: communityKorembi,
                      alt: "Logo Komunitas Rental Mobil Indonesia Korembi",
                    },
                    {
                      image: communityTripArta,
                      alt: "Logo Trip Arta Indonesia",
                    },
                    {
                      image: communitySemarangHebat,
                      alt: "Logo komunitas Semarang Hebat",
                    },
                  ].map((community) => (
                    <div
                      key={community.alt}
                      className="flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-card p-2.5 sm:size-28"
                    >
                      <img
                        src={community.image}
                        alt={community.alt}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KLIEN KAMI ─────────────────────────────────────────── */}
      <section className="border-t border-border/70 bg-card" aria-labelledby="klien-kami-heading">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Kepercayaan
            </p>
            <h2
              id="klien-kami-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Klien Kami
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Klien yang puas dengan pelayanan Sobat RentCar Semarang.
            </p>
          </div>
          <ul className="grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {[
              { name: "Polda Jawa Tengah", image: clientPoldaJawaTengah },
              { name: "Akademi Kepolisian (Akpol)", image: clientAkademiKepolisian },
              { name: "Kemenkes", image: clientKemenkes },
              { name: "Bappenas", image: clientBappenas },
              { name: "PLN", image: clientPln },
              { name: "Pertamina", image: clientPertamina },
              { name: "PUPR", image: clientPupr },
              {
                name: "Kementerian Sekretariat Negara",
                image: clientKementerianSekretariatNegara,
              },
              { name: "BNI", image: paymentBni },
              { name: "Kemenko Perekonomian", image: clientKemenkoPerekonomian },
              { name: "Kemenag (Kementerian Agama)", image: clientKemenag },
              { name: "Angkasa Pura", image: clientAngkasaPura },
              { name: "DPR RI", image: clientDprRi },
            ].map((client) => (
              <li
                key={client.name}
                className="flex min-h-28 items-center justify-center rounded-xl border border-border/70 bg-white p-4 sm:min-h-32 sm:p-5"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-20 w-full object-contain sm:max-h-24"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── METODE PEMBAYARAN ──────────────────────────────────── */}
      <section
        className="overflow-hidden border-t border-border/70 bg-background"
        aria-label="Metode pembayaran"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Pembayaran
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Pilihan metode pembayaran
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Tanyakan kepada admin mengenai metode pembayaran yang sesuai untuk pemesanan Anda.
            </p>
          </div>
          <div className="payment-marquee overflow-hidden">
            <div className="payment-marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
                  aria-hidden={copy === 1 ? "true" : undefined}
                >
                  {[
                    { image: paymentBca, alt: "BCA" },
                    { image: paymentBni, alt: "BNI" },
                    { image: paymentBri, alt: "BRI" },
                    { image: paymentDana, alt: "DANA", brand: "dana" },
                    { image: paymentMandiri, alt: "Mandiri", brand: "mandiri" },
                  ].map((payment) => (
                    <img
                      key={payment.alt}
                      src={payment.image}
                      alt={copy === 0 ? payment.alt : ""}
                      className={`h-20 w-44 shrink-0 object-contain sm:h-24 sm:w-52 ${
                        payment.brand === "dana"
                          ? "rounded-md bg-[#118eea] p-2"
                          : payment.brand === "mandiri"
                            ? "rounded-md bg-[#003b70] p-2"
                            : ""
                      }`}
                      loading="lazy"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ALUR PEMESANAN ──────────────────────────────────────── */}
      <section id="alur-pemesanan" className="section-navy scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Cara memesan"
            title="Alur pemesanan"
            description="Proses konsultasi yang sederhana dan langsung."
            inverted
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Pilih Layanan",
                desc: "Tentukan gambaran jenis layanan yang sesuai — dengan driver, lepas kunci, keluarga, bisnis, atau wisata.",
              },
              {
                step: "02",
                title: "Sampaikan Kebutuhan",
                desc: "Ceritakan tujuan, tanggal, durasi, dan jumlah penumpang melalui pesan WhatsApp.",
              },
              {
                step: "03",
                title: "Konsultasikan Detail",
                desc: "Admin akan membantu menyesuaikan pilihan kendaraan dan detail perjalanan Anda.",
              },
              {
                step: "04",
                title: "Konfirmasi Pemesanan",
                desc: "Setelah detail disepakati, konfirmasi pemesanan dilakukan langsung bersama admin.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 list-none"
              >
                <span className="text-3xl font-extrabold text-primary/60">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex justify-center">
            <WhatsappLink context={{ kind: "general" }} size="xl" variant="cta">
              Mulai Konsultasi
            </WhatsappLink>
          </div>
        </div>
      </section>

      {/* ── PAKET WISATA UNGGULAN ───────────────────────────────── */}
      <section className="section-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Inspirasi perjalanan"
            title="Paket wisata"
            description="Beberapa ide perjalanan wisata di Semarang dan sekitarnya. Semua paket masih berupa konsep yang perlu dikonsultasikan terlebih dahulu."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <Link
                  to="/paket-wisata/$slug"
                  params={{ slug: pkg.slug }}
                  className="block overflow-hidden"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    className="aspect-[16/10] w-full bg-secondary object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                    {pkg.category}
                  </p>
                  <Link to="/paket-wisata/$slug" params={{ slug: pkg.slug }} className="block">
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground hover:text-primary transition-colors">
                      {pkg.name}
                    </h3>
                  </Link>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Destinasi kandidat — detail rute dikonfirmasi bersama admin.
                  </p>
                  <WhatsappLink
                    context={{ kind: "package", itemName: pkg.name }}
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full"
                  >
                    Konsultasikan Paket
                  </WhatsappLink>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/paket-wisata"
              className="inline-flex min-h-10 items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Lihat semua inspirasi paket wisata
            </Link>
          </div>
        </div>
      </section>

      {/* ── ARTIKEL ─────────────────────────────────────────────── */}
      <section className="bg-background" aria-label="Artikel terbaru">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Wawasan perjalanan"
            title="Artikel terbaru"
            description="Panduan dan tips untuk membantu merencanakan perjalanan di Semarang dan sekitarnya."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewArticles.map((article) => (
              <article
                key={article.slug}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <Link to="/artikel/$slug" params={{ slug: article.slug }} className="group block">
                  <img
                    src={article.coverImage}
                    alt={article.coverImageAlt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                      {article.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-muted-foreground">
                      {formatDate(article.publishedAt)}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/artikel"
              className="inline-flex min-h-10 items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Baca semua artikel
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIDEO SOSIAL MEDIA ───────────────────────────────────── */}
      <section className="section-soft" aria-label="Video media sosial">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Cerita dari Sobat"
            title="Lihat keseruan perjalanan kami"
            description="Cuplikan perjalanan dan aktivitas Sobat RentCar di media sosial."
          />
          <div className="mt-10 grid justify-items-center gap-8 sm:grid-cols-2 sm:items-start">
            <article className="w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm">
              <h3 className="mb-4 text-center font-display text-lg font-bold text-foreground">
                Video TikTok
              </h3>
              <a
                href="https://vt.tiktok.com/ZSgQTb6sE/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tonton video Sobat Transport di TikTok"
                className="group relative block aspect-[9/16] overflow-hidden rounded-xl bg-[#111827]"
              >
                <img
                  src={garageFleetLineup}
                  alt=""
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm"
                >
                  @sobattransport · TikTok
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-foreground shadow-lg transition-transform group-hover:scale-110">
                    <Play className="ml-1 size-7 fill-current" />
                  </span>
                </span>
                <span className="absolute inset-x-4 bottom-5 text-left text-sm font-semibold leading-relaxed text-white">
                  Ready setiap hari, siap menemani perjalanan Anda
                </span>
              </a>
              <a
                href="https://vt.tiktok.com/ZSgQTb6sE/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md border border-border text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Music2 aria-hidden="true" className="size-4" />
                Tonton video di TikTok
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </article>
            <article className="w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm">
              <h3 className="mb-4 text-center font-display text-lg font-bold text-foreground">
                Instagram Reel
              </h3>
              <iframe
                src="https://www.instagram.com/reel/DKMf6j-Phuf/embed/"
                title="Instagram Reel Sobat RentCar"
                className="mx-auto aspect-[9/16] w-full max-w-[360px] rounded-xl bg-muted"
                loading="lazy"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <a
                href="https://www.instagram.com/reel/DKMf6j-Phuf/?dlrf=MWpybjRsdDRia2oxdQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md border border-border text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Instagram aria-hidden="true" className="size-4" />
                Lihat di Instagram
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              <Instagram aria-hidden="true" className="size-4" />
              Ikuti @sobatrent
            </a>
            <a
              href={siteConfig.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              <Music2 aria-hidden="true" className="size-4" />
              Ikuti @sobattransport
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Pertanyaan umum"
            title="FAQ"
            description="Jawaban untuk pertanyaan yang sering diajukan mengenai layanan rental dan proses konsultasi."
          />
          <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-card px-5 sm:px-8">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PENUTUP ─────────────────────────────────────────── */}
      <section className="section-navy-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Sobat RentCar Semarang
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Siap merencanakan perjalanan Anda?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Hubungi admin untuk konsultasi kebutuhan transportasi — dari perjalanan keluarga,
              bisnis, hingga wisata di Semarang dan sekitarnya.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <WhatsappLink context={{ kind: "general" }} size="xl" variant="cta">
                Konsultasi via WhatsApp
              </WhatsappLink>
              <Link
                to="/layanan"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Lihat pilihan layanan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
