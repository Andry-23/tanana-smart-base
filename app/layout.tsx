import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Tanana Smart Base",
    title: "Tanana Smart Base | Engineering Solutions in Madagascar",
    description: siteDescription,
  },

  twitter: {
    card: "summary",
    title: "Tanana Smart Base | Engineering Solutions in Madagascar",
    description: siteDescription,
  },

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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