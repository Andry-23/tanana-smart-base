import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing access to and use of the Tanana Smart Base website.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | Tanana Smart Base",
    description:
      "Terms governing access to and use of the Tanana Smart Base website.",
    url: "/terms",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Acceptance of These Terms",
    content: (
      <p>
        By accessing or using this website, you agree to these Terms of Use. If
        you do not agree with them, please discontinue use of the website.
      </p>
    ),
  },
  {
    title: "2. About Tanana Smart Base",
    content: (
      <>
        <p>
          Tanana Smart Base is an engineering and technical services business
          based in Madagascar.
        </p>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p>
            <strong className="text-slate-900">Registered address:</strong>{" "}
            Maromoka Bas, Ambohimandroso, Antanifotsy, Madagascar
          </p>

          <p className="mt-2">
            <strong className="text-slate-900">NIF:</strong> 3010953159
          </p>

          <p className="mt-2">
            <strong className="text-slate-900">STAT:</strong> 71102 12 2026 0
            00690
          </p>

          <p className="mt-2">
            <strong className="text-slate-900">Email:</strong>{" "}
            <a
              href="mailto:info@tananasmartbase.com"
              className="text-sky-700 transition hover:text-sky-500"
            >
              info@tananasmartbase.com
            </a>
          </p>

          <p className="mt-2">
            <strong className="text-slate-900">Telephone:</strong>{" "}
            <a
              href="tel:+261325815100"
              className="text-sky-700 transition hover:text-sky-500"
            >
              +261 32 58 151 00
            </a>
          </p>
        </div>
      </>
    ),
  },
  {
    title: "3. Website Purpose",
    content: (
      <>
        <p>
          This website provides general information about Tanana Smart Base,
          its areas of expertise, services, projects and contact details.
        </p>

        <p className="mt-4">
          Website content is provided for general informational purposes. It
          does not constitute a binding engineering proposal, quotation,
          technical specification, professional certification or contractual
          commitment.
        </p>
      </>
    ),
  },
  {
    title: "4. Enquiries, Quotations and Contracts",
    content: (
      <>
        <p>
          Sending a message through the contact form does not automatically
          create a contract, partnership, employment relationship or obligation
          for Tanana Smart Base to provide services.
        </p>

        <p className="mt-4">
          Any project scope, price, schedule, deliverable, warranty or technical
          responsibility must be confirmed separately through an approved
          quotation, purchase order, service agreement or other written
          contract.
        </p>

        <p className="mt-4">
          Preliminary discussions, estimates and proposals may be revised after
          site inspections, engineering assessments, supplier confirmation or
          clarification of the client&apos;s requirements.
        </p>
      </>
    ),
  },
  {
    title: "5. Accuracy of Information",
    content: (
      <>
        <p>
          Tanana Smart Base seeks to keep website information accurate and
          current. However, information may occasionally be incomplete,
          outdated or affected by technical errors.
        </p>

        <p className="mt-4">
          We may update, correct, remove or reorganize website content without
          prior notice.
        </p>
      </>
    ),
  },
  {
    title: "6. Professional and Technical Information",
    content: (
      <>
        <p>
          Engineering, energy, water, agricultural and technical information
          displayed on this website is general in nature and must not be relied
          upon as a substitute for a project-specific assessment.
        </p>

        <p className="mt-4">
          Final technical decisions should consider actual site conditions,
          applicable standards, operating requirements, safety risks,
          environmental conditions and relevant legal or regulatory
          obligations.
        </p>
      </>
    ),
  },
  {
    title: "7. Acceptable Use",
    content: (
      <>
        <p>You agree not to use this website to:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Violate applicable laws or the rights of another person</li>
          <li>Submit fraudulent, misleading, threatening or unlawful content</li>
          <li>Attempt to gain unauthorized access to website systems</li>
          <li>Introduce malware, harmful code or automated attacks</li>
          <li>Interfere with the website&apos;s operation or security</li>
          <li>Collect information from the website through abusive automation</li>
          <li>Impersonate another person, company or organization</li>
        </ul>

        <p className="mt-4">
          Access may be restricted or blocked where misuse or a security threat
          is detected.
        </p>
      </>
    ),
  },
  {
    title: "8. Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise stated, the website&apos;s original text, branding,
          graphics, layouts, technical illustrations and other original
          materials belong to Tanana Smart Base or are used with appropriate
          authorization.
        </p>

        <p className="mt-4">
          You may view and print reasonable portions of the website for
          personal, informational or internal business use. You may not copy,
          republish, sell, modify or commercially exploit substantial portions
          of the website without prior written permission.
        </p>

        <p className="mt-4">
          Third-party names, trademarks, photographs and materials remain the
          property of their respective owners.
        </p>
      </>
    ),
  },
  {
    title: "9. External Links",
    content: (
      <p>
        The website may contain links to third-party websites, maps, messaging
        services or other external platforms. These links are provided for
        convenience. Tanana Smart Base does not control and is not responsible
        for the availability, content, security or practices of third-party
        services.
      </p>
    ),
  },
  {
    title: "10. Website Availability and Security",
    content: (
      <>
        <p>
          We aim to keep the website accessible and secure, but uninterrupted or
          error-free operation cannot be guaranteed.
        </p>

        <p className="mt-4">
          Access may be temporarily suspended for maintenance, upgrades,
          security protection, hosting problems or circumstances beyond our
          reasonable control.
        </p>
      </>
    ),
  },
  {
    title: "11. Limitation of Responsibility",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Tanana Smart Base is not
          responsible for losses resulting solely from reliance on general
          website information, temporary website unavailability, unauthorized
          third-party interference or external websites.
        </p>

        <p className="mt-4">
          Nothing in these Terms excludes or limits responsibility that cannot
          lawfully be excluded or limited.
        </p>

        <p className="mt-4">
          Responsibilities arising from an actual engineering or service project
          will be governed by the applicable quotation, purchase order,
          contract and mandatory law.
        </p>
      </>
    ),
  },
  {
    title: "12. Privacy",
    content: (
      <p>
        Information submitted through the website is handled in accordance with
        our{" "}
        <Link
          href="/privacy"
          className="font-medium text-sky-700 transition hover:text-sky-500"
        >
          Privacy Policy
        </Link>
        .
      </p>
    ),
  },
  {
    title: "13. Changes to These Terms",
    content: (
      <p>
        These Terms may be updated when the website, our services or applicable
        requirements change. The revised version will be published on this page
        with an updated revision date. Continued use of the website following an
        update constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    title: "14. Governing Law",
    content: (
      <p>
        These Terms and the use of this website are governed by the applicable
        laws of the Republic of Madagascar. Any dispute should first be
        addressed through good-faith discussion before other remedies available
        under applicable law are pursued.
      </p>
    ),
  },
  {
    title: "15. Contact",
    content: (
      <p>
        Questions concerning these Terms may be sent to{" "}
        <a
          href="mailto:info@tananasmartbase.com"
          className="font-medium text-sky-700 transition hover:text-sky-500"
        >
          info@tananasmartbase.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
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
            Legal Information
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Terms of Use
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            These Terms explain the conditions governing access to and use of
            the Tanana Smart Base website.
          </p>

          <p className="mt-6 text-sm text-slate-400">
            Last updated: 13 July 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-8">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/80 bg-white/80 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur md:p-10"
            >
              <h2 className="text-2xl font-bold text-slate-950">
                {section.title}
              </h2>

              <div className="mt-5 leading-7 text-slate-600">
                {section.content}
              </div>
            </article>
          ))}

          <p className="px-2 text-sm leading-6 text-slate-500">
            These Terms provide general website-use conditions. Project-specific
            rights and obligations must be defined through an appropriate
            written agreement.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}