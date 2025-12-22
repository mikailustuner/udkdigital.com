import type { Metadata } from "next";
import TopNav from "@/components/top-nav";
import Image from "next/image";

export const metadata: Metadata = {
  title: "UDK Digital | Technology Platform | Excellence in Innovation",
  description:
    "UDK Digital is a leading technology venture platform connecting Fexio Labs, Tiron Games, Aurict, and B2B SaaS companies. Excellence, culture, and future-focused innovation in mobile app development, game development, and enterprise software. Discover the best systems, innovation, and technology excellence.",
  keywords: [
    "UDK",
    "UDK Digital",
    "technology",
    "innovation",
    "excellence",
    "culture",
    "future",
    "best systems",
    "Aurict",
    "Fexio Labs",
    "Fexio",
    "Tiron",
    "Tiron Games",
    "mobile app development",
    "game development",
    "enterprise software",
    "venture platform",
    "design system",
    "growth platform",
    "product development",
    "engineering",
    "software",
    "quality",
    "perfection",
    "best technology platform",
    "leading venture platform",
    "technology innovation",
    "excellence in technology",
    "future technology",
    "top technology companies",
  ],
  openGraph: {
    title: "UDK Digital | Technology Platform | Excellence in Innovation",
    description:
      "Leading technology venture platform connecting Fexio Labs, Tiron Games, Aurict, and B2B SaaS companies. Excellence, culture, and future-focused innovation.",
    url: "https://udkdigital.com",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

type Company = {
  name: string;
  domain: string;
  tagline: string;
  focus: string;
  status: "Active" | "Upcoming" | "Beta";
  accent: "cyan" | "purple" | "pink" | "green";
  link?: string;
};

const companies: Company[] = [
  {
    name: "UDK Digital",
    domain: "udkdigital.com",
    tagline: "Venture platform and capital",
    focus: "Provides strategy, growth, finance and shared product backbone for all brands.",
    status: "Active",
    accent: "cyan",
  },
  {
    name: "Fexio Labs",
    domain: "fexiolabs.com",
    tagline: "Mobile app studio",
    focus: "Rapid prototyping, user-led experiences and scaling loops.",
    status: "Active",
    accent: "purple",
    link: "https://fexiolabs.com",
  },
  {
    name: "Tiron Games",
    domain: "tirongames.com",
    tagline: "Mobile games studio",
    focus: "Casual & mid-core titles; mid-term expansion to PC/console.",
    status: "Active",
    accent: "pink",
    link: "https://tirongames.com",
  },
  {
    name: "Aurict",
    domain: "aurict.com",
    tagline: "Enterprise software",
    focus: "Scalable platform, integration layer and data-driven decision support.",
    status: "Upcoming",
    accent: "green",
    link: "https://aurict.com",
  },
];

const services = [
  {
    title: "Product & Design",
    desc: "Apple-like simplicity, usability first, rapid prototyping and user testing.",
  },
  {
    title: "Engineering",
    desc: "Cloud-native architecture, secure and scalable APIs, performance-driven frontend.",
  },
  {
    title: "Growth",
    desc: "Data-driven marketing, revenue optimization, go-global strategies.",
  },
  {
    title: "Operations",
    desc: "Automation, analytics, internal tools and a shared platform backbone.",
  },
];

const milestones = [
  {
    title: "Today",
    items: ["Fexio Labs & Tiron Games live", "UDK platform core in place"],
  },
  {
    title: "Short term",
    items: ["B2B SaaS MVP", "Global publishing partnerships", "Internal analytics/ops"],
  },
  {
    title: "Mid term",
    items: ["PC/console expansion", "New commerce brands", "Data products"],
  },
];

const accentMap: Record<Company["accent"], string> = {
  cyan: "from-cyan-400/40 to-cyan-300/20 border-cyan-400/40",
  purple: "from-purple-400/40 to-purple-300/20 border-purple-400/40",
  pink: "from-pink-400/40 to-pink-300/20 border-pink-400/40",
  green: "from-emerald-400/40 to-emerald-300/20 border-emerald-400/40",
};

const platformPillars = [
  {
    title: "Unified design system",
    desc: "Reusable UI kit and interaction guidelines across every brand.",
  },
  {
    title: "Shared data & analytics",
    desc: "Single data layer, feature flags, experimentation and decision support.",
  },
  {
    title: "Distribution & growth engine",
    desc: "Store optimization, publishing relationships, UA and localization velocity.",
  },
];

const logoMap: Partial<Record<string, string>> = {
  "UDK Digital": "/others/udk.jpg",
  "Fexio Labs": "/others/fexio.png",
  "Tiron Games": "/others/tiron.png",
  Aurict: "/others/aurict.png",
};

export default function Home() {
  const softwareApplications = [
    {
      "@type": "SoftwareApplication",
      name: "Fexio Labs",
      applicationCategory: "MobileApp",
      operatingSystem: "iOS, Android",
      description: "Mobile app studio specializing in rapid prototyping, user-led experiences and scaling loops.",
      url: "https://fexiolabs.com",
      publisher: {
        "@type": "Organization",
        name: "UDK Digital",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Tiron Games",
      applicationCategory: "Game",
      operatingSystem: "iOS, Android",
      description: "Mobile games studio creating casual & mid-core titles with plans for PC/console expansion.",
      url: "https://tirongames.com",
      publisher: {
        "@type": "Organization",
        name: "UDK Digital",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Aurict",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Enterprise software platform with scalable architecture, integration layer and data-driven decision support.",
      url: "https://aurict.com",
      publisher: {
        "@type": "Organization",
        name: "UDK Digital",
      },
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "UDK Digital | Technology Platform",
        description:
          "Leading technology venture platform connecting mobile apps, games, and enterprise software companies with excellence, culture, and innovation.",
        url: "https://udkdigital.com",
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
          ],
        },
      },
      ...softwareApplications,
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is UDK Digital?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "UDK Digital is a leading technology venture platform that connects multiple subsidiaries including Fexio Labs (mobile app development), Tiron Games (game development), and Aurict (enterprise software) under one shared design, data, and growth platform.",
            },
          },
          {
            "@type": "Question",
            name: "What services does UDK Digital provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "UDK Digital provides technology platform services including product design, engineering, growth marketing, and operations. We specialize in mobile app development, game development, and enterprise software solutions.",
            },
          },
          {
            "@type": "Question",
            name: "What makes UDK Digital different?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "UDK Digital stands out through our culture of excellence, innovation, and future-focused approach. We provide a unified design system, shared data layer, and growth engine that enables rapid prototyping, user-led experiences, and scalable solutions across all our brands.",
            },
          },
          {
            "@type": "Question",
            name: "What companies are part of UDK Digital?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "UDK Digital's ecosystem includes Fexio Labs (mobile app studio), Tiron Games (mobile games studio), Aurict (enterprise software), and the UDK Digital platform itself. All companies share a unified design system, data layer, and growth platform.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative overflow-hidden bg-[var(--background)] text-[var(--fg-strong)]">
      <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/30" />
        <div className="absolute right-[10%] top-[-5%] h-80 w-80 rounded-full bg-purple-500/25" />
        <div className="absolute bottom-[5%] right-[-12%] h-96 w-96 rounded-full bg-pink-500/20" />
        <div className="absolute bottom-[10%] left-[5%] h-72 w-72 rounded-full bg-emerald-400/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-16 pt-14 md:px-10 lg:px-12 lg:pt-20">
        <TopNav />

        <header className="grid-lines glass rounded-3xl border border-white/10 px-6 py-10 md:px-10 md:py-14">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
            <span className="glass rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--accent-text)]">
              UDK DIGITAL
            </span>
            <span className="h-1 w-1 rounded-full bg-cyan-300" aria-hidden="true" />
            <span>Technology venture platform</span>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-[2.1fr,1fr] md:items-end">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-[var(--fg-strong)] sm:text-5xl md:text-6xl">
                <span className="hero-gradient">UDK DIGITAL</span>
              </h1>
              <p className="max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
                With an entrepreneurial spirit and a broad vision, UDK Digital aims to grow
                across diverse industries—merging innovation, creativity, and impact on a
                global scale. Excellence in technology, culture of innovation, and building the future
                of mobile app development, game development, and enterprise software. We are committed to
                delivering the best systems, fostering a culture of excellence, and driving innovation
                that shapes the future of technology.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_20px_60px_-25px_rgba(0,240,255,0.7)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_60px_-24px_rgba(179,136,255,0.9)]"
                >
                  Contact us
                  <span className="transition group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#ecosystem"
                  className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[var(--accent-text)] transition hover:border-cyan-400/50 hover:text-[var(--fg-strong)]"
                >
                  Explore ecosystem
                </a>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Subsidiaries", value: "4", tone: "text-[var(--accent-text)]" },
                  { label: "Verticals", value: "Mobile • Games • B2B", tone: "text-[var(--accent-text)]" },
                  { label: "Platform", value: "Design + Data + Growth", tone: "text-[var(--accent-text)]" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl border border-white/10 p-3">
                    <p className={`text-sm font-semibold ${stat.tone}`}>{stat.value}</p>
                    <p className="text-xs text-[var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass neon-border rounded-3xl p-6 text-sm text-[var(--muted)] shadow-2xl">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[var(--accent-text)]">
                <span>Radar</span>
                <span className="rounded-full bg-emerald-400/30 px-3 py-1 text-[10px] text-emerald-100">
                  Live
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {companies.slice(0, 3).map((c) => (
                  <div key={c.name} className="flex items-center justify-between">
                    <div>
                      <p className="text-[var(--fg-strong)]">{c.name}</p>
                      <p className="text-xs text-[var(--muted)]">{c.tagline}</p>
                    </div>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-[var(--fg-strong)]">
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <p className="mt-4 text-xs text-[var(--muted)]">
                UDK provides every subsidiary with shared design, data/product backbone and
                a growth engine.
              </p>
            </div>
          </div>
        </header>

        <section
          id="ecosystem"
          aria-label="UDK Digital ecosystem and subsidiaries"
          className="grid-lines glass rounded-3xl border border-white/10 px-6 py-10 md:px-10 md:py-12"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <header>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
                Ecosystem
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--fg-strong)] md:text-3xl">
                Four subsidiaries under the UDK technology platform
              </h2>
            </header>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-text)] transition hover:text-[var(--fg-strong)]"
            >
              Let’s partner
              <span className="text-lg">↗</span>
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {companies.map((company) => {
              const card = (
              <article
                className={`glass relative overflow-hidden rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_80px_-30px_rgba(0,0,0,0.8)]`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentMap[company.accent]} opacity-60 blur-3xl`}
                />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                      {logoMap[company.name] ? (
                        <Image
                          src={logoMap[company.name]!}
                          alt={`${company.name} - ${company.tagline} - UDK Digital subsidiary logo`}
                          fill
                          sizes="48px"
                          className="object-contain"
                          priority={company.name === "Fexio Labs" || company.name === "Tiron Games"}
                          loading={company.name === "Fexio Labs" || company.name === "Tiron Games" ? "eager" : "lazy"}
                        />
                      ) : null}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-[var(--fg-strong)]">
                        {company.name}
                      </p>
                      <p className="text-xs text-[var(--muted)]">{company.domain}</p>
                    </div>
                    <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs text-[var(--fg-strong)]">
                      {company.status}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted)]">{company.tagline}</p>
                  <p className="text-sm text-[var(--fg-strong)] opacity-90">{company.focus}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-[var(--accent-text)]">
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      {company.accent === "pink"
                        ? "Games"
                        : company.accent === "purple"
                          ? "Mobile"
                          : company.accent === "green"
                            ? "B2B"
                              : "Strategy"}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      UDK subsidiary
                    </span>
                  </div>
                </div>
              </article>
              );

              return company.link ? (
                <a
                  key={company.name}
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  {card}
                </a>
              ) : (
                <div key={company.name} className="block">
                  {card}
                </div>
              );
            })}
          </div>
        </section>

        <section aria-label="UDK Digital capabilities and roadmap" className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <article className="grid-lines glass rounded-3xl border border-white/10 p-6 md:p-8">
            <header>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
                Capabilities
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--fg-strong)] md:text-3xl">
                Design, product and engineering in one rhythm
              </h3>
            </header>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="glass rounded-2xl border border-white/5 p-4 shadow-inner shadow-white/5"
                >
                  <p className="text-sm font-semibold text-[var(--fg-strong)]">
                    {service.title}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{service.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article
            id="platform"
            className="grid-lines glass rounded-3xl border border-white/10 p-6 md:p-8"
          >
            <header>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
                Roadmap
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--fg-strong)] md:text-3xl">
                Focused growth, shared infrastructure
              </h3>
            </header>
            <div className="mt-6 space-y-4">
              {milestones.map((milestone) => (
                <div key={milestone.title} className="glass rounded-2xl border border-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--fg-strong)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-purple-300" />
                    {milestone.title}
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                    {milestone.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/30" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section aria-label="UDK Digital platform backbone" className="grid-lines glass rounded-3xl border border-white/10 px-6 py-10 md:px-10 md:py-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <header>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
                Platform
              </p>
              <h3 className="text-2xl font-semibold text-[var(--fg-strong)] md:text-3xl">
                One backbone: design, data, growth
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
                The UDK platform lets every subsidiary test, learn and scale faster with
                shared components, analytics and growth muscle. Our technology platform enables
                excellence through innovation, quality systems, and a culture focused on building
                the future of software development.
              </p>
            </header>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-[var(--accent-text)] transition hover:text-[var(--fg-strong)]"
            >
              Talk platform <span className="text-base">↗</span>
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {platformPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass float-slow rounded-2xl border border-white/10 p-5 shadow-inner shadow-white/5"
              >
                <p className="text-sm font-semibold text-[var(--fg-strong)]">{pillar.title}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          aria-label="Contact UDK Digital"
          className="grid-lines glass rounded-3xl border border-white/10 px-6 py-10 md:px-10 md:py-12"
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <header className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
                Let's build together
              </p>
              <h3 className="text-3xl font-semibold text-[var(--fg-strong)] md:text-4xl">
                Speed, quality and scale in one place.
              </h3>
              <p className="text-lg text-[var(--muted)]">
                Reach out for partnerships, investment, publishing or product builds. Experience
                excellence in technology, innovation, and quality. Join us in building the future
                of mobile apps, games, and enterprise software.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                <span className="glass rounded-full px-4 py-2 text-[var(--fg-strong)]">
                  Growth
                </span>
                <span className="glass rounded-full px-4 py-2 text-[var(--fg-strong)]">
                  Product
                </span>
                <span className="glass rounded-full px-4 py-2 text-[var(--fg-strong)]">
                  Engineering
                </span>
                <span className="glass rounded-full px-4 py-2 text-[var(--fg-strong)]">
                  Publishing
                </span>
              </div>
            </header>
            <aside className="glass neon-border rounded-3xl p-6 shadow-2xl space-y-4" aria-label="Contact information">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
                Contact
              </p>
              <p className="text-sm text-[var(--muted)]">
                For all inquiries, please reach us directly via email. We respond quickly.
              </p>
              <a
                href="mailto:support@udkdigital.com"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--fg-strong)] transition hover:border-[var(--accent)] hover:shadow-[0_16px_50px_-30px_rgba(0,240,255,0.6)]"
              >
                <span className="font-semibold">support@udkdigital.com</span>
                <span className="text-[var(--accent-text)]">↗</span>
              </a>
            </aside>
          </div>
        </section>

        <footer className="mb-6 flex flex-col gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-[var(--fg-strong)]">
            <div className="h-8 w-8 rounded-full border border-white/10 bg-white/5" aria-hidden="true" />
            <span className="font-semibold">UDK Digital</span>
          </div>
          <p>© {new Date().getFullYear()} UDK Digital. All rights reserved.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-3">
            <a className="hover:text-[var(--fg-strong)]" href="/" title="UDK Digital Home">
              Home
            </a>
            <a className="hover:text-[var(--fg-strong)]" href="/about" title="About UDK Digital">
              About
            </a>
            <a className="hover:text-[var(--fg-strong)]" href="/team" title="UDK Digital Team">
              Team
            </a>
            <a className="hover:text-[var(--fg-strong)]" href="#ecosystem" title="UDK Digital Ecosystem">
              Ecosystem
            </a>
            <a className="hover:text-[var(--fg-strong)]" href="#contact" title="Contact UDK Digital">
              Contact
            </a>
            <a className="hover:text-[var(--fg-strong)]" href="/policies/cookie" title="Cookie Policy">
              Cookie Policy
            </a>
            <a className="hover:text-[var(--fg-strong)]" href="/policies/security" title="Security Policy">
              Security & Disclosure
            </a>
            <a className="hover:text-[var(--fg-strong)]" href="/policies/privacy" title="Privacy Policy">
              Privacy Policy
            </a>
            <a className="hover:text-[var(--fg-strong)]" href="/policies/terms" title="Terms of Use">
              Terms of Use
            </a>
          </nav>
        </footer>
      </div>
    </main>
    </>
  );
}
