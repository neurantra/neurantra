import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Use — Neurantra",
  description:
    "Terms governing the use of neurantra.com and SumQuest, provided by Neurantra LLC.",
};

const LAST_UPDATED = "May 12, 2026";

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <Link
            href="/"
            className="flex items-baseline gap-3 transition-opacity hover:opacity-80"
          >
            <span className="text-[15px] font-bold tracking-[0.18em] uppercase text-foreground">
              Neurantra
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted sm:inline">
              · domain-specific AI
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="border-b border-line">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Terms of Use
          </p>
          <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[44px]">
            The agreement that governs our Services
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <section>
              <p>
                These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of{" "}
                <span className="font-medium text-foreground">neurantra.com</span> and{" "}
                <span className="font-medium text-foreground">SumQuest</span> (together, the
                &ldquo;Services&rdquo;), provided by Neurantra LLC (&ldquo;Neurantra,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By using the Services,
                you agree to these Terms. If you do not agree, do not use the Services.
              </p>
              <p className="mt-3">
                Our other products{" "}
                <a
                  href="https://iyerspine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  IyerSpine
                </a>{" "}
                and{" "}
                <a
                  href="https://pawcial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Pawcial
                </a>{" "}
                are governed by separate terms, available on their respective websites.
              </p>
            </section>

            <Section heading="1. Eligibility">
              <p>
                The neurantra.com website is intended for users 13 years of age or older. By
                using the website, you represent that you meet this minimum age requirement,
                or that a parent or legal guardian has reviewed the site on your behalf.
              </p>
              <p className="mt-3">
                SumQuest is designed for children ages 6 through 12. Children using SumQuest
                should do so under the supervision and consent of a parent or legal guardian.
                By allowing a child to use SumQuest, the parent or legal guardian agrees to
                these Terms on the child&rsquo;s behalf.
              </p>
            </Section>

            <Section heading="2. The Services">
              <p>
                <span className="font-medium text-foreground">a. neurantra.com</span> is the
                marketing website for Neurantra LLC. It provides information about our
                products, practices, and contact methods.
              </p>
              <p className="mt-3">
                <span className="font-medium text-foreground">b. SumQuest</span> is a mobile
                educational game distributed through the Apple App Store and Google Play. Your
                use of SumQuest is also subject to the terms of the platform from which you
                obtain it (Apple&rsquo;s Media Services Terms or Google Play&rsquo;s Terms of
                Service).
              </p>
            </Section>

            <Section heading="3. License to use">
              <p>
                Subject to your compliance with these Terms, we grant you a limited, personal,
                non-exclusive, non-transferable, non-sublicensable, revocable license to access
                and use the Services for personal, non-commercial purposes.
              </p>
              <p className="mt-3 font-medium text-foreground">You may not:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>Copy, modify, distribute, sell, or lease any part of the Services</li>
                <li>Reverse engineer, decompile, or attempt to extract source code</li>
                <li>Use the Services in any way that violates applicable law</li>
                <li>Use the Services to harm, harass, or violate the rights of others</li>
                <li>Interfere with the security, integrity, or performance of the Services</li>
                <li>
                  Use automated means (bots, scrapers) to access the Services without our
                  written permission
                </li>
              </ul>
            </Section>

            <Section heading="4. Intellectual property">
              <p>
                The Services, including all content, design, graphics, code, and trademarks
                (such as &ldquo;Neurantra,&rdquo; &ldquo;SumQuest,&rdquo; and associated logos),
                are owned by Neurantra LLC or our licensors and are protected by intellectual
                property laws. Nothing in these Terms grants you any rights in our intellectual
                property except the limited license set out in Section 3.
              </p>
            </Section>

            <Section heading="5. Feedback and user content">
              <p>
                We do not currently solicit user-generated content on the Services. If you
                voluntarily send us suggestions, feedback, or other materials (for example, via
                email), you grant us a non-exclusive, royalty-free, worldwide, perpetual
                license to use that material in connection with the Services, without
                obligation to you.
              </p>
            </Section>

            <Section heading="6. Advertising">
              <p>
                SumQuest is supported by advertising served through Google AdMob, configured
                for kid-safe ad serving in compliance with applicable app store and
                children&rsquo;s-privacy requirements. See our{" "}
                <Link href="/privacy" className="text-accent underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
            </Section>

            <Section heading="7. Disclaimers">
              <p className="uppercase">
                The Services are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
                without warranties of any kind, either express or implied, including warranties
                of merchantability, fitness for a particular purpose, non-infringement, or
                accuracy. We do not warrant that the Services will be uninterrupted, error-free,
                or free of viruses or other harmful components.
              </p>
              <p className="mt-3">
                SumQuest is an educational game. It is not a substitute for school instruction
                or professional educational assessment.
              </p>
            </Section>

            <Section heading="8. Limitation of liability">
              <p className="uppercase">
                To the fullest extent permitted by law, Neurantra LLC and its officers,
                employees, agents, and affiliates will not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of
                profits, data, use, or goodwill, arising out of or relating to your use of the
                Services.
              </p>
              <p className="mt-3 uppercase">
                Our total liability for any claim arising out of or relating to these Terms or
                the Services will not exceed one hundred U.S. dollars ($100.00).
              </p>
              <p className="mt-3">
                Some jurisdictions do not allow the exclusion or limitation of certain damages,
                so the above limitations may not apply to you in full.
              </p>
            </Section>

            <Section heading="9. Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless Neurantra LLC and its
                officers, employees, agents, and affiliates from any claim, demand, loss,
                liability, or expense (including reasonable attorneys&rsquo; fees) arising out
                of your violation of these Terms or your misuse of the Services.
              </p>
            </Section>

            <Section heading="10. Termination">
              <p>
                We may suspend or terminate your access to the Services at any time, with or
                without notice, for any reason, including suspected violation of these Terms.
                Sections that by their nature should survive termination (including 4, 5, 7, 8,
                9, 11, 12, and 13) will survive.
              </p>
            </Section>

            <Section heading="11. Changes to these Terms">
              <p>
                We may revise these Terms from time to time. Material changes will be indicated
                by an updated &ldquo;Last updated&rdquo; date at the top, with more prominent
                notice for significant changes. Your continued use of the Services after a
                change constitutes acceptance of the revised Terms.
              </p>
            </Section>

            <Section heading="12. Governing law and disputes">
              <p>
                These Terms are governed by the laws of the State of New Jersey, USA, without
                regard to its conflict-of-laws principles. Any dispute arising from or relating
                to these Terms or the Services will be brought exclusively in the state or
                federal courts located in New Jersey, and you consent to personal jurisdiction
                in those courts.
              </p>
              <p className="mt-3">
                Nothing in this section prevents either party from seeking equitable relief in
                any court of competent jurisdiction.
              </p>
            </Section>

            <Section heading="13. General">
              <p>
                These Terms, together with our{" "}
                <Link href="/privacy" className="text-accent underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>
                , constitute the entire agreement between you and Neurantra LLC regarding the
                Services. If any provision is found unenforceable, the remaining provisions
                will remain in effect. Our failure to enforce a provision is not a waiver of
                our right to do so later. You may not assign these Terms; we may.
              </p>
            </Section>

            <Section heading="14. Contact">
              <p>Questions about these Terms? Contact:</p>
              <p className="mt-3">
                Neurantra LLC
                <br />
                Email:{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>
                <br />
                State of formation: New Jersey, USA
              </p>
            </Section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{heading}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
