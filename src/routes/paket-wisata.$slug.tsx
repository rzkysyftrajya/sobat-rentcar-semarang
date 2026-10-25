import { createFileRoute, Link } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsappLink } from "@/components/shared/WhatsappLink";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { getPackageBySlug, tourPackages } from "@/data/tour-packages";

export const Route = createFileRoute("/paket-wisata/$slug")({
  head: ({ params }) => {
    const travelPackage = getPackageBySlug(params.slug);
    const title = travelPackage
      ? `${travelPackage.name} | ${siteConfig.name}`
      : `Paket Wisata | ${siteConfig.name}`;
    const description =
      travelPackage?.description ??
      "Inspirasi destinasi dan paket perjalanan yang masih memerlukan konfirmasi.";
    const canonicalUrl = travelPackage
      ? new URL(`/paket-wisata/${travelPackage.slug}`, siteConfig.domain).href
      : new URL("/paket-wisata", siteConfig.domain).href;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: canonicalUrl },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },
  component: PackageDetailPage,
});

function PackageDetailPage() {
  const { slug } = Route.useParams();
  const travelPackage = getPackageBySlug(slug);

  if (!travelPackage) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">Paket wisata tidak tersedia</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Paket yang Anda tuju masih dalam tahap konsep atau belum tersedia untuk publikasi.
        </p>
        <Link
          to="/paket-wisata"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Kembali ke daftar paket
        </Link>
      </div>
    );
  }

  const otherPackages = tourPackages.filter((item) => item.slug !== travelPackage.slug).slice(0, 2);

  return (
    <>
      {/* HERO IMAGE */}
      <div className="relative isolate overflow-hidden bg-[#0A1220]">
        <img
          src={travelPackage.image}
          alt={travelPackage.imageAlt}
          className="h-[360px] w-full object-cover opacity-50 sm:h-[480px] lg:h-[560px]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/95 via-[#0A1220]/20 to-[#0A1220]/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 sm:pb-14 lg:pb-16">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
            {travelPackage.category}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {travelPackage.name}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[{ label: "Paket Wisata", path: "/paket-wisata" }, { label: travelPackage.name }]}
        />

        <article className="mt-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Main content */}
            <div className="space-y-6">
              {/* Description */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Tentang paket ini
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {travelPackage.description}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Rencana destinasi merupakan kandidat. Rute, durasi, fasilitas, dan ketersediaan
                  kendaraan dikonfirmasi bersama admin.
                </p>
              </div>

              {/* Highlights */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Destinasi yang menjadi inspirasi
                </h2>
                <ul className="mt-4 space-y-2">
                  {travelPackage.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trip planning */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Rencana perjalanan
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Destinasi dan urutan perjalanan perlu dibahas dengan admin agar sesuai dengan
                  waktu, kebutuhan, dan ketersediaan kendaraan.
                </p>
                <Link
                  to="/armada"
                  className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Lihat kategori armada →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* CTA Card */}
              <div className="rounded-xl border border-border bg-secondary/40 p-6">
                <h2 className="font-display text-lg font-bold text-foreground">
                  Tertarik dengan paket ini?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Konsultasikan rencana perjalanan wisata Anda dengan admin. Kami akan membantu
                  menyesuaikan kendaraan, rute, dan detail lainnya.
                </p>
                <WhatsappLink
                  context={{ kind: "package", itemName: travelPackage.name }}
                  variant="cta"
                  size="default"
                  className="mt-5 w-full"
                >
                  Konsultasikan Paket
                </WhatsappLink>
                <Link
                  to="/paket-wisata"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                >
                  Lihat paket lain
                </Link>
              </div>

              {/* Needs confirmation */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-bold text-foreground">
                  Perlu dikonfirmasi terlebih dahulu
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                  {[
                    "Rencana itinerary lengkap",
                    "Fasilitas termasuk dan tidak termasuk",
                    "Tiket masuk destinasi",
                    "Penginapan (jika diperlukan)",
                    "Konsumsi selama perjalanan",
                    "Ketentuan dan syarat pemesanan",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-muted-foreground/50">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold text-primary">
                  Semua detail di atas dibahas langsung dengan admin.
                </p>
              </div>
            </aside>
          </div>
        </article>

        {/* Other packages */}
        {otherPackages.length > 0 && (
          <section className="mt-12 border-t border-border pt-10">
            <h2 className="font-display text-2xl font-bold text-foreground">Paket wisata lain</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {otherPackages.map((item) => (
                <Card key={item.slug} className="overflow-hidden">
                  <Link
                    to="/paket-wisata/$slug"
                    params={{ slug: item.slug }}
                    className="block overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="aspect-[16/10] w-full bg-secondary object-contain transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <CardContent className="space-y-3 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                      {item.category}
                    </p>
                    <Link
                      to="/paket-wisata/$slug"
                      params={{ slug: item.slug }}
                      className="block text-lg font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <WhatsappLink
                      context={{ kind: "package", itemName: item.name }}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Konsultasikan Paket
                    </WhatsappLink>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
