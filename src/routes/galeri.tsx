import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { PageIntro } from "@/components/shared/PageIntro";
import { siteConfig } from "@/config/site";
import { galleryItems, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

const pageTitle = `Galeri | ${siteConfig.name}`;
const canonicalUrl = new URL("/galeri", siteConfig.domain).href;

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: pageTitle },
      {
        name: "description",
        content:
          "Lihat dokumentasi armada Sobat RentCar di garasi serta inspirasi perjalanan dan destinasi sekitar Semarang.",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:url", content: canonicalUrl },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: Gallery,
});

function Lightbox({
  items,
  startIndex,
  onClose,
}: {
  items: typeof galleryItems;
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(() => setIdx((i) => (i > 0 ? i - 1 : items.length - 1)), [items.length]);
  const next = useCallback(() => setIdx((i) => (i < items.length - 1 ? i + 1 : 0)), [items.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const current = items[idx];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label={`Galeri: ${current.title}`}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Tutup galeri"
      >
        <X aria-hidden="true" className="size-5" />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Gambar sebelumnya"
      >
        <ChevronLeft aria-hidden="true" className="size-5" />
      </button>

      {/* Image */}
      <figure className="relative mx-16 flex max-h-[85vh] max-w-5xl flex-col items-center">
        <img
          key={current.id}
          src={current.image}
          alt={current.alt}
          className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center text-sm text-white/80">
          <span className="font-semibold">{current.title}</span>
          <span className="mx-2 text-white/40">·</span>
          <span className="text-white/60">{current.category}</span>
        </figcaption>
      </figure>

      {/* Next */}
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Gambar berikutnya"
      >
        <ChevronRight aria-hidden="true" className="size-5" />
      </button>

      {/* Counter */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50">
        {idx + 1} / {items.length}
      </p>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        role="presentation"
        aria-hidden="true"
      />
    </div>
  );
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "Semua">("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allCategories: Array<GalleryCategory | "Semua"> = ["Semua", ...galleryCategories];

  const filtered =
    activeCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (filteredIndex: number) => {
    setLightboxIndex(filteredIndex);
  };

  return (
    <>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* PAGE HEADER */}
      <PageIntro
        items={[{ label: "Galeri" }]}
        eyebrow="Galeri visual"
        title="Perjalanan, dilihat lebih dekat."
        description="Dokumentasi armada, kegiatan, dan destinasi perjalanan Sobat RentCar Semarang."
      />

      {/* FILTER */}
      <div className="sticky top-[4.25rem] z-30 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 sm:top-20">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div
            className="mobile-filter-row flex flex-nowrap gap-2 sm:flex-wrap"
            role="group"
            aria-label="Filter kategori galeri"
          >
            {allCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-primary",
                )}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY GRID */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold text-foreground">Tidak ada gambar</p>
              <button
                type="button"
                onClick={() => setActiveCategory("Semua")}
                className="mt-4 inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-accent"
              >
                Lihat semua
              </button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-muted-foreground">
                {filtered.length} gambar ditampilkan
              </p>
              {/* Masonry-style grid */}
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {filtered.map((item, idx) => (
                  <figure
                    key={item.id}
                    className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_45px_-40px_rgba(32,29,23,0.5)]"
                  >
                    <button
                      type="button"
                      className="block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onClick={() => openLightbox(idx)}
                      aria-label={`Lihat gambar: ${item.title}`}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </button>
                    <figcaption className="flex items-center justify-between gap-3 px-4 py-4">
                      <span className="text-sm font-medium text-foreground">{item.title}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {item.category}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-8 text-center text-xs text-muted-foreground">
                Klik gambar untuk memperbesar.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
