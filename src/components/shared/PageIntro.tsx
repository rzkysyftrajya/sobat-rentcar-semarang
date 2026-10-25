import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/shared/Breadcrumbs";

export function PageIntro({
  items,
  eyebrow,
  title,
  description,
  note,
}: {
  items: Crumb[];
  eyebrow: string;
  title: string;
  description: string;
  note?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-[#f4f1eb]">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6 sm:pb-16 sm:pt-9 lg:pb-20">
        <Breadcrumbs items={items} />
        <div className="mt-6 grid gap-4 border-t border-border/90 pt-5 sm:mt-10 sm:gap-6 sm:pt-8 md:mt-14 md:grid-cols-[1.25fr_0.55fr] md:items-end md:gap-12 md:pt-10">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-gold sm:text-xs sm:tracking-[0.24em]">
              {eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:mt-4 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
          <p className="max-w-lg text-sm leading-6 text-muted-foreground sm:leading-7 md:justify-self-end md:text-base">
            {description}
          </p>
        </div>
        {note && (
          <div className="mt-5 max-w-3xl border-l-2 border-brand-gold pl-3 text-xs leading-5 text-muted-foreground sm:ml-auto sm:mt-9 sm:pl-4 sm:text-sm sm:leading-6">
            {note}
          </div>
        )}
      </div>
    </section>
  );
}
