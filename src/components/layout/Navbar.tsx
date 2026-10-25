import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import sobatRentcarLogo from "@/assets/brand/sobat-rentcar-logo.png";
import { navigation, siteConfig } from "@/config/site";
import { WhatsappLink } from "@/components/shared/WhatsappLink";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const isActive = (path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 shadow-[0_8px_30px_-24px_rgba(18,23,35,0.35)] backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link
          to="/"
          onClick={(event) => {
            if (
              pathname === "/" &&
              event.button === 0 &&
              !event.metaKey &&
              !event.ctrlKey &&
              !event.shiftKey &&
              !event.altKey
            ) {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex shrink-0 items-center rounded-xl bg-white px-2 py-1 shadow-sm ring-1 ring-border/80 transition-shadow hover:shadow-md"
          aria-label={siteConfig.name}
        >
          <img src={sobatRentcarLogo} alt="" className="h-12 w-32 object-contain" />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative rounded-md px-3 py-2 text-[0.8rem] font-semibold tracking-wide transition-colors after:absolute after:inset-x-3 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand-gold after:transition-transform",
                isActive(item.path)
                  ? "text-primary after:scale-x-100"
                  : "text-foreground hover:text-primary hover:after:scale-x-100",
              )}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsappLink
            context={{ kind: "general" }}
            variant="cta"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Konsultasi via WhatsApp
          </WhatsappLink>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-accent lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Panel navigasi mobile */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "grid bg-background transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border">
            <nav aria-label="Navigasi utama mobile" className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
              <ul className="flex flex-col">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base font-semibold",
                        isActive(item.path) ? "text-primary" : "text-foreground hover:bg-accent",
                      )}
                      aria-current={isActive(item.path) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex flex-col gap-2 pb-3">
                <WhatsappLink
                  context={{ kind: "general" }}
                  variant="cta"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  Konsultasi via WhatsApp
                </WhatsappLink>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-input px-4 py-2 text-sm font-medium text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  <X aria-hidden="true" className="size-4" />
                  Tutup menu
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
