import type { Metadata } from "next";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Tanana Smart Base",
  description:
    "Contact Tanana Smart Base about engineering services, project ideas, technical requirements and collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <Footer />
    </main>
  );
}