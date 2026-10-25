import { WhatsappLink } from "@/components/shared/WhatsappLink";
import type { WaContext } from "@/lib/whatsapp";

/** Pita CTA penutup pada setiap halaman. */
export function CtaBand({
  title,
  description,
  context = { kind: "general" },
}: {
  title: string;
  description: string;
  context?: WaContext;
}) {
  return (
    <section className="section-navy relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-40 -z-10 size-[30rem] rounded-full border border-brand-gold/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-24 -z-10 size-[22rem] rounded-full border border-brand-gold/10"
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
            Sobat RentCar Semarang
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-navy-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            {description}
          </p>
        </div>
        <div className="flex md:justify-end">
          <WhatsappLink context={context} size="xl" variant="cta">
            Konsultasi via WhatsApp
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
}
