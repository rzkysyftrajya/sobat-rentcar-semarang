import { siteConfig } from "@/config/site";

const companyDetails = [
  { label: "Nama perusahaan", value: siteConfig.company.legalName },
  { label: "Nomor Induk Berusaha (NIB)", value: siteConfig.company.nib },
  { label: "SK Kemenkumham", value: siteConfig.company.ministryDecree },
  { label: "NPWP", value: siteConfig.company.taxNumber },
  { label: "Alamat usaha", value: siteConfig.location },
];

export function CompanyProfile() {
  return (
    <section className="section-soft" aria-labelledby="profil-perusahaan-heading">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
            Profil perusahaan
          </p>
          <h2
            id="profil-perusahaan-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Profil & legalitas perusahaan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Kenali identitas dan informasi legal CV. Sobat Transport, perusahaan di balik layanan
            Sobat RentCar Semarang.
          </p>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companyDetails.map((detail) => (
            <div key={detail.label} className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {detail.label}
              </dt>
              <dd className="mt-2 break-words font-semibold leading-relaxed text-foreground">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
