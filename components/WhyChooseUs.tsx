export type ReasonItem = {
  number: string;
  title: string;
  description: string;
};

const defaultReasons: ReasonItem[] = [
  {
    number: "01",
    title: "Engineering-Led Thinking",
    description:
      "We approach each project through structured engineering logic: defining the problem, sizing the system, selecting suitable materials and equipment, reviewing costs, and planning implementation. This reduces guesswork and improves reliability from the outset.",
  },
  {
    number: "02",
    title: "Built for Field Reality",
    description:
      "Our designs account for the practical constraints of rural environments, including limited infrastructure, difficult transport, variable site conditions, and the need for simple, robust, and maintainable systems that can perform over time.",
  },
  {
    number: "03",
    title: "Cost-Conscious Performance",
    description:
      "We balance technical quality, durability, and affordability. The objective is not only to make a system work, but to ensure that it is economically realistic to build, operate, and maintain.",
  },
  {
    number: "04",
    title: "Integrated Infrastructure Vision",
    description:
      "Energy, water, agricultural support, and structural systems should not be designed in isolation. We develop coordinated solutions so that each part of the infrastructure supports the others in a coherent and efficient way.",
  },
];

type WhyChooseUsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  reasons?: ReasonItem[];
};

export default function WhyChooseUs({
  eyebrow = "Why Choose Us",
  title = "Why Choose Tanana Smart Base",
  description = "Engineering precision. Practical solutions. Long-term impact.",
  reasons = defaultReasons,
}: WhyChooseUsProps) {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#CCDDEB] px-6 py-20 text-slate-900 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-lg text-slate-700">
            {description}
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-24 bg-sky-500" />
            <div className="h-2 w-2 rounded-full bg-sky-500" />
          </div>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/55 p-8 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-sky-300 hover:bg-white/85 hover:shadow-[0_24px_60px_rgba(14,165,233,0.18)] md:p-9"
            >
              <span className="pointer-events-none absolute right-5 top-1 text-7xl font-black text-sky-500/[0.07] transition duration-500 group-hover:scale-110 group-hover:text-sky-500/[0.12] md:text-8xl">
                {reason.number}
              </span>

              <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 translate-x-12 -translate-y-12 rounded-full bg-sky-400/10 transition duration-500 group-hover:scale-150 group-hover:bg-sky-400/20" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-300/60 bg-sky-400/10 text-sm font-bold text-sky-700 transition duration-300 group-hover:border-sky-400 group-hover:bg-sky-500 group-hover:text-white">
                    {reason.number}
                  </span>

                  <h3 className="text-2xl font-bold leading-snug text-slate-950">
                    {reason.title}
                  </h3>
                </div>

                <div className="mt-5 h-1 w-16 bg-sky-400 transition-all duration-500 group-hover:w-28" />

                <p className="mt-6 leading-7 text-slate-600">
                  {reason.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}