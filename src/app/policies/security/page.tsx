export const metadata = {
  title: "Security & Responsible Disclosure | UDK Digital",
  description:
    "How to report vulnerabilities to UDK Digital and our approach to security and responsible disclosure.",
};

export default function SecurityPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-[var(--fg-strong)]">
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
            Policies
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Security & Responsible Disclosure</h1>
          <p className="mt-3 text-[var(--fg-muted)]">
            We welcome vulnerability reports and work to keep users and systems safe.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">
            Reporting a vulnerability
          </h2>
          <p>
            Please email{" "}
            <a className="text-[var(--accent-text)]" href="mailto:support@udkdigital.com">
              support@udkdigital.com
            </a>{" "}
            with details and reproduction steps. Avoid public disclosure until we confirm
            and remediate.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">What to include</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Description and impact.</li>
            <li>Steps to reproduce (URLs, payloads, affected components).</li>
            <li>Logs or screenshots that help verification.</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Scope & ethics</h2>
          <p>
            Please avoid actions that disrupt services or access other users’ data. Do not
            run automated scans against production without prior consent.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Response</h2>
          <p>
            We acknowledge quickly, validate, prioritize, and remediate. Thank you for
            helping keep the ecosystem safe.
          </p>
        </div>
      </section>
    </main>
  );
}

