import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; path?: string };

/** Breadcrumb visual untuk halaman dalam (Armada, Layanan, Artikel, dst). */
export function Breadcrumbs({ items, inverted = false }: { items: Crumb[]; inverted?: boolean }) {
  const muted = inverted ? "text-white/65" : "text-muted-foreground";
  const foreground = inverted ? "text-white" : "text-foreground";

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className={`flex flex-wrap items-center gap-1.5 ${muted}`}>
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors ${
              inverted ? "hover:text-white" : "hover:text-foreground"
            }`}
          >
            <Home aria-hidden="true" className="size-3.5" />
            <span>Beranda</span>
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight
                aria-hidden="true"
                className={`size-3.5 ${inverted ? "text-white/35" : "text-muted-foreground/60"}`}
              />
              {item.path && !isLast ? (
                <Link to={item.path} className="hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? `font-medium ${foreground}` : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
