import { createFileRoute, Link } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { WhatsappLink } from "@/components/shared/WhatsappLink";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { articles, formatDate, getArticleBySlug, getRelatedArticles } from "@/data/articles";

export const Route = createFileRoute("/artikel/$slug")({
  head: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    const title = article
      ? `${article.title} | ${siteConfig.name}`
      : `Artikel | ${siteConfig.name}`;
    const description = article?.excerpt ?? "Panduan umum transportasi dan perjalanan di Semarang.";
    const canonicalUrl = article
      ? new URL(`/artikel/${article.slug}`, siteConfig.domain).href
      : new URL("/artikel", siteConfig.domain).href;
    const imageUrl = article
      ? new URL(article.coverImage, siteConfig.domain).href
      : new URL("/favicon.ico", siteConfig.domain).href;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "article" },
        { property: "og:image", content: imageUrl },
        { property: "og:site_name", content: siteConfig.name },
        { property: "article:published_time", content: article?.publishedAt ?? "" },
        {
          property: "article:modified_time",
          content: article?.updatedAt ?? article?.publishedAt ?? "",
        },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },
  component: ArticleDetailPage,
});

function ArticleDetailPage() {
  const { slug } = Route.useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">Artikel tidak tersedia</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Artikel yang Anda tuju belum tersedia atau telah dipindahkan.
        </p>
        <Link
          to="/artikel"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Kembali ke daftar artikel
        </Link>
      </div>
    );
  }

  const related = getRelatedArticles(article, 2);
  const canonicalUrl = new URL(`/artikel/${article.slug}`, siteConfig.domain).href;
  const imageUrl = new URL(article.coverImage, siteConfig.domain).href;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [imageUrl],
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: new URL("/favicon.ico", siteConfig.domain).href,
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumbs items={[{ label: "Artikel", path: "/artikel" }, { label: article.title }]} />

      <article className="py-8 sm:py-12">
        {/* Cover image */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_70px_-48px_rgba(32,29,23,0.5)]">
          <img
            src={article.coverImage}
            alt={article.coverImageAlt}
            className="aspect-[16/9] w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Article header */}
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
            {article.category}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4 text-sm text-muted-foreground">
            {article.author && <span>Oleh {article.author}</span>}
            <span>{formatDate(article.publishedAt)}</span>
            {article.updatedAt && (
              <span className="text-xs">Diperbarui {formatDate(article.updatedAt)}</span>
            )}
          </div>
        </div>

        {/* Article content */}
        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-foreground/90 sm:text-lg">
          {article.content.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={`${article.slug}-heading-${index}`}
                  className="mt-10 font-display text-2xl font-bold text-foreground"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "ul") {
              return (
                <ul
                  key={`${article.slug}-list-${index}`}
                  className="list-disc space-y-2 pl-5 text-muted-foreground"
                >
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={`${article.slug}-paragraph-${index}`} className="text-muted-foreground">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Article CTA */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border bg-secondary/40 p-6 text-center">
          <p className="text-sm font-semibold text-foreground">
            Butuh bantuan merencanakan perjalanan?
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Konsultasikan kebutuhan transportasi Anda langsung melalui WhatsApp.
          </p>
          <WhatsappLink context={{ kind: "general" }} variant="cta" size="default" className="mt-4">
            Konsultasi via WhatsApp
          </WhatsappLink>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="mt-8 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold text-foreground">Artikel terkait</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {related.map((relatedArticle) => (
              <Card key={relatedArticle.slug} className="overflow-hidden">
                <Link
                  to="/artikel/$slug"
                  params={{ slug: relatedArticle.slug }}
                  className="block overflow-hidden"
                >
                  <img
                    src={relatedArticle.coverImage}
                    alt={relatedArticle.coverImageAlt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <CardContent className="space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {relatedArticle.category}
                  </p>
                  <Link
                    to="/artikel/$slug"
                    params={{ slug: relatedArticle.slug }}
                    className="block text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {relatedArticle.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">{relatedArticle.excerpt}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(relatedArticle.publishedAt)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="mt-10">
        <Link
          to="/artikel"
          className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          ← Kembali ke semua artikel
        </Link>
      </div>
    </div>
  );
}
