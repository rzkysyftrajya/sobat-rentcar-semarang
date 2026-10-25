import { Link, createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

import { PageIntro } from "@/components/shared/PageIntro";
import { siteConfig } from "@/config/site";
import { articles, articleCategories, formatDate, type ArticleCategory } from "@/data/articles";
import { cn } from "@/lib/utils";

const pageTitle = `Artikel | ${siteConfig.name}`;
const canonicalUrl = new URL("/artikel", siteConfig.domain).href;

export const Route = createFileRoute("/artikel/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      {
        name: "description",
        content:
          "Panduan umum transportasi, tips perjalanan, dan inspirasi wisata di Semarang dan sekitarnya.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: pageTitle },
      {
        property: "og:description",
        content:
          "Panduan umum transportasi, tips perjalanan, dan inspirasi wisata di Semarang dan sekitarnya.",
      },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: siteConfig.name },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: Articles,
});

function Articles() {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | "Semua">("Semua");
  const [search, setSearch] = useState("");

  const allCategories: Array<ArticleCategory | "Semua"> = ["Semua", ...articleCategories];

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      if (activeCategory !== "Semua" && a.category !== activeCategory) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (
          !a.title.toLowerCase().includes(q) &&
          !a.excerpt.toLowerCase().includes(q) &&
          !a.category.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, search]);

  const featured = articles[0];
  const showFeatured = activeCategory === "Semua" && !search.trim();

  return (
    <>
      {/* PAGE HEADER */}
      <PageIntro
        items={[{ label: "Artikel" }]}
        eyebrow="Wawasan perjalanan"
        title="Catatan kecil untuk perjalanan yang lebih baik."
        description="Bacaan umum untuk membantu merencanakan perjalanan dan kebutuhan transportasi di Semarang dan sekitarnya."
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {/* FEATURED ARTICLE */}
        {showFeatured && featured && (
          <section className="mb-12" aria-label="Artikel unggulan">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
              Artikel unggulan
            </p>
            <Link
              to="/artikel/$slug"
              params={{ slug: featured.slug }}
              className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_70px_-48px_rgba(32,29,23,0.45)] transition-shadow hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-[1.5fr_1fr]">
                <div className="overflow-hidden">
                  <img
                    src={featured.coverImage}
                    alt={featured.coverImageAlt}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-auto lg:h-full"
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                    {featured.category}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <p className="mt-5 text-xs text-muted-foreground">
                    {formatDate(featured.publishedAt)}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                    Baca selengkapnya →
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* FILTER & SEARCH */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category filter */}
          <div
            className="mobile-filter-row flex flex-nowrap gap-2 sm:flex-wrap"
            role="group"
            aria-label="Filter kategori artikel"
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

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              placeholder="Cari artikel…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              aria-label="Cari artikel"
            />
          </div>
        </div>

        {/* ARTICLE GRID */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg font-semibold text-foreground">Tidak ada artikel yang cocok</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Coba ubah kata kunci atau pilih kategori lain.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("Semua");
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
              {filtered.length} artikel ditemukan
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article) => (
                <article
                  key={article.slug}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_22px_60px_-48px_rgba(32,29,23,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link
                    to="/artikel/$slug"
                    params={{ slug: article.slug }}
                    className="block overflow-hidden"
                  >
                    <img
                      src={article.coverImage}
                      alt={article.coverImageAlt}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-5 sm:p-6">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-gold">
                      {article.category}
                    </p>
                    <Link to="/artikel/$slug" params={{ slug: article.slug }} className="block">
                      <h2 className="mt-2 font-display text-base font-bold leading-snug text-foreground hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        {formatDate(article.publishedAt)}
                      </p>
                      <Link
                        to="/artikel/$slug"
                        params={{ slug: article.slug }}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        Baca →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
