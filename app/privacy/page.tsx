import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Tanana Smart Base collects, uses, protects and manages personal information submitted through its website.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Tanana Smart Base",
    description:
      "Information about how Tanana Smart Base manages personal data submitted through its website.",
    url: "/privacy",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Who We Are",
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
    title: "2. Information We Collect",
    content: (
      <>
        <p>
          When you use the contact form, you may provide the following
          information:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Your name, when provided</li>
          <li>Your email address, when provided</li>
          <li>Your telephone number, when provided</li>
          <li>The subject of your enquiry</li>
          <li>The content of your message</li>
        </ul>

        <p className="mt-4">
          Name, email address and telephone number are optional. The subject and
          message are required so that we can understand and process your
          enquiry.
        </p>

        <p className="mt-4">
          Hosting and security providers may also process limited technical
          information, such as IP address, browser type, request time and
          security-related logs.
        </p>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>Information submitted through the website may be used to:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Receive, review and respond to enquiries</li>
          <li>Provide information about our services and projects</li>
          <li>Prepare quotations or discuss potential work</li>
          <li>Maintain necessary business correspondence</li>
          <li>Protect the website against misuse, fraud and security threats</li>
          <li>Meet applicable legal or regulatory obligations</li>
        </ul>

        <p className="mt-4">
          We do not sell personal information submitted through this website.
        </p>
      </>
    ),
  },
  {
    title: "4. Legal Basis for Processing",
    content: (
      <p>
        We process personal information when you voluntarily submit an enquiry,
        when processing is necessary to take steps requested by you before a
        possible contract, when it supports a legitimate business interest that
        does not override your rights, or when processing is required by law.
      </p>
    ),
  },
  {
    title: "5. Service Providers and Data Transfers",
    content: (
      <>
        <p>
          The website uses third-party technical providers to operate securely
          and deliver contact-form messages. These currently include Cloudflare
          for website hosting and security services, and Resend for email
          delivery.
        </p>

        <p className="mt-4">
          These providers may process limited information outside Madagascar.
          We limit the information shared to what is reasonably necessary for
          the relevant service and seek to use providers that maintain
          appropriate privacy and security safeguards.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Retention",
    content: (
      <p>
        Personal information is retained only for as long as reasonably
        necessary to respond to an enquiry, manage related business
        correspondence, establish or defend legal rights, and satisfy
        applicable accounting, contractual or legal requirements. Information
        that is no longer required may be deleted or securely archived.
      </p>
    ),
  },
  {
    title: "7. Data Security",
    content: (
      <p>
        We take reasonable administrative and technical precautions to protect
        personal information against unauthorized access, disclosure,
        alteration, loss or destruction. However, no internet transmission or
        electronic storage system can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    title: "8. Your Rights",
    content: (
      <>
        <p>
          Subject to applicable law, you may request information about the
          personal data we hold about you and ask us to:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Provide access to your personal information</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Delete information that should no longer be retained</li>
          <li>Stop or object to certain processing</li>
        </ul>

        <p className="mt-4">
          Requests may be sent to{" "}
          <a
            href="mailto:info@tananasmartbase.com"
            className="font-medium text-sky-700 transition hover:text-sky-500"
          >
            info@tananasmartbase.com
          </a>
          . We may request reasonable information to confirm your identity
          before acting on a request.
        </p>
      </>
    ),
  },
  {
    title: "9. Cookies and Similar Technologies",
    content: (
      <p>
        Tanana Smart Base does not currently use advertising cookies or
        behavioral profiling on this website. Essential hosting, performance
        and security technologies may be used by the website infrastructure to
        deliver pages and protect the service.
      </p>
    ),
  },
  {
    title: "10. External Links",
    content: (
      <p>
        The website may contain links to third-party websites or services.
        Tanana Smart Base is not responsible for the privacy practices,
        security or content of external websites.
      </p>
    ),
  },
  {
    title: "11. Changes to This Policy",
    content: (
      <p>
        This Privacy Policy may be updated when the website, our services or
        applicable legal requirements change. The latest version will be
        published on this page with its revision date.
      </p>
    ),
  },
  {
    title: "12. Contact",
    content: (
      <p>
        Questions or requests concerning this Privacy Policy may be sent to{" "}
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

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This policy explains how Tanana Smart Base collects, uses and
            protects information submitted through this website.
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
            This policy provides general information about the website&apos;s
            current data-handling practices and does not constitute independent
            legal advice.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}