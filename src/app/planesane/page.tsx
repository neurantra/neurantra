import type { Metadata } from "next";
import Image from "next/image";
import { AdSlot } from "../_components/AdSlot";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { AD_SLOTS } from "@/lib/ads";

export const metadata: Metadata = {
  title: "PlaneSane — Choose the best flight, not just the cheapest",
  description:
    "PlaneSane scores US flights on real on-time performance, weather risk, connection safety, and fare quality — so you book the most reliable flight, not just the cheapest. A Neurantra product. Advisory only; no booking.",
  alternates: { canonical: "/planesane" },
  openGraph: {
    type: "website",
    siteName: "Neurantra",
    url: "https://neurantra.com/planesane",
    title: "PlaneSane — Choose the best flight, not just the cheapest",
    description:
      "Flight reliability scores from real on-time, weather, and connection data. A Neurantra product.",
    locale: "en_US",
  },
};

const PLANESANE_SITE = "https://planesane.com";

interface Factor {
  eyebrow: string;
  heading: string;
  body: string;
  note: string;
}

const FACTORS: Factor[] = [
  {
    eyebrow: "Reliability",
    heading: "On-time history, not marketing.",
    body:
      "Every option is scored against years of real US Department of Transportation on-time and cancellation records for that carrier and route. A fare that looks great loses its shine when the flight has a habit of running late — PlaneSane surfaces that before you book, not after you're stranded.",
    note: "7+ years of US DOT performance data",
  },
  {
    eyebrow: "Weather risk",
    heading: "The sky the flight actually flies through.",
    body:
      "Departure and arrival airports carry their own weather personalities — a winter hub and a coastal airport are not the same bet in February. PlaneSane folds historical weather patterns across hundreds of US airports into a forward-looking risk score for your specific dates.",
    note: "7 years of weather across 242 airports",
  },
  {
    eyebrow: "Connection safety",
    heading: "Will you actually make the transfer?",
    body:
      "A tight layover at a delay-prone hub is a missed-connection waiting to happen. PlaneSane evaluates each itinerary's connections — layover length against the realistic risk of the inbound leg slipping — so a cheap two-stop ticket doesn't quietly become an overnight in the wrong city.",
    note: "Per-itinerary connection scoring",
  },
  {
    eyebrow: "Fare quality",
    heading: "Cheap, in context.",
    body:
      "Price still matters — it just isn't the only thing. PlaneSane weighs the fare against everything else it knows so you can see when a few dollars more buys a meaningfully more reliable trip, and when the cheap option is genuinely the smart one.",
    note: "One-way · round-trip · multi-city",
  },
];

export default function PlaneSanePage() {
  // schema.org for the product page — a free WebApplication built by Neurantra.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PlaneSane",
    url: PLANESANE_SITE,
    applicationCategory: "TravelApplication",
    operatingSystem: "Web",
    description:
      "PlaneSane scores US flights on on-time performance, weather risk, connection safety, and fare quality so travelers can choose the most reliable flight.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Neurantra LLC", url: "https://neurantra.com" },
  };

  return (
    <div className="flex flex-col flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader variant="subpage" />

      {/* ── Hero ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/planesane/planesane-logo.svg"
              alt="PlaneSane logo"
              width={72}
              height={72}
              priority
              className="h-[72px] w-[72px] rounded-2xl"
            />
            <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#C9DED7] bg-[#E6F0EC] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1F4C40]">
              Live at planesane.com
            </span>
          </div>
          <h1 className="max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[60px]">
            Choose the best flight,<br className="hidden sm:block" /> not just the cheapest.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            PlaneSane scores every flight option on real on-time history, weather
            risk, connection safety, and fare quality — so you book with
            confidence instead of guessing. It is an explainable advisor, not a
            booking engine: no payments, no booking, ever.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={PLANESANE_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Visit planesane.com →
            </a>
            <a
              href="#how-it-scores"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              How it scores
            </a>
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
                A reliability layer over flight search.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                The cheapest flight and the fastest flight are easy to find.
                The <em>best</em> one — the flight most likely to leave on time,
                survive the weather, and get you to your connection — is harder.
                PlaneSane combines historical performance with a forward-looking
                model and explains its reasoning, so the recommendation is
                something you can actually trust.
              </p>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                Built by Neurantra, advisory by design.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                PlaneSane is deterministic where it counts: the scoring engine is
                rules- and data-driven, and AI is used to explain and classify —
                never to invent a number. It is built on certified, licensed, and
                authoritative public data. Coverage centers on US carriers and
                routes to and from the US. Scores inform a decision; they are not
                a guarantee of on-time performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it scores ── */}
      <section id="how-it-scores" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            How it scores
          </p>
          <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {FACTORS.map(f => (
              <article key={f.heading} className="border-t border-line pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {f.eyebrow}
                </p>
                <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-tight text-foreground sm:text-[28px]">
                  {f.heading}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted">{f.body}</p>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {f.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ad ── */}
      <AdSlot
        slot={AD_SLOTS.product}
        className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10"
      />

      {/* ── Get it ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Try PlaneSane
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Free to use. No account, no booking — just a clearer decision.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Search a route on planesane.com and see every option scored on the
            things that actually decide whether your trip goes smoothly.
          </p>
          <a
            href={PLANESANE_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Visit planesane.com →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
