import TopNav from "@/components/top-nav";

const principles = [
  {
    title: "Simplicity",
    desc: "Apple-like clarity; one design language across every brand.",
  },
  {
    title: "Shared infrastructure",
    desc: "Single design system, data layer and growth engine—no rework.",
  },
  {
    title: "Fast iteration",
    desc: "Prototype, test, learn cycles run weekly in every vertical.",
  },
];

const highlights = [
  { label: "Subsidiaries", value: "5", note: "All under UDK" },
  { label: "Verticals", value: "Mobile · Games · B2B · Commerce", note: "One backbone" },
  { label: "Platform", value: "Design + Data + Growth", note: "Shared core" },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--fg-strong)]">
      <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/25" />
        <div className="absolute right-[10%] top-[-5%] h-80 w-80 rounded-full bg-purple-500/20" />
        <div className="absolute bottom-[8%] right-[-12%] h-96 w-96 rounded-full bg-pink-500/16" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-16 pt-14 md:px-10 lg:px-12 lg:pt-20">
        <TopNav />

        <header className="grid-lines glass rounded-3xl border border-white/10 px-6 py-10 md:px-10 md:py-14">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
            <span className="glass rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--accent-text)]">
              About
            </span>
            <span className="h-1 w-1 rounded-full bg-cyan-300" />
            <span>UDK Digital</span>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.8fr,1fr] md:items-end">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-[var(--fg-strong)] sm:text-5xl">
                One backbone, one culture.
              </h1>
              <p className="max-w-2xl text-lg text-[var(--muted)]">
                At UDK Digital, we are a forward-thinking company driven by innovation,
                creativity, and a bold vision for the future. Unbound by a single industry,
                we explore diverse fields with a multidisciplinary mindset—turning ideas
                into meaningful impact.
              </p>
            </div>
            <div className="glass neon-border rounded-3xl p-6 text-sm text-[var(--muted)] shadow-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-text)]">
                Manifesto
              </p>
              <p className="mt-3 text-sm text-[var(--fg-strong)] opacity-90">
                One backbone, zero friction: a single design system, data layer and growth
                engine so every idea ships earlier, cheaper and with repeatable quality.
              </p>
            </div>
          </div>
        </header>

        <section className="grid-lines glass rounded-3xl border border-white/10 px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="glass rounded-2xl border border-white/10 p-4">
                <p className="text-sm font-semibold text-[var(--fg-strong)]">{item.value}</p>
                <p className="text-xs text-[var(--muted)]">{item.label}</p>
                <p className="text-xs text-[var(--muted)] opacity-80">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="grid-lines glass rounded-3xl border border-white/10 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
              Approach
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--fg-strong)] md:text-3xl">
              Design + data + growth backbone
            </h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              UDK offers every brand a reusable design system, experiment tracking, feature
              flags and publishing/growth muscle. New products plug into this backbone.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="glass rounded-2xl border border-white/5 p-4 shadow-inner shadow-white/5"
                >
                  <p className="text-sm font-semibold text-[var(--fg-strong)]">{item.title}</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid-lines glass rounded-3xl border border-white/10 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
              Operations
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--fg-strong)] md:text-3xl">
              Shared ops layer
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/30" />
                Design system + component library (multi-brand theming).
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/30" />
                Feature flags, A/B testing and experiment analytics.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/30" />
                Shared data layer, analytics dashboards and automations.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/30" />
                Publishing, UA, localization and store optimization muscle.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

