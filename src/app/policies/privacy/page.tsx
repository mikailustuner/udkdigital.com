import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | UDK Digital",
  description:
    "How UDK Digital collects, uses, and protects personal data, and how you can reach us. Privacy policy for technology platform.",
  keywords: ["privacy policy", "UDK Digital privacy", "data protection", "privacy"],
  alternates: {
    canonical: "/policies/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-[var(--fg-strong)]">
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
            Policies
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Privacy Policy</h1>
          <p className="mt-3 text-[var(--fg-muted)]">
            How we handle personal data, what we collect, and your choices.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">What we collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Contact information you provide (e.g., name, email).</li>
            <li>Usage data for performance and reliability (analytics, logs).</li>
            <li>No sale of personal data; no advertising trackers by default.</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">How we use data</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>To operate and improve the site and services.</li>
            <li>To respond to inquiries and provide support.</li>
            <li>To maintain security and prevent abuse.</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Retention</h2>
          <p>We retain data only as long as necessary for the purposes above or legal requirements.</p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Your choices</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>You can request access, correction, or deletion of your data.</li>
            <li>You can opt out of non-essential cookies via browser settings.</li>
          </ul>
        </div>

        <div className="space-y-2 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Contact</h2>
          <p>
            For privacy questions or requests, email{" "}
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

