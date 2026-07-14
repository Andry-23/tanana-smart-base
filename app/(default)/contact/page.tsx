import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const contactDescription =
  "Contact Tanana Smart Base about engineering services, project ideas, technical requirements and collaboration opportunities in Madagascar.";

export const metadata: Metadata = {
  title: "Contact",

  description: contactDescription,

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/contact",
    siteName: "Tanana Smart Base",
    title: "Contact | Tanana Smart Base",
    description: contactDescription,
  },

  twitter: {
    card: "summary",
    title: "Contact | Tanana Smart Base",
    description: contactDescription,
  },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <Footer />
    </main>
  );
}