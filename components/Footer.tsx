import Link from "next/link";

type FooterNavigationLabels = {
  about: string;
  services: string;
  whyChooseUs: string;
  projects: string;
  contact: string;
};

type FooterProps = {
  basePath?: string;
  description?: string;
  navigationTitle?: string;
  disciplinesTitle?: string;
  companyInformationTitle?: string;
  registeredLocationLabel?: string;
  rightsReserved?: string;
  privacyPolicyLabel?: string;
  termsLabel?: string;
  navigationLabels?: FooterNavigationLabels;
  disciplines?: string[];
};

const defaultNavigationLabels: FooterNavigationLabels = {
  about: "About",
  services: "Services",
  whyChooseUs: "Why Choose Us",
  projects: "Projects",
  contact: "Contact",
};

const defaultDisciplines = [
  "Energy & Electrical Systems",
  "Water & Hydraulic Infrastructure",
  "Smart Agricultural Systems",
  "Technical & Engineering Consulting",
];

export default function Footer({
  basePath = "",
  description = "Practical engineering solutions integrating energy, water, agriculture and technical infrastructure for stronger rural communities in Madagascar.",
  navigationTitle = "Navigation",
  disciplinesTitle = "Engineering Disciplines",
  companyInformationTitle = "Company Information",
  registeredLocationLabel = "Registered location",
  rightsReserved = "All rights reserved.",
  privacyPolicyLabel = "Privacy Policy",
  termsLabel = "Terms of Use",
  navigationLabels = defaultNavigationLabels,
  disciplines = defaultDisciplines,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  function getHref(path: string) {
    if (!basePath) {
      return path;
    }

    if (path === "/") {
      return basePath;
    }

    if (path.startsWith("/#")) {
      return `${basePath}${path.slice(1)}`;
    }

    return `${basePath}${path}`;
  }

  const navigation = [
    {
      name: navigationLabels.about,
      href: getHref("/about"),
    },
    {
      name: navigationLabels.services,
      href: getHref("/services"),
    },
    {
      name: navigationLabels.whyChooseUs,
      href: getHref("/#why-choose-us"),
    },
    {
      name: navigationLabels.projects,
      href: getHref("/projects"),
    },
    {
      name: navigationLabels.contact,
      href: getHref("/contact"),
    },
  ];

  return (
    <footer className="border-t border-sky-400/20 bg-[#020817] px-6 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_0.9fr]">
          <div>
            <Link
              href={getHref("/")}
              className="text-xl font-bold tracking-wide transition hover:text-sky-400"
            >
              TANANA SMART BASE
            </Link>

            <div className="mt-4 h-1 w-16 bg-sky-400" />

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              {description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              {navigationTitle}
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex text-slate-400 transition hover:translate-x-1 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              {disciplinesTitle}
            </h3>

            <ul className="mt-6 space-y-4">
              {disciplines.map((discipline) => (
                <li
                  key={discipline}
                  className="leading-6 text-slate-400 transition hover:text-white"
                >
                  {discipline}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              {companyInformationTitle}
            </h3>

            <div className="mt-6 space-y-5 text-sm text-slate-400">
              <div>
                <p className="font-semibold text-white">
                  {registeredLocationLabel}
                </p>

                <p className="mt-1 leading-6">
                  Maromoka Bas, Ambohimandroso
                  <br />
                  Antanifotsy, Madagascar
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">NIF</p>
                <p className="mt-1">3010953159</p>
              </div>

              <div>
                <p className="font-semibold text-white">STAT</p>
                <p className="mt-1">71102 12 2026 0 00690</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            {"\u00A9"} {currentYear} Tanana Smart Base. {rightsReserved}
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href={getHref("/privacy")}
              className="transition hover:text-slate-300"
            >
              {privacyPolicyLabel}
            </Link>

            <Link
              href={getHref("/terms")}
              className="transition hover:text-slate-300"
            >
              {termsLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}