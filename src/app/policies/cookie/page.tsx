export const metadata = {
  title: "Cookie Policy | UDK Digital",
  description:
    "How UDK Digital uses cookies and similar technologies for performance, analytics, and experience.",
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-[var(--fg-strong)]">
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
            Policies
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Cookie Policy</h1>
          <p className="mt-3 text-[var(--fg-muted)]">
            This page explains how we use cookies and similar technologies at UDK Digital.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">What we use</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Essential cookies for core site functions (session, localization).</li>
            <li>Performance/analytics cookies to improve reliability and UX.</li>
            <li>No third-party advertising trackers by default.</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">
            Controlling cookies
          </h2>
          <p>
            You can manage or block cookies via your browser settings. Disabling essential
            cookies may affect site functionality.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Updates</h2>
          <p>
            We may update this policy as we add features or change analytics providers.
            Material changes will be noted here.
          </p>
        </div>

        <div className="space-y-2 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Contact</h2>
          <p>
            Questions? Email{" "}
            <a className="text-[var(--accent-text)]" href="mailto:support@udkdigital.com">
              support@udkdigital.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

