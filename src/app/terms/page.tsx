import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Terms of Use — Neurantra",
  description:
    "Terms governing the use of neurantra.com and Puzzlecub, provided by Neurantra LLC.",
};

const LAST_UPDATED = "May 12, 2026";

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

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
                <span className="font-medium text-foreground">Puzzlecub</span> (together, the
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
                Puzzlecub is designed for players of every age. On first launch, Puzzlecub
                asks each player for their year of birth and applies additional safety
                protections — non-personalized advertising and parental gates on outbound
                links — to any user whose locally-entered age indicates they are under 13 (or
                under 16 in the European Union). When a child uses Puzzlecub, the parent or
                legal guardian agrees to these Terms on the child&rsquo;s behalf and is
                responsible for the child&rsquo;s use of the app.
              </p>
            </Section>

            <Section heading="2. The Services">
              <p>
                <span className="font-medium text-foreground">a. neurantra.com</span> is the
                marketing website for Neurantra LLC. It provides information about our
                products, practices, and contact methods.
              </p>
              <p className="mt-3">
                <span className="font-medium text-foreground">b. Puzzlecub</span> is a mobile
                educational game designed for players of every age, distributed through the
                Apple App Store and Google Play. Your use of Puzzlecub is also subject to the
                terms of the platform from which you obtain it (Apple&rsquo;s Media Services
                Terms or Google Play&rsquo;s Terms of Service). Puzzlecub does not currently
                offer in-app purchases, does not send push notifications, and does not include
                user-to-user communication or user-generated content. For players under 13 (or
                under 16 in the European Union), outbound links within Puzzlecub — for
                example, to view our Privacy Policy or to contact support — are protected by a
                parental gate.
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
                (such as &ldquo;Neurantra,&rdquo; &ldquo;Puzzlecub,&rdquo; and associated logos),
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
                Puzzlecub is supported by advertising served through Google AdMob, configured
                for kid-safe ad serving in compliance with applicable app store and
                children&rsquo;s-privacy requirements. See our{" "}
                <Link href="/privacy" className="text-accent underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
            </Section>

            <Section heading="7. Apple App Store and Google Play">
              <p>
                <span className="font-medium text-foreground">a. Apple App Store.</span> If
                you obtained Puzzlecub from the Apple App Store, the following additional terms
                apply, and Apple, Inc. (&ldquo;Apple&rdquo;) is a third-party beneficiary of
                these Terms entitled to enforce them against you:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  These Terms are between you and Neurantra LLC only, and not with Apple.
                  Apple is not responsible for Puzzlecub or its content.
                </li>
                <li>
                  Apple has no obligation to furnish maintenance or support services with
                  respect to Puzzlecub.
                </li>
                <li>
                  In the event that Puzzlecub fails to conform to any applicable warranty, you
                  may notify Apple, and Apple will refund any purchase price paid to Apple for
                  Puzzlecub. To the maximum extent permitted by law, Apple has no other warranty
                  obligation with respect to Puzzlecub.
                </li>
                <li>
                  Apple is not responsible for addressing any claims by you or any third party
                  relating to Puzzlecub or your use of Puzzlecub, including (i) product liability
                  claims, (ii) any claim that Puzzlecub fails to conform to any applicable legal
                  or regulatory requirement, and (iii) claims arising under consumer protection,
                  privacy, or similar legislation.
                </li>
                <li>
                  Apple is not responsible for the investigation, defense, settlement, or
                  discharge of any third-party intellectual property infringement claim
                  relating to Puzzlecub.
                </li>
                <li>
                  You represent and warrant that (i) you are not located in a country that is
                  subject to a U.S. government embargo or that has been designated by the U.S.
                  government as a &ldquo;terrorist supporting&rdquo; country, and (ii) you are
                  not listed on any U.S. government list of prohibited or restricted parties.
                </li>
                <li>
                  You must comply with applicable third-party terms of agreement when using
                  Puzzlecub, including the Usage Rules set forth in Apple&rsquo;s Media Services
                  Terms and Conditions.
                </li>
              </ul>
              <p className="mt-3">
                <span className="font-medium text-foreground">b. Google Play.</span> If you
                obtained Puzzlecub from Google Play, your use is also subject to{" "}
                <a
                  href="https://play.google.com/about/play-terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Google Play&rsquo;s Terms of Service
                </a>
                . In the event of a conflict between these Terms and Google Play&rsquo;s Terms
                of Service with respect to distribution, payment, or delivery of Puzzlecub via
                Google Play, Google Play&rsquo;s Terms of Service control.
              </p>
            </Section>

            <Section heading="8. Disclaimers">
              <p className="uppercase">
                The Services are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
                without warranties of any kind, either express or implied, including warranties
                of merchantability, fitness for a particular purpose, non-infringement, or
                accuracy. We do not warrant that the Services will be uninterrupted, error-free,
                or free of viruses or other harmful components.
              </p>
              <p className="mt-3">
                Puzzlecub is an educational game. It is not a substitute for school instruction
                or professional educational assessment.
              </p>
            </Section>

            <Section heading="9. Limitation of liability">
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

            <Section heading="10. Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless Neurantra LLC and its
                officers, employees, agents, and affiliates from any claim, demand, loss,
                liability, or expense (including reasonable attorneys&rsquo; fees) arising out
                of your violation of these Terms or your misuse of the Services.
              </p>
            </Section>

            <Section heading="11. Termination">
              <p>
                We may suspend or terminate your access to the Services at any time, with or
                without notice, for any reason, including suspected violation of these Terms.
                Sections that by their nature should survive termination (including 4, 5, 7, 8,
                9, 10, 12, 13, and 14) will survive.
              </p>
            </Section>

            <Section heading="12. Changes to these Terms">
              <p>
                We may revise these Terms from time to time. Material changes will be indicated
                by an updated &ldquo;Last updated&rdquo; date at the top, with more prominent
                notice for significant changes. Your continued use of the Services after a
                change constitutes acceptance of the revised Terms.
              </p>
            </Section>

            <Section heading="13. Governing law and disputes">
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

            <Section heading="14. General">
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

            <Section heading="15. Contact">
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
