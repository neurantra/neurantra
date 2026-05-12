import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — Neurantra",
  description:
    "How Neurantra LLC handles information across neurantra.com and SumQuest. Children's privacy, advertising disclosures, and your rights.",
};

const LAST_UPDATED = "May 12, 2026";

export default function PrivacyPage() {
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
            Privacy Policy
          </p>
          <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[44px]">
            How we handle your information
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <section>
              <p>
                Neurantra LLC (&ldquo;Neurantra,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
                respects your privacy. This Privacy Policy explains how we handle information
                when you visit{" "}
                <span className="font-medium text-foreground">neurantra.com</span> or use{" "}
                <span className="font-medium text-foreground">SumQuest</span>, our mobile
                educational game (together, the &ldquo;Services&rdquo;).
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
                have their own privacy policies, available on their respective websites.
              </p>
            </section>

            <Section heading="1. Information we collect">
              <h3 className="mt-2 text-base font-semibold text-foreground">
                a. neurantra.com — our marketing website
              </h3>
              <p className="mt-2">
                We do not require accounts, set marketing cookies, or run analytics tools on
                neurantra.com. Like any web server, our hosting provider (Vercel) automatically
                receives standard request information when you visit — IP address, browser
                type, referring URL, and time of request — used solely to operate the site and
                detect abuse. These logs are not used to profile you.
              </p>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                b. SumQuest — mobile educational game
              </h3>
              <p className="mt-2">
                SumQuest stores gameplay data (scores, levels, progress) locally on the user&rsquo;s
                device. We do not collect, transmit, or store this information on our servers.
                We do not require accounts, names, email addresses, or any other personally
                identifying information from the player.
              </p>
              <p className="mt-3">
                When you contact us at{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:hello@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  hello@neurantra.com
                </a>
                , we receive the email content and email address you choose to share, processed
                through Google Workspace.
              </p>
            </Section>

            <Section heading="2. Advertising in SumQuest">
              <p>
                SumQuest displays advertising provided by Google AdMob to support continued
                development. Because SumQuest is directed to children, ads are served in
                compliance with the Google Play Families Policy and Apple App Store Kids
                Category requirements:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Ads are non-personalized (no behavioral or interest-based advertising)</li>
                <li>No personally identifiable information is shared with advertisers</li>
                <li>Ad content is filtered for age-appropriate material</li>
                <li>
                  AdMob may collect limited technical signals (device identifiers, IP address)
                  for fraud prevention and ad delivery, in compliance with applicable
                  children&rsquo;s privacy laws
                </li>
              </ul>
              <p className="mt-3">
                For details on AdMob&rsquo;s data practices, see Google&rsquo;s{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  privacy policy
                </a>
                .
              </p>
            </Section>

            <Section heading="3. Children's privacy (COPPA / GDPR-K)">
              <p>
                SumQuest is designed for children ages 6–12. We comply with the Children&rsquo;s
                Online Privacy Protection Act (COPPA) in the United States and, where
                applicable, the UK Age-Appropriate Design Code and GDPR provisions for children
                under 16 in the European Union (GDPR-K).
              </p>
              <p className="mt-3 font-medium text-foreground">In practice:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>We do not knowingly collect personally identifying information from children</li>
                <li>All gameplay data remains on the child&rsquo;s device</li>
                <li>Advertising is non-personalized and complies with kid-safe ad serving standards</li>
                <li>
                  We do not enable in-app chat, social features, or user-to-user communication
                </li>
                <li>
                  We do not require parental email or any identifier from the child or parent
                  in the current version
                </li>
              </ul>
              <p className="mt-3">
                If you are a parent and believe your child has provided personal information to
                us inadvertently, please contact{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>{" "}
                and we will promptly delete it.
              </p>
              <p className="mt-3">
                Parents and legal guardians may at any time request information about what data
                we hold about their child (typically none, beyond local device storage they
                control), request deletion of any such data, or direct us not to permit any
                further collection from the child.
              </p>
            </Section>

            <Section heading="4. How we use information">
              <p>We use the limited information we receive to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Operate and maintain the Services</li>
                <li>Respond to inquiries and customer support requests</li>
                <li>Detect, prevent, and address technical issues or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do not sell personal information. We do not use personal information for
                cross-context behavioral advertising.
              </p>
            </Section>

            <Section heading="5. Sharing and disclosure">
              <p>We share information only:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  With our hosting and infrastructure providers (Vercel, Cloudflare, Google
                  Workspace) under their respective privacy and security commitments
                </li>
                <li>
                  With Google AdMob to serve ads within SumQuest, subject to the limits in
                  Section 2
                </li>
                <li>
                  When required by law, valid legal process, or to protect the rights,
                  property, or safety of Neurantra, our users, or others
                </li>
              </ul>
              <p className="mt-3">
                We do not share information with third parties for their own marketing
                purposes.
              </p>
            </Section>

            <Section heading="6. Third-party services">
              <p>We rely on the following providers, each governed by its own privacy practices:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Vercel
                  </a>{" "}
                  (web hosting)
                </li>
                <li>
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Cloudflare
                  </a>{" "}
                  (DNS)
                </li>
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Google Workspace
                  </a>{" "}
                  (email) and Google AdMob (advertising in SumQuest)
                </li>
                <li>
                  Apple App Store and Google Play (app distribution), governed by Apple&rsquo;s
                  and Google&rsquo;s respective privacy policies
                </li>
              </ul>
            </Section>

            <Section heading="7. Your rights">
              <p>
                Depending on where you live, you may have rights to access, correct, delete, or
                receive a portable copy of your personal information; to object to or restrict
                certain processing; to withdraw consent; and to lodge a complaint with a
                supervisory authority.
              </p>
              <p className="mt-3">
                For California residents (CCPA / CPRA), you also have the right to know what
                categories of personal information are collected, to delete that information,
                to correct inaccurate information, and to opt out of sale or sharing for
                cross-context behavioral advertising. We do not sell personal information or
                use it for cross-context behavioral advertising.
              </p>
              <p className="mt-3">
                For EU, UK, and EEA residents (GDPR / UK GDPR), our legal bases for processing
                are: legitimate interests (operating the Services and detecting abuse), consent
                (where we explicitly request it), and legal obligation.
              </p>
              <p className="mt-3">
                To exercise any right, contact{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>
                . We will respond within the period required by applicable law.
              </p>
            </Section>

            <Section heading="8. Data retention">
              <p>
                We retain server logs for up to 90 days for security and operational purposes.
                Email correspondence is retained as long as needed to address your inquiry and
                to satisfy any legal recordkeeping requirements. SumQuest gameplay data is
                retained on your device until you delete the app or clear its data — we do not
                retain a copy.
              </p>
            </Section>

            <Section heading="9. Security">
              <p>
                We use commercially reasonable technical and organizational measures to protect
                the limited information we process. No method of transmission or storage is
                100% secure, however, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section heading="10. International users">
              <p>
                Neurantra LLC is based in New Jersey, United States. By using the Services, you
                understand that any information you provide will be processed in the United
                States. If you are visiting from outside the United States, you consent to such
                processing.
              </p>
            </Section>

            <Section heading="11. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise
                the &ldquo;Last updated&rdquo; date at the top. For material changes, we will
                provide more prominent notice (such as on the home page or by other reasonable
                means).
              </p>
            </Section>

            <Section heading="12. Contact us">
              <p>
                Questions about this Privacy Policy or our privacy practices? Contact:
              </p>
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
