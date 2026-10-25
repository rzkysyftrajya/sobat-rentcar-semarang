import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { CtaBand } from "@/components/shared/CtaBand";
import { PageIntro } from "@/components/shared/PageIntro";
import { WhatsappLink } from "@/components/shared/WhatsappLink";
import { siteConfig } from "@/config/site";
import { vehicleCategories, vehicles } from "@/data/vehicles";
import { cn } from "@/lib/utils";

const pageTitle = `Armada | ${siteConfig.name}`;
const pageDescription =
  "Lihat pilihan kendaraan Sobat Rent Car Semarang: City Car, Regular Car MPV, Premium SUV, dan Shuttle Car.";
const canonicalUrl = new URL("/armada", siteConfig.domain).href;

export const Route = createFileRoute("/armada")({
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
  component: Fleet,
});

function Fleet() {
  const [activeCategory, setActiveCategory] = useState<string>("semua");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      if (!v.active) return false;
      if (activeCategory !== "semua" && v.category !== activeCategory) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!v.name.toLowerCase().includes(q) && !v.description.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, search]);

  const allCategories = [{ id: "semua", label: "Semua" }, ...vehicleCategories];

  return (
    <>
      {/* PAGE HEADER */}
      <PageIntro
        items={[{ label: "Armada" }]}
        eyebrow="Pilihan kendaraan"
        title="Temukan kendaraan untuk setiap tujuan."
        description="Daftar kategori kendaraan yang tersedia untuk didiskusikan. Tipe kendaraan, kapasitas, dan ketersediaannya perlu dikonfirmasi sebelum pemesanan."
        note={
          <>
            <strong className="text-foreground">Catatan:</strong> Data ini merupakan referensi awal.
            Ketersediaan kendaraan aktual dikonfirmasi langsung dengan admin.
          </>
        }
      />

      {/* FILTER & SEARCH */}
      <section className="sticky top-[4.25rem] z-30 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 sm:top-20">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Category tabs */}
            <div
              className="mobile-filter-row flex flex-nowrap gap-2 sm:flex-wrap"
              role="group"
              aria-label="Filter kategori kendaraan"
            >
              {allCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors",
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-primary",
                  )}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search
                aria-hidden="true"
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="search"
                placeholder="Cari nama atau kategori…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="Cari kendaraan"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE GRID */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <SlidersHorizontal
                aria-hidden="true"
                className="mx-auto size-10 text-muted-foreground/40"
              />
              <p className="mt-4 text-lg font-semibold text-foreground">
                Tidak ada kendaraan yang cocok
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Coba ubah kata kunci pencarian atau pilih kategori lain.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("semua");
                  setSearch("");
                }}
                className="mt-5 inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent"
              >
                Reset filter
              </button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-muted-foreground">
                Menampilkan {filtered.length} kendaraan
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((vehicle) => {
                  const category = vehicleCategories.find((c) => c.id === vehicle.category);
                  return (
                    <article
                      key={vehicle.id}
                      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_22px_60px_-48px_rgba(32,29,23,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-[#f2f4f7] to-white">
                        <img
                          src={vehicle.image}
                          alt={vehicle.imageAlt}
                          className="absolute inset-0 h-full w-full object-contain p-4 sm:p-5"
                          style={{ scale: vehicle.imageScale }}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h2 className="font-display text-lg font-bold text-foreground">
                              {vehicle.name}
                            </h2>
                            <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-gold">
                              {category?.label}
                            </p>
                          </div>
                          {vehicle.availabilityStatus === "menunggu-konfirmasi" && (
                            <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                              Menunggu konfirmasi
                            </span>
                          )}
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {vehicle.description}
                        </p>

                        {/* Optional specs — only shown if data is present */}
                        {(vehicle.capacity ||
                          vehicle.transmission ||
                          (vehicle.facilities && vehicle.facilities.length > 0)) && (
                          <div className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                            {vehicle.capacity && (
                              <p>
                                <span className="font-semibold text-foreground">Kapasitas:</span>{" "}
                                {vehicle.capacity}
                              </p>
                            )}
                            {vehicle.transmission && (
                              <p className="mt-1">
                                <span className="font-semibold text-foreground">Transmisi:</span>{" "}
                                {vehicle.transmission}
                              </p>
                            )}
                            {vehicle.facilities && vehicle.facilities.length > 0 && (
                              <p className="mt-1">
                                <span className="font-semibold text-foreground">Fasilitas:</span>{" "}
                                {vehicle.facilities.join(", ")}
                              </p>
                            )}
                          </div>
                        )}

                        <WhatsappLink
                          context={{ kind: "vehicle", itemName: vehicle.name }}
                          variant="cta"
                          size="sm"
                          className="mt-4 w-full"
                        >
                          Tanyakan Ketersediaan
                        </WhatsappLink>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <CtaBand
        title="Tidak menemukan kendaraan yang sesuai?"
        description="Konsultasikan kebutuhan kendaraan Anda langsung dengan admin. Kami akan membantu menemukan pilihan yang paling sesuai."
      />
    </>
  );
}
