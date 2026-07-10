import type { Metadata } from "next";
import { SiteFooter } from "../../_components/SiteFooter";
import { SiteHeader } from "../../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Surgery Care — Delete your account & data",
  description:
    "How to delete your Surgery Care account and what happens to your data. In-app deletion, how to request it if you can't access the app, and what is retained.",
  alternates: { canonical: "/surgery-care/delete-account" },
};

export default function SurgeryCareDeleteAccountPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

      <main className="border-b border-line">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Surgery Care
          </p>
          <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[44px]">
            Delete your account &amp; data
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            This page explains how to delete your Surgery Care account and what happens to your data. Surgery
            Care is the patient companion app that surgical practices use to connect with their patients.
          </p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <Section heading="Delete your account from the app">
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Open the Surgery Care app and sign in.</li>
                <li>
                  Open the menu (&#9776;) and tap{" "}
                  <span className="font-medium text-foreground">Delete account</span>.
                </li>
                <li>Confirm. Your app access is removed immediately and you are signed out on all devices.</li>
              </ol>
            </Section>

            <Section heading="If you can't access the app">
              <p>
                Email{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>{" "}
                and ask to delete your Surgery Care account, or contact your surgical practice&rsquo;s office.
                Please include the name and the email or phone number used for the account so we can locate it.
              </p>
            </Section>

            <Section heading="What is deleted">
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>Your app sign-in and all app sessions (you can no longer log in)</li>
                <li>Your device push-notification tokens</li>
                <li>
                  Your personal profile information (name, contact details) and app messages, deleted in line
                  with our records-retention schedule
                </li>
              </ul>
            </Section>

            <Section heading="What may be retained">
              <p>
                Portions of your clinical and medical record may be retained by your surgical practice for the
                period required by law and professional medical-record retention rules, and to meet legal,
                audit, and safety obligations, even after your app account is deleted. Retained records are
                not used to sign you back in. For questions about your medical records, contact your practice
                directly.
              </p>
            </Section>

            <Section heading="Health data (Apple Health / Health Connect)">
              <p>
                If you connected Apple Health or Health Connect, you can revoke that access at any time in
                those apps. Deleting your Surgery Care account also ends any further reading of your health
                data.
              </p>
            </Section>

            <div className="rounded-2xl border border-line bg-foreground/[0.03] p-5 text-sm text-muted">
              Questions about your data? Contact Neurantra LLC at{" "}
              <a
                href="mailto:admin@neurantra.com"
                className="text-accent underline-offset-2 hover:underline"
              >
                admin@neurantra.com
              </a>
              . See also the{" "}
              <a
                href="https://neurantra.com/surgery-care/privacy"
                className="text-accent underline-offset-2 hover:underline"
              >
                Surgery Care Privacy Policy
              </a>
              .
            </div>
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
