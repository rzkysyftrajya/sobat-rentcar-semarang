import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { navigation, siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { waHref } from "@/lib/whatsapp";
import { WhatsappLink } from "@/components/shared/WhatsappLink";

export function Footer() {
  const activeServices = services.filter((s) => s.active);
  const year = new Date().getFullYear();
  const primaryWhatsappUrl = waHref({ kind: "general" });

  return (
    <footer className="section-navy-deep mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-extrabold tracking-tight text-navy-foreground">
              {siteConfig.shortName.toUpperCase().replace("RENTCAR", "").trim()}{" "}
              <span className="text-primary">RENTCAR</span>
            </p>
            <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-white/60">
              Semarang
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Layanan transportasi di Semarang dan sekitarnya untuk kebutuhan pribadi, keluarga,
              bisnis, dan wisata.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Navigasi
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Layanan
            </h2>
            <ul className="mt-4 space-y-2.5">
              {activeServices.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/layanan"
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Kontak
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {siteConfig.dataStatus.kontakTerverifikasi ? (
                <>
                  {siteConfig.whatsapp.primary && primaryWhatsappUrl && (
                    <li className="flex items-start gap-2.5">
                      <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                      <a
                        href={primaryWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-white"
                      >
                        {siteConfig.whatsapp.primary}
                        <span className="block text-xs text-white/50">
                          Admin 1 — {siteConfig.contacts.reservation[0].name}
                        </span>
                      </a>
                    </li>
                  )}
                  {siteConfig.whatsapp.backup && (
                    <li className="flex items-start gap-2.5">
                      <MessageCircle
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-primary"
                      />
                      <span>
                        {siteConfig.whatsapp.backup}
                        <span className="block text-xs text-white/50">
                          Admin 2 — {siteConfig.contacts.reservation[1].name}
                        </span>
                      </span>
                    </li>
                  )}
                  <li className="flex items-start gap-2.5">
                    <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="transition-colors hover:text-white"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{siteConfig.location}</span>
                  </li>
                </>
              ) : (
                <li>
                  <WhatsappLink context={{ kind: "general" }} variant="outline-light" size="sm">
                    Konsultasi melalui WhatsApp
                  </WhatsappLink>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.name}. Seluruh layanan dan ketersediaan kendaraan dikonfirmasi
            langsung melalui admin.
          </p>
        </div>
      </div>
    </footer>
  );
}
