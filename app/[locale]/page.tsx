import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AboutPreview from "@/components/AboutPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

type LocalizedHomePageProps = {
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
}: LocalizedHomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.homepage.metadata.title,
    description: dictionary.homepage.metadata.description,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        mg: "/mg",
        "x-default": "/en",
      },
    },

    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: `/${locale}`,
      title: dictionary.homepage.metadata.title,
      description: dictionary.homepage.metadata.description,
    },

    twitter: {
      card: "summary",
      title: dictionary.homepage.metadata.title,
      description: dictionary.homepage.metadata.description,
    },
  };
}

export default async function LocalizedHomePage({
  params,
}: LocalizedHomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const basePath = `/${locale}`;

  const localizedProjects = dictionary.homepage.projects.items.map(
    (project) => ({
      ...project,
      href: `${basePath}${project.href}`,
    }),
  );

  return (
    <main>
      <Hero
        eyebrow={dictionary.homepage.hero.eyebrow}
        title={dictionary.homepage.hero.title}
        description={dictionary.homepage.hero.description}
        primaryLabel={dictionary.homepage.hero.primaryLabel}
        primaryHref={`${basePath}/services`}
        secondaryLabel={dictionary.homepage.hero.secondaryLabel}
        secondaryHref={`${basePath}/contact`}
      />

      <AboutPreview
        eyebrow={dictionary.homepage.about.eyebrow}
        title={dictionary.homepage.about.title}
        firstParagraph={dictionary.homepage.about.firstParagraph}
        secondParagraph={dictionary.homepage.about.secondParagraph}
        buttonLabel={dictionary.homepage.about.buttonLabel}
        buttonHref={`${basePath}/about`}
      />

      <ServicesPreview
        eyebrow={dictionary.homepage.services.eyebrow}
        title={dictionary.homepage.services.title}
        services={dictionary.homepage.services.items}
        disciplineLabel={dictionary.homepage.services.disciplineLabel}
        buttonLabel={dictionary.homepage.services.buttonLabel}
        buttonHref={`${basePath}/services`}
      />

      <WhyChooseUs
        eyebrow={dictionary.homepage.whyChooseUs.eyebrow}
        title={dictionary.homepage.whyChooseUs.title}
        description={dictionary.homepage.whyChooseUs.description}
        reasons={dictionary.homepage.whyChooseUs.reasons}
      />

      <ProjectsPreview
        eyebrow={dictionary.homepage.projects.eyebrow}
        title={dictionary.homepage.projects.title}
        description={dictionary.homepage.projects.description}
        projects={localizedProjects}
        viewProjectLabel={dictionary.homepage.projects.viewProjectLabel}
        allProjectsLabel={dictionary.homepage.projects.allProjectsLabel}
        allProjectsHref={`${basePath}/projects`}
      />

      <CallToAction
        eyebrow={dictionary.homepage.callToAction.eyebrow}
        title={dictionary.homepage.callToAction.title}
        description={dictionary.homepage.callToAction.description}
        buttonLabel={dictionary.homepage.callToAction.buttonLabel}
        buttonHref={`${basePath}/contact`}
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