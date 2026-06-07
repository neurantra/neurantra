import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy — Neurantra",
  description:
    "How Neurantra LLC handles information across neurantra.com and Puzzlecub. Advertising disclosures, children's privacy, and your rights.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "June 7, 2026";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

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
                <span className="font-medium text-foreground">Puzzlecub</span>, our mobile
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
                We do not require accounts on neurantra.com, and we do not run our own analytics
                tools. Like any web server, our hosting provider (Vercel) automatically receives
                standard request information when you visit — IP address, browser type, referring
                URL, and time of request — used solely to operate the site and detect abuse.
              </p>
              <p className="mt-3">
                neurantra.com displays advertising served by Google AdSense (see Section 2a). To
                serve, measure, and personalize those ads, Google and its advertising partners may
                set and read cookies and similar identifiers in your browser and process data
                including your IP address, device and browser information, approximate location,
                and your interactions with ads and the site. Depending on your location and choices,
                this may include personalized (interest-based) advertising. You can control this —
                see Sections 2a and 8.
              </p>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                b. Puzzlecub — mobile educational game
              </h3>
              <p className="mt-2">
                Puzzlecub stores gameplay data (scores, levels, progress) locally on the
                device. We do not collect, transmit, or store gameplay or progress data on
                our servers, and we do not require accounts, names, email addresses, or any
                other personally identifying information from the player. On first launch,
                Puzzlecub asks for the player&rsquo;s year of birth; this value is stored
                only on the device and is used locally to decide which child-safety
                protections to apply (see Section 4). It is never transmitted to our servers.
              </p>
              <p className="mt-3">
                We do not use Apple&rsquo;s IDFA (Identifier for Advertisers) or Google&rsquo;s
                Advertising ID (AAID), and we do not maintain a persistent user identifier that
                follows you across apps or websites. We do not track you across apps or websites
                owned by other companies. The limited technical signals described in Sections 2
                and 3 are processed by Google AdMob and Firebase Crashlytics solely to serve
                non-personalized ads and to diagnose crashes.
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

            <Section heading="2. Advertising">
              <h3 className="mt-2 text-base font-semibold text-foreground">
                a. neurantra.com — Google AdSense
              </h3>
              <p className="mt-2">
                neurantra.com is supported by advertising served through Google AdSense. neurantra.com
                is a general-audience website and is not directed to children. Google, acting as an
                independent advertising provider, and its partners use cookies and similar
                technologies to serve and measure ads and, where permitted, to show you personalized
                (interest-based) ads based on your prior visits to this and other websites.
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  Google&rsquo;s use of advertising cookies enables it and its partners to serve ads
                  to you based on your visit to neurantra.com and other sites on the internet
                </li>
                <li>
                  You can opt out of personalized advertising by visiting Google&rsquo;s{" "}
                  <a
                    href="https://myadcenter.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Ad Settings
                  </a>
                  , or opt out of personalization by some third-party vendors at{" "}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    aboutads.info/choices
                  </a>
                </li>
                <li>
                  For visitors in the European Economic Area, the United Kingdom, and Switzerland,
                  neurantra.com presents a Google-certified consent message before personalized ads
                  are served, so you can consent to or refuse such processing
                </li>
              </ul>
              <p className="mt-3">
                For more on how Google uses information from sites that use its services, see{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  How Google uses information from sites or apps that use its services
                </a>
                .
              </p>

              <h3 className="mt-6 text-base font-semibold text-foreground">
                b. Puzzlecub — Google AdMob
              </h3>
              <p className="mt-2">
                Puzzlecub displays advertising provided by Google AdMob to support continued
                development. Puzzlecub is built for players of every age, but because some
                players are children, the AdMob SDK is configured to serve kid-safe,
                non-personalized ads to any user whose locally-entered year of birth indicates
                they are under 13 (or under 16 in the European Union). For those players, ad
                requests follow Google Play&rsquo;s Families Policy and Apple App Store&rsquo;s
                kid-safe ad requirements:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  Ad requests are flagged with Tag For Child-Directed Treatment (TFCD = true)
                  and, where applicable, Tag For Users under the Age of consent (TFUA = true)
                </li>
                <li>
                  Only Google&rsquo;s certified ad network for child-directed traffic is used;
                  we do not mediate to third-party ad networks that are not Google-certified
                  for kid-safe serving
                </li>
                <li>Ads are non-personalized — no behavioral or interest-based targeting</li>
                <li>No personally identifiable information is shared with advertisers</li>
                <li>Ad content is filtered for age-appropriate material</li>
                <li>
                  AdMob may process limited technical signals (coarse IP address, device type,
                  language, app version) for ad delivery, frequency capping, and fraud
                  prevention; these signals are not used to build a cross-app profile of the
                  player
                </li>
              </ul>
              <p className="mt-3">
                For details on AdMob&rsquo;s data practices for child-directed apps, see
                Google&rsquo;s{" "}
                <a
                  href="https://support.google.com/admob/answer/6223431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  AdMob &amp; AdSense for child-directed traffic
                </a>{" "}
                policy and Google&rsquo;s{" "}
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

            <Section heading="3. Crash diagnostics">
              <p>
                We use Firebase Crashlytics (a Google product) to receive crash reports when
                Puzzlecub unexpectedly terminates, so we can diagnose and fix bugs.
              </p>
              <p className="mt-3">
                Crashlytics is configured for child-directed traffic. In practice this means:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>
                  IP addresses are stripped at ingest and not stored (Firebase&rsquo;s
                  child-directed setting)
                </li>
                <li>We do not collect Apple&rsquo;s IDFA or Google&rsquo;s AAID</li>
                <li>
                  Crash reports use a transient, randomized installation token that resets on
                  app reinstall; they are not associated with any user identifier
                </li>
                <li>
                  Crash data consists of stack traces, device model, OS version, app version,
                  and the state of the app at crash time — no gameplay content, no personally
                  identifying information
                </li>
              </ul>
              <p className="mt-3">
                Crash reports are retained for up to 90 days for diagnostic purposes and then
                automatically deleted by Firebase. For more information, see Google&rsquo;s{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Firebase privacy and security
                </a>{" "}
                page.
              </p>
            </Section>

            <Section heading="4. Children's privacy (COPPA / GDPR-K)">
              <p>
                Puzzlecub is designed for players of every age. To meet our obligations under
                the Children&rsquo;s Online Privacy Protection Act (COPPA) in the United States,
                the UK Age-Appropriate Design Code, and GDPR provisions for children under 16 in
                the European Union (GDPR-K), Puzzlecub asks each player to enter their year of
                birth once, on first launch. That value is stored only on the player&rsquo;s
                device and is used locally to decide which protections to apply.
              </p>
              <p className="mt-3 font-medium text-foreground">
                For players whose locally-entered year of birth indicates they are under 13 (or
                under 16 in the EU), Puzzlecub:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>Does not knowingly collect personally identifying information</li>
                <li>Keeps all gameplay and progress data on the child&rsquo;s device</li>
                <li>
                  Serves only non-personalized ads through Google AdMob&rsquo;s kid-safe
                  certified network (see Section 2)
                </li>
                <li>
                  Sends crash diagnostics configured for child-directed traffic and containing
                  no personally identifying information (see Section 3)
                </li>
                <li>
                  Protects outbound links (for example, to view this Privacy Policy or to
                  contact support) behind a parental gate — an age-appropriate challenge
                  intended to confirm a parent is present — in compliance with Apple&rsquo;s
                  and Google Play&rsquo;s child-safety requirements
                </li>
              </ul>
              <p className="mt-3 font-medium text-foreground">
                Across all players, regardless of age, Puzzlecub:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>Does not require an account, name, email address, or any identifier</li>
                <li>
                  Does not enable in-app chat, social features, user-to-user communication, or
                  user-generated content
                </li>
                <li>
                  Does not currently offer in-app purchases and does not send push notifications.
                  If we add in-app purchases in a future version, we will update this Policy and
                  require parental gating consistent with platform requirements for users under
                  13
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

            <Section heading="5. How we use information">
              <p>We use the limited information we receive to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Operate and maintain the Services</li>
                <li>Respond to inquiries and customer support requests</li>
                <li>Detect, prevent, and address technical issues or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do not sell personal information for money. On neurantra.com, however, our use of
                Google AdSense with personalized advertising may be considered &ldquo;sharing&rdquo;
                of personal information for cross-context behavioral advertising under certain laws,
                such as the California Consumer Privacy Act (CCPA/CPRA). You can opt out — see
                Sections 2a and 8. Within Puzzlecub, ads are non-personalized and we do not use
                personal information for cross-context behavioral advertising.
              </p>
            </Section>

            <Section heading="6. Sharing and disclosure">
              <p>We share information only:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  With our hosting and infrastructure providers (Vercel, Cloudflare, Google
                  Workspace) under their respective privacy and security commitments
                </li>
                <li>
                  With Google (AdSense) to serve, measure, and personalize ads on neurantra.com,
                  subject to Section 2a
                </li>
                <li>
                  With Google AdMob to serve ads within Puzzlecub, subject to the limits in
                  Section 2b
                </li>
                <li>
                  With Google (Firebase Crashlytics) to receive crash diagnostic reports,
                  subject to the limits in Section 3
                </li>
                <li>
                  When required by law, valid legal process, or to protect the rights,
                  property, or safety of Neurantra, our users, or others
                </li>
              </ul>
              <p className="mt-3">
                Other than the advertising partners described in Section 2, we do not share
                information with third parties for their own marketing purposes.
              </p>
            </Section>

            <Section heading="7. Third-party services">
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
                  (email),{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Google AdSense
                  </a>{" "}
                  (advertising on neurantra.com), Google AdMob (advertising in Puzzlecub), and{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Firebase Crashlytics
                  </a>{" "}
                  (crash diagnostics in Puzzlecub)
                </li>
                <li>
                  Apple App Store and Google Play (app distribution), governed by Apple&rsquo;s
                  and Google&rsquo;s respective privacy policies
                </li>
              </ul>
            </Section>

            <Section heading="8. Your rights">
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
                cross-context behavioral advertising. We do not sell personal information for
                money. We do &ldquo;share&rdquo; personal information for cross-context behavioral
                advertising only on neurantra.com, through Google AdSense personalized ads; you can
                opt out of personalized ads using Google&rsquo;s{" "}
                <a
                  href="https://myadcenter.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Ad Settings
                </a>
                . We do not share Puzzlecub data for cross-context behavioral advertising.
              </p>
              <p className="mt-3">
                For EU, UK, and EEA residents (GDPR / UK GDPR), our legal bases for processing
                are: legitimate interests (operating the Services and detecting abuse), consent
                (for personalized advertising on neurantra.com, collected through Google&rsquo;s
                certified consent message — see Section 2a), and legal obligation.
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

            <Section heading="9. Data retention">
              <p>
                We retain server logs for up to 90 days for security and operational purposes.
                Email correspondence is retained as long as needed to address your inquiry and
                to satisfy any legal recordkeeping requirements. Puzzlecub gameplay data is
                retained on your device until you delete the app or clear its data — we do not
                retain a copy.
              </p>
            </Section>

            <Section heading="10. Security">
              <p>
                We use commercially reasonable technical and organizational measures to protect
                the limited information we process. No method of transmission or storage is
                100% secure, however, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section heading="11. International users">
              <p>
                Neurantra LLC is based in New Jersey, United States. By using the Services, you
                understand that any information you provide will be processed in the United
                States. If you are visiting from outside the United States, you consent to such
                processing.
              </p>
            </Section>

            <Section heading="12. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise
                the &ldquo;Last updated&rdquo; date at the top. For material changes, we will
                provide more prominent notice (such as on the home page or by other reasonable
                means).
              </p>
            </Section>

            <Section heading="13. Contact us">
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
