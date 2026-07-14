import type { Metadata } from "next";
import { notFound } from "next/navigation";

import "../globals.css";

import Header from "@/components/Header";
import { isLocale, locales } from "@/lib/i18n";

const siteUrl = "https://tananasmartbase.com";

const siteDescription =
  "Tanana Smart Base delivers practical engineering and infrastructure solutions in Madagascar for energy, water, agriculture and technical consulting.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tanana Smart Base | Engineering Solutions in Madagascar",
    template: "%s | Tanana Smart Base",
  },

  description: siteDescription,

  applicationName: "Tanana Smart Base",

  creator: "Tanana Smart Base",
  publisher: "Tanana Smart Base",

  category: "Engineering and Infrastructure",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,

  name: "Tanana Smart Base",
  url: siteUrl,

  description: siteDescription,

  email: "mailto:info@tananasmartbase.com",
  telephone: "+261325815100",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Maromoka Bas",
    addressLocality: "Ambohimandroso",
    addressRegion: "Antanifotsy",
    addressCountry: "MG",
  },

  location: {
    "@type": "Place",
    name: "Tanana Smart Base",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Maromoka Bas",
      addressLocality: "Ambohimandroso",
      addressRegion: "Antanifotsy",
      addressCountry: "MG",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.540675091046943,
      longitude: 47.41657887864126,
    },
  },

  areaServed: {
    "@type": "Country",
    name: "Madagascar",
  },

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+261325815100",
    email: "info@tananasmartbase.com",
    contactType: "customer service",
    areaServed: "MG",
    availableLanguage: ["English", "French", "Malagasy"],
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <Header />

        {children}
      </body>
    </html>
  );
}