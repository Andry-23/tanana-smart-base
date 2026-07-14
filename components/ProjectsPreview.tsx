import Link from "next/link";

export type ProjectPreviewItem = {
  number: string;
  category: string;
  status: string;
  title: string;
  description: string;
  href: string;
};

const defaultProjects: ProjectPreviewItem[] = [
  {
    number: "01",
    category: "Integrated Rural Infrastructure",
    status: "In Development",
    title: "Ambohimandroso Smart Rural Base",
    description:
      "Development of an integrated rural site combining off-grid energy, water infrastructure, agricultural activities, workshop facilities and practical technical services. The project serves as a working base for testing and implementing locally adapted engineering solutions.",
    href: "/projects/ambohimandroso-smart-rural-base",
  },
  {
    number: "02",
    category: "Energy & Electrical Engineering",
    status: "Operational / Expanding",
    title: "Off-Grid Energy & Electrical System",
    description:
      "Design and implementation of a reliable electrical system combining solar generation, battery storage, power distribution, protection, lighting and equipment supply for productive rural activities and workshop operations.",
    href: "/projects/off-grid-energy-electrical-system",
  },
  {
    number: "03",
    category: "Water & Hydraulic Infrastructure",
    status: "Planned",
    title: "Water Pumping, Storage & Distribution System",
    description:
      "Development of a complete water system covering the water source, pumping equipment, storage, pipelines, distribution points, controls and supporting infrastructure for agricultural and general site requirements.",
    href: "/projects/water-pumping-storage-distribution",
  },
  {
    number: "04",
    category: "Agricultural Systems",
    status: "In Development",
    title: "Smart Small-Farm & Livestock Infrastructure",
    description:
      "Development of practical infrastructure for small-scale farming and livestock production, integrating water, energy, housing, feeding systems, storage, monitoring and supporting equipment to improve productivity and operational efficiency.",
    href: "/projects/smart-farm-livestock-infrastructure",
  },
];

type ProjectsPreviewProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  projects?: ProjectPreviewItem[];
  viewProjectLabel?: string;
  allProjectsLabel?: string;
  allProjectsHref?: string;
};

export default function ProjectsPreview({
  eyebrow = "Projects & Initiatives",
  title = "Engineering ideas developed into practical systems",
  description = "Explore selected Tanana Smart Base projects and initiatives combining energy, water, agriculture and technical infrastructure. Each project is developed around real operating needs, local conditions and long-term maintainability.",
  projects = defaultProjects,
  viewProjectLabel = "View project",
  allProjectsLabel = "View All Projects",
  allProjectsHref = "/projects",
}: ProjectsPreviewProps) {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
              {eyebrow}
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              {title}
            </h2>

            <div className="mt-6 h-1 w-24 bg-sky-400" />
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-2xl md:p-9"
            >
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-12 -translate-y-12 rounded-full bg-sky-400/10 transition duration-300 group-hover:scale-150" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm font-bold tracking-[0.18em] text-sky-400">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                    {project.status}
                  </span>
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {project.category}
                </p>

                <h3 className="mt-3 max-w-xl text-2xl font-bold leading-snug text-white md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-sky-400 transition hover:text-sky-300"
                >
                  {viewProjectLabel}

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href={allProjectsHref}
            className="group inline-flex items-center gap-3 rounded-md bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
          >
            {allProjectsLabel}

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}