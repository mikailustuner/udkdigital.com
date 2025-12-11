import Image from "next/image";
import TopNav from "@/components/top-nav";

type Member = {
  name: string;
  role: string;
  focus: string;
  area: string;
  avatar?: string;
};

const members: Member[] = [
  {
    name: "Mikail Üstüner",
    role: "Founder & CEO",
    focus: "Strategy, capital, shared platform",
    area: "UDK",
    avatar: "/img/team/1.webp",
  },
  {
    name: "Hamza Kahraman",
    role: "CO-Founder",
    focus: "Design system, UX, product rhythm",
    area: "UDK",
    avatar: "/img/team/2.webp",
  },
  {
    name: "H. Celil Doğan",
    role: "CO-Founder",
    focus: "Platform, data, cloud",
    area: "UDK",
    avatar: "/img/team/3.webp",
  },
];

const values = [
  { title: "Measure, learn, repeat", desc: "Experiment culture; weekly sprints and A/B cadence." },
  { title: "One design language", desc: "Same UI/UX quality bar across every brand." },
  { title: "Platform first", desc: "Start from the shared backbone, customize after." },
];

export default function TeamPage() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--fg-strong)]">
      <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl">
        <div className="absolute left-[-12%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/22" />
        <div className="absolute right-[5%] top-0 h-80 w-80 rounded-full bg-purple-500/18" />
        <div className="absolute bottom-[-8%] right-[-12%] h-96 w-96 rounded-full bg-pink-500/16" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-16 pt-14 md:px-10 lg:px-12 lg:pt-20">
        <TopNav />

        <header className="grid-lines glass rounded-3xl border border-white/10 px-6 py-10 md:px-10 md:py-14">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
            <span className="glass rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--accent-text)]">
              Team
            </span>
            <span className="h-1 w-1 rounded-full bg-cyan-300" />
            <span>UDK Digital</span>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.8fr,1fr] md:items-end">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-[var(--fg-strong)] sm:text-5xl">
                One culture, multiple brands.
              </h1>
              <p className="max-w-2xl text-lg text-[var(--muted)]">
                Product, design and engineering are centralized; each subsidiary has its
                own GM and experts to go deep in the vertical.
              </p>
            </div>
            <div className="glass neon-border rounded-3xl p-6 text-sm text-[var(--muted)] shadow-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-text)]">
                Core
              </p>
              <p className="mt-3 text-sm text-[var(--fg-strong)] opacity-90">
                Shared design system, data layer, product analytics and publishing/growth
                muscle are run by the UDK core team.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="glass rounded-2xl border border-white/10 p-5">
              <p className="text-sm font-semibold text-[var(--fg-strong)]">{item.title}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="grid-lines glass rounded-3xl border border-white/10 px-6 py-10 md:px-10 md:py-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
                Core + vertical leaders
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--fg-strong)] md:text-3xl">
                Product, platform and vertical leadership
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {members.map((member) => (
              <div
                key={member.name}
                className="glass rounded-2xl border border-white/10 p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_80px_-30px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/20 bg-white/5">
                    {member.avatar ? (
                      <Image
                        src={member.avatar}
                        alt={`${member.name} avatar`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--fg-strong)]">
                      {member.name}
                    </p>
                    <p className="text-xs text-[var(--muted)]">{member.role}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs text-[var(--fg-strong)]">
                    {member.area}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[var(--muted)]">{member.focus}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

