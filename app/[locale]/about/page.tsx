import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AboutPreview from "@/components/AboutPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

type LocalizedAboutPageProps = {
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
}: LocalizedAboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const metadata = dictionary.aboutPage.metadata;

  return {
    title: metadata.title,
    description: metadata.description,

    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        fr: "/fr/about",
        mg: "/mg/about",
        "x-default": "/en/about",
      },
    },

    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: `/${locale}/about`,
      siteName: "Tanana Smart Base",
      title: metadata.title,
      description: metadata.description,
    },

    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function LocalizedAboutPage({
  params,
}: LocalizedAboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const basePath = `/${locale}`;
  const about = dictionary.aboutPage;
  const contact = dictionary.contact;

  return (
    <main className="bg-[#EAF1F6]">
      <section className="bg-[#0b3557] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            {about.hero.eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            {about.hero.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
            {about.hero.description}
          </p>
        </div>
      </section>

      <AboutPreview
        eyebrow={dictionary.homepage.about.eyebrow}
        title={dictionary.homepage.about.title}
        firstParagraph={dictionary.homepage.about.firstParagraph}
        secondParagraph={dictionary.homepage.about.secondParagraph}
        buttonLabel={dictionary.homepage.about.buttonLabel}
        buttonHref={`${basePath}/about`}
      />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-slate-900">
            {about.philosophy.title}
          </h2>

          {about.philosophy.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`text-lg leading-9 text-slate-700 ${
                index === 0 ? "mt-8" : "mt-6"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">
              {about.mission.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              {about.mission.description}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">
              {about.vision.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              {about.vision.description}
            </p>
          </div>
        </div>
      </section>

      <Contact
        eyebrow={contact.eyebrow}
        title={contact.title}
        description={contact.description}
        whatsappLabel={contact.whatsapp.label}
        whatsappDescription={contact.whatsapp.description}
        openWhatsAppLabel={contact.whatsapp.actionLabel}
        whatsappMessage={contact.whatsapp.message}
        phoneCopyLabel={contact.whatsapp.copyLabel}
        emailLabel={contact.email.label}
        emailDescription={contact.email.description}
        writeEmailLabel={contact.email.actionLabel}
        emailSubject={contact.email.subject}
        emailCopyLabel={contact.email.copyLabel}
        locationLabel={contact.location.label}
        directionsLabel={contact.location.actionLabel}
        directionsAriaLabel={contact.location.ariaLabel}
        formProps={{
          services: contact.form.services,
          eyebrow: contact.form.eyebrow,
          title: contact.form.title,
          description: contact.form.description,
          usefulInformationTitle: contact.form.usefulInformationTitle,
          usefulInformationDescription:
            contact.form.usefulInformationDescription,
          contactNotice: contact.form.contactNotice,
          fullNameLabel: contact.form.fullNameLabel,
          optionalLabel: contact.form.optionalLabel,
          fullNamePlaceholder: contact.form.fullNamePlaceholder,
          emailLabel: contact.form.emailLabel,
          emailPlaceholder: contact.form.emailPlaceholder,
          phoneLabel: contact.form.phoneLabel,
          phonePlaceholder: contact.form.phonePlaceholder,
          subjectLabel: contact.form.subjectLabel,
          subjectPlaceholder: contact.form.subjectPlaceholder,
          messageLabel: contact.form.messageLabel,
          messagePlaceholder: contact.form.messagePlaceholder,
          requirementNote: contact.form.requirementNote,
          sendingLabel: contact.form.sendingLabel,
          submitLabel: contact.form.submitLabel,
          successMessage: contact.form.successMessage,
          errorMessage: contact.form.errorMessage,
          honeypotLabel: contact.form.honeypotLabel,
        }}
      />

      <Footer
        basePath={basePath}
        description={dictionary.footer.description}
        navigationTitle={dictionary.footer.navigationTitle}
        disciplinesTitle={dictionary.footer.disciplinesTitle}
        companyInformationTitle={dictionary.footer.companyInformationTitle}
        registeredLocationLabel={dictionary.footer.registeredLocation}
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