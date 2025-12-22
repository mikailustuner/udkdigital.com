import type { Metadata } from "next";
import TopNav from "@/components/top-nav";

export const metadata: Metadata = {
  title: "About UDK Digital | Technology Company | Excellence Culture",
  description:
    "About UDK Digital - A forward-thinking technology company driven by innovation, creativity, and excellence culture. Learn about our approach to design, data, and growth platform. Discover our commitment to building the best systems and fostering innovation.",
  keywords: [
    "About UDK Digital",
    "UDK Digital about",
    "technology company",
    "excellence culture",
    "innovation platform",
    "venture platform",
    "technology innovation",
    "company culture",
    "design system",
    "growth platform",
  ],
  openGraph: {
    title: "About UDK Digital | Technology Company | Excellence Culture",
    description:
      "A forward-thinking technology company driven by innovation, creativity, and excellence culture. One backbone, one culture.",
    url: "https://udkdigital.com/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About UDK Digital",
    description:
      "About UDK Digital - A forward-thinking technology company driven by innovation, creativity, and excellence culture.",
    url: "https://udkdigital.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "UDK Digital",
      url: "https://udkdigital.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://udkdigital.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://udkdigital.com/about",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
            <span className="h-1 w-1 rounded-full bg-cyan-300" aria-hidden="true" />
            <span>UDK Digital</span>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.8fr,1fr] md:items-end">
            <header className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-[var(--fg-strong)] sm:text-5xl">
                One backbone, one culture of excellence.
              </h1>
              <p className="max-w-2xl text-lg text-[var(--muted)]">
                At UDK Digital, we are a forward-thinking technology company driven by innovation,
                creativity, excellence, and a bold vision for the future. Unbound by a single industry,
                we explore diverse fields with a multidisciplinary mindset—turning ideas
                into meaningful impact. Our culture of excellence and commitment to building the best systems
                sets us apart in the technology landscape. We believe in perfection, quality, and
                creating technology solutions that shape the future.
              </p>
            </header>
            <aside className="glass neon-border rounded-3xl p-6 text-sm text-[var(--muted)] shadow-2xl" aria-label="UDK Digital manifesto">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-text)]">
                Manifesto
              </p>
              <p className="mt-3 text-sm text-[var(--fg-strong)] opacity-90">
                One backbone, zero friction: a single design system, data layer and growth
                engine so every idea ships earlier, cheaper and with repeatable quality.
              </p>
            </aside>
          </div>
        </header>

        <section aria-label="UDK Digital highlights" className="grid-lines glass rounded-3xl border border-white/10 px-6 py-10 md:px-10 md:py-12">
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

        <section aria-label="UDK Digital approach and operations" className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <article className="grid-lines glass rounded-3xl border border-white/10 p-6 md:p-8">
            <header>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
                Approach
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--fg-strong)] md:text-3xl">
                Design + data + growth backbone
              </h3>
            </header>
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
          </article>

          <article className="grid-lines glass rounded-3xl border border-white/10 p-6 md:p-8">
            <header>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
                Operations
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--fg-strong)] md:text-3xl">
                Shared ops layer
              </h3>
            </header>
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
          </article>
        </section>
      </div>
    </main>
    </>
  );
}

