import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

type LocalizedPrivacyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  mg: "mg_MG",
};

export async function generateMetadata({
  params,
}: LocalizedPrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const metadata = dictionary.privacyPage.metadata;

  return {
    title: metadata.title,
    description: metadata.description,

    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        en: "/en/privacy",
        fr: "/fr/privacy",
        mg: "/mg/privacy",
        "x-default": "/en/privacy",
      },
    },

    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: `/${locale}/privacy`,
      siteName: "Tanana Smart Base",
      title: metadata.title,
      description: metadata.openGraphDescription,
    },

    twitter: {
      card: "summary",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function LocalizedPrivacyPage({
  params,
}: LocalizedPrivacyPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const basePath = `/${locale}`;
  const privacyPage = dictionary.privacyPage;

  return (
    <main className="bg-[#EAF1F6] text-slate-900">
      <section className="relative overflow-hidden bg-[#020817] px-6 py-20 text-white md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />

        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
            {privacyPage.hero.eyebrow}
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            {privacyPage.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {privacyPage.hero.description}
          </p>

          <p className="mt-6 text-sm text-slate-400">
            {privacyPage.hero.lastUpdatedLabel}:{" "}
            {privacyPage.hero.lastUpdatedDate}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-8">
          {privacyPage.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/80 bg-white/80 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur md:p-10"
            >
              <h2 className="text-2xl font-bold text-slate-950">
                {section.title}
              </h2>

              <div className="mt-5 leading-7 text-slate-600">
                {section.intro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="[&:not(:first-child)]:mt-4"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.details.length > 0 && (
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    {section.details.map((detail) => (
                      <p
                        key={`${detail.label}-${detail.value}`}
                        className="[&:not(:first-child)]:mt-2"
                      >
                        <strong className="text-slate-900">
                          {detail.label}:
                        </strong>{" "}
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sky-700 transition hover:text-sky-500"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </p>
                    ))}
                  </div>
                )}

                {section.items.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.outro.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <p className="px-2 text-sm leading-6 text-slate-500">
            {privacyPage.disclaimer}
          </p>
        </div>
      </section>

      <Footer
        basePath={basePath}
        description={dictionary.footer.description}
        navigationTitle={dictionary.footer.navigationTitle}
        disciplinesTitle={dictionary.footer.disciplinesTitle}
        companyInformationTitle={
          dictionary.footer.companyInformationTitle
        }
        registeredLocationLabel={
          dictionary.footer.registeredLocation
        }
        rightsReserved={dictionary.footer.rightsReserved}
        privacyPolicyLabel={dictionary.footer.privacyPolicy}
        termsLabel={dictionary.footer.termsOfUse}
        navigationLabels={{
          about: dictionary.navigation.about,
          services: dictionary.navigation.services,
          whyChooseUs: dictionary.navigation.whyChooseUs,
          projects: dictionary.navigation.projects,
          contact: dictionary.navigation.contact,
        }}
        disciplines={[
          dictionary.footer.disciplines.energy,
          dictionary.footer.disciplines.water,
          dictionary.footer.disciplines.agriculture,
          dictionary.footer.disciplines.consulting,
        ]}
      />
    </main>
  );
}