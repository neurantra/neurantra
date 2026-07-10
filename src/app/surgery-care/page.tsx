import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Surgery Care — the patient companion app for surgical practices",
  description:
    "Surgery Care keeps patients connected to their surgeon's practice — secure messaging, appointment requests, an educational assistant, and recovery tracking from Apple Health / Health Connect. A Neurantra product.",
  alternates: { canonical: "/surgery-care" },
  openGraph: {
    type: "website",
    siteName: "Neurantra",
    url: "https://neurantra.com/surgery-care",
    title: "Surgery Care — the patient companion app for surgical practices",
    description:
      "Message your surgeon's office, request appointments, ask the assistant, and track your recovery — in one secure app.",
    locale: "en_US",
  },
};

// TODO: replace with the live store URLs once Surgery Care is published.
const APP_STORE = "#";
const PLAY_STORE = "#";

interface Feature {
  eyebrow: string;
  heading: string;
  body: string;
  note: string;
  screenshot: string;
  screenshotAlt: string;
}

const FEATURES: Feature[] = [
  {
    eyebrow: "Messaging",
    heading: "Stay in touch with your care team.",
    body:
      "Read secure follow-up messages from the office after your surgery and reply right in the app — every response is reviewed by the care team. Need the surgeon directly? Send a short note to their care line. You can attach a medical image to any message when your team asks for one.",
    note: "Care messages · message your surgeon · attach images",
    screenshot: "/surgery-care/screen-care.png",
    screenshotAlt: "Surgery Care — secure care messages from the practice",
  },
  {
    eyebrow: "The assistant",
    heading: "Answers about your recovery, any time.",
    body:
      "Ask the in-app assistant about symptoms, recovery, and what to expect next. It's grounded in trusted clinical information and clearly framed as educational — not medical advice, and never a replacement for your surgeon.",
    note: "Educational only · not medical advice",
    screenshot: "/surgery-care/screen-atlas.png",
    screenshotAlt: "Surgery Care — the in-app educational assistant",
  },
  {
    eyebrow: "Recovery",
    heading: "See your recovery, share it with your team.",
    body:
      "With your permission, Surgery Care reads recent activity, heart-rate, and sleep from Apple Health or Health Connect and turns it into a simple recovery trend — for you to follow and for your care team to monitor. Read-only, never sold, never used for ads. Turn it off any time.",
    note: "Steps · heart rate · sleep · you control the permission",
    screenshot: "/surgery-care/screen-health.png",
    screenshotAlt: "Surgery Care — recovery trends from Apple Health / Health Connect",
  },
  {
    eyebrow: "Appointments",
    heading: "Request a visit in a few taps.",
    body:
      "Pick a location and preferred date, choose a time preference, add a short reason, and send it to the office — no phone tag. Your requests and confirmed visits live in one place.",
    note: "Location · preferred date · sent to the office",
    screenshot: "/surgery-care/screen-appointments.png",
    screenshotAlt: "Surgery Care — request an appointment",
  },
];

export default function SurgeryCarePage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

      {/* ── Coming soon banner ── */}
      <div className="border-b border-line bg-accent/10">
        <div className="mx-auto max-w-6xl px-6 py-3 sm:px-10">
          <p className="text-center text-sm font-medium text-accent">
            <span className="mr-1.5" aria-hidden="true">🚧</span>
            Coming soon — Surgery Care will be available on the App Store and Google Play. Check back for launch.
          </p>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/surgery-care/surgery-care-logo.png"
                alt="Surgery Care logo"
                width={72}
                height={72}
                priority
                className="h-[72px] w-[72px] rounded-2xl"
              />
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#C9DED7] bg-[#E6F0EC] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1F4C40]">
                Coming to iOS &amp; Android
              </span>
            </div>
            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[60px]">
              Your surgeon&rsquo;s practice, in your pocket.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Surgery Care is the patient companion app that surgical practices use to stay connected with
              their patients — secure messaging, appointment requests, an educational assistant, and recovery
              tracking. Private by design: no ads, no tracking across other apps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={APP_STORE}
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Download on the App Store
              </a>
              <a
                href={PLAY_STORE}
                className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Get it on Google Play
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">
              For established patients of a participating surgical practice. Your practice enrolls you and you
              sign in with a one-time code.
            </p>
          </div>
          <div className="relative mx-auto aspect-[1320/2868] w-full max-w-[320px]">
            <Image
              src="/surgery-care/screen-signin.png"
              alt="Surgery Care sign-in screen"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 320px, 80vw"
            />
          </div>
        </div>
      </section>

      {/* ── What it is ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            What it is
          </p>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                One secure place, from surgery to recovery.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                After an operation, staying connected to your care team shouldn&rsquo;t mean phone tag and
                voicemail. Surgery Care brings messages, appointments, post-op instructions, and your recovery
                trends into a single app your practice already uses — so the right people see the right
                information at the right time.
              </p>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                Built by Neurantra, private by design.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Surgery Care contains no advertising and does not track you across other apps or websites.
                Your health information is handled under HIPAA safeguards on behalf of your surgical practice.
                You control whether the app reads your Apple Health / Health Connect data, and you can delete
                your account any time from within the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Inside the app
          </p>
          <div className="space-y-24">
            {FEATURES.map((f, i) => {
              const isReversed = i % 2 === 1;
              const textBlock = (
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    {f.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[26px] font-semibold leading-tight tracking-tight text-foreground sm:text-[32px]">
                    {f.heading}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted">{f.body}</p>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {f.note}
                  </p>
                </div>
              );
              const imageBlock = (
                <div className="relative mx-auto aspect-[1320/2868] w-full max-w-[300px]">
                  <Image
                    src={f.screenshot}
                    alt={f.screenshotAlt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 300px, 75vw"
                  />
                </div>
              );
              return (
                <article
                  key={f.heading}
                  className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center"
                >
                  {isReversed ? (
                    <>
                      {imageBlock}
                      {textBlock}
                    </>
                  ) : (
                    <>
                      {textBlock}
                      {imageBlock}
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Get it ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Get Surgery Care
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Ask your surgical practice if they use Surgery Care.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Surgery Care is available to patients of participating practices. Your practice enrolls you, then
            you sign in with the email or phone on file plus a one-time verification code.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={APP_STORE}
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Download on the App Store
            </a>
            <a
              href={PLAY_STORE}
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Get it on Google Play
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <Link
              href="/surgery-care/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/surgery-care/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms of Use
            </Link>
            <Link
              href="/surgery-care/delete-account"
              className="transition-colors hover:text-foreground"
            >
              Delete your account
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
