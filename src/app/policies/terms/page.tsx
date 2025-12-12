export const metadata = {
  title: "Terms of Use | UDK Digital",
  description: "The terms governing use of UDK Digital’s website and services.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-[var(--fg-strong)]">
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
            Policies
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Terms of Use</h1>
          <p className="mt-3 text-[var(--fg-muted)]">
            Please read these terms before using the UDK Digital website and services.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Acceptance</h2>
          <p>
            By accessing or using this site, you agree to these Terms. If you do not agree,
            please do not use the site.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Use of site</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Do not misuse the site or attempt to disrupt its operation.</li>
            <li>Do not infringe on intellectual property or other rights.</li>
            <li>Content is provided “as is” without warranties.</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Intellectual property</h2>
          <p>
            All trademarks, logos, and content on this site are owned by UDK Digital or its
            licensors. You may not use them without permission.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Liability</h2>
          <p>
            UDK Digital is not liable for indirect or consequential damages arising from
            use of the site. Use at your own risk.
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Changes</h2>
          <p>
            We may update these Terms periodically. Continued use after changes means you
            accept the updated Terms.
          </p>
        </div>

        <div className="space-y-2 text-sm leading-6 text-[var(--fg-muted)]">
          <h2 className="text-base font-semibold text-[var(--fg-strong)]">Contact</h2>
          <p>
            Questions about these Terms? Email{" "}
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

