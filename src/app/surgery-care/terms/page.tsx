import type { Metadata } from "next";
import { SiteFooter } from "../../_components/SiteFooter";
import { SiteHeader } from "../../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Surgery Care — Terms of Use",
  description:
    "Terms of Use for Surgery Care, the patient companion app used by surgical practices. Not medical advice; not for emergencies.",
  alternates: { canonical: "/surgery-care/terms" },
};

const LAST_UPDATED = "July 10, 2026";

export default function SurgeryCareTermsPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

      <main className="border-b border-line">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Surgery Care · Terms of Use
          </p>
          <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[44px]">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="mt-6 rounded-2xl border border-[#FDE68A] bg-[#FFF8E6] p-5 text-[15px] leading-relaxed text-[#7c5e10]">
            <span className="font-semibold text-[#92400E]">Not medical advice; not for emergencies.</span>{" "}
            Surgery Care and its in-app assistant provide general information and administrative tools only.
            They are not a substitute for professional medical advice, diagnosis, or treatment, and do not
            create a physician&ndash;patient relationship. If you have a medical emergency, call 911 or your
            local emergency number.
          </div>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <section>
              <p>
                These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the{" "}
                <span className="font-medium text-foreground">Surgery Care</span> mobile app provided by
                Neurantra LLC (&ldquo;Neurantra,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using Surgery
                Care, you agree to these Terms. If you do not agree, do not use the app.
              </p>
            </section>

            <Section heading="1. What Surgery Care is">
              <p>
                Surgery Care is a companion app that surgical practices use to communicate with their
                patients: secure messaging with the office and the surgeon, appointment requests,
                post-operative instructions, an educational assistant, and optional recovery tracking from
                Apple Health / Health Connect. <span className="font-medium text-foreground">Your surgical
                practice is solely responsible for your medical care and clinical decisions.</span> Neurantra
                provides the software; it does not practice medicine and is not a healthcare provider.
              </p>
            </Section>

            <Section heading="2. Not medical advice; not for emergencies">
              <p>
                The information in Surgery Care, including responses from the in-app assistant, is for general
                educational and administrative purposes only. It is not medical advice, is not tailored to
                your condition, and must not be relied on for diagnosis or treatment. Always seek the advice
                of your surgeon or a qualified health provider with questions about your care. Never disregard
                or delay professional medical advice because of something in the app.{" "}
                <span className="font-medium text-foreground">Do not use Surgery Care for medical
                emergencies</span> &mdash; call 911 or your local emergency number.
              </p>
            </Section>

            <Section heading="3. Eligibility and accounts">
              <p>
                Surgery Care is for established patients of a participating surgical practice. There is no
                public self-signup; your practice enrolls you. You sign in with the email or phone your
                practice has on file plus a one-time verification code. If a patient is a minor, the practice
                enrolls them consistent with applicable law and with parental or guardian involvement.
              </p>
              <p className="mt-3">
                You are responsible for keeping your device and sign-in secure and for the activity under your
                account. Tell your practice promptly if you believe your account has been accessed without
                your permission.
              </p>
            </Section>

            <Section heading="4. Acceptable use">
              <p>You agree not to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Use the app for anything other than your own care with your practice</li>
                <li>Upload content you don&rsquo;t have the right to share, or that is unlawful or harmful</li>
                <li>
                  Attempt to access another person&rsquo;s account or data, or to disrupt, reverse-engineer,
                  or circumvent the security of the service
                </li>
                <li>Use the app to send emergency or time-critical messages (see Section 2)</li>
              </ul>
            </Section>

            <Section heading="5. Health data">
              <p>
                Reading activity, heart-rate, and sleep data from Apple Health / Health Connect is optional
                and happens only if you grant permission through your device. You can revoke it at any time in
                Apple Health or Health Connect. How we handle health data is described in the{" "}
                <a
                  href="https://neurantra.com/surgery-care/privacy"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section heading="6. Messages and response times">
              <p>
                Messages you send through the app are reviewed by your practice during normal business
                operations and are not monitored continuously. Do not use the app when you need an immediate
                response. For anything urgent, contact your practice&rsquo;s office by phone, or call 911.
              </p>
            </Section>

            <Section heading="7. Disclaimers">
              <p>
                The app is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of
                any kind, express or implied, including merchantability, fitness for a particular purpose, and
                non-infringement. We do not warrant that the app will be uninterrupted, error-free, or secure,
                or that any information in it is accurate or complete for your situation.
              </p>
            </Section>

            <Section heading="8. Limitation of liability">
              <p>
                To the fullest extent permitted by law, Neurantra will not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss arising from your use of
                or inability to use the app, or from reliance on any information in it. Nothing in these Terms
                limits liability that cannot be limited under applicable law, and nothing here affects the
                responsibilities your surgical practice owes you as your healthcare provider.
              </p>
            </Section>

            <Section heading="9. Termination and account deletion">
              <p>
                You may delete your account at any time in the app (menu &#9776; &rarr; Delete account), or as
                described at{" "}
                <a
                  href="https://neurantra.com/surgery-care/delete-account"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  neurantra.com/surgery-care/delete-account
                </a>
                . We or your practice may suspend or end access to the app if these Terms are violated or if
                the practice ends its use of Surgery Care.
              </p>
            </Section>

            <Section heading="10. Changes">
              <p>
                We may update these Terms from time to time. When we do, we will revise the &ldquo;Last
                updated&rdquo; date above. Your continued use of the app after changes take effect means you
                accept the updated Terms.
              </p>
            </Section>

            <Section heading="11. Governing law">
              <p>
                These Terms are governed by the laws of the State of New Jersey, USA, without regard to its
                conflict-of-laws rules.
              </p>
            </Section>

            <Section heading="12. Contact">
              <p>
                Questions about these Terms? Contact Neurantra LLC at{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>
                . For questions about your medical care, contact your surgical practice.
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
