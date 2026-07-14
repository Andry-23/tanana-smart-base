import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

type LocalizedContactPageProps = {
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
}: LocalizedContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const metadata = dictionary.contact.metadata;

  return {
    title: metadata.title,
    description: metadata.description,

    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: "/en/contact",
        fr: "/fr/contact",
        mg: "/mg/contact",
        "x-default": "/en/contact",
      },
    },

    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: `/${locale}/contact`,
      siteName: "Tanana Smart Base",
      title: metadata.title,
      description: metadata.description,
    },

    twitter: {
      card: "summary",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function LocalizedContactPage({
  params,
}: LocalizedContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const basePath = `/${locale}`;
  const contact = dictionary.contact;
  const form = contact.form;

  return (
    <main>
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
          services: form.services,

          eyebrow: form.eyebrow,
          title: form.title,
          description: form.description,

          usefulInformationTitle: form.usefulInformationTitle,
          usefulInformationDescription:
            form.usefulInformationDescription,

          contactNotice: form.contactNotice,

          fullNameLabel: form.fullNameLabel,
          optionalLabel: form.optionalLabel,
          fullNamePlaceholder: form.fullNamePlaceholder,

          emailLabel: form.emailLabel,
          emailPlaceholder: form.emailPlaceholder,

          phoneLabel: form.phoneLabel,
          phonePlaceholder: form.phonePlaceholder,

          subjectLabel: form.subjectLabel,
          subjectPlaceholder: form.subjectPlaceholder,

          messageLabel: form.messageLabel,
          messagePlaceholder: form.messagePlaceholder,

          requirementNote: form.requirementNote,

          sendingLabel: form.sendingLabel,
          submitLabel: form.submitLabel,

          successMessage: form.successMessage,
          errorMessage: form.errorMessage,

          honeypotLabel: form.honeypotLabel,
        }}
      />

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