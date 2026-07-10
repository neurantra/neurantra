import Image from "next/image";
import Link from "next/link";
import { AdSlot } from "./_components/AdSlot";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { AD_SLOTS } from "@/lib/ads";

type ProductStatus = "Live" | "Beta" | "Coming soon";

interface Product {
  name: string;
  tagline: string;
  domain: string;
  status: ProductStatus;
  statusLabel?: string;
  url?: string;
  internal?: boolean;
  logo?: string;
}

const PRODUCTS: Product[] = [
  {
    name: "IyerSpine",
    tagline: "An AI assistant that helps patients navigate spine care questions and next steps with confidence.",
    domain: "Healthcare",
    status: "Live",
    url: "https://iyerspine.com",
    logo: "/iyerspine-logo.png",
  },
  {
    name: "Surgery Care",
    tagline: "The patient companion app surgical practices use to stay connected — secure messaging, appointments, an educational assistant, and recovery tracking.",
    domain: "Healthcare · patient app",
    status: "Beta",
    statusLabel: "Coming soon",
    url: "/surgery-care",
    internal: true,
    logo: "/surgery-care/surgery-care-logo.png",
  },
  {
    name: "Pawcial",
    tagline: "Location-aware social check-ins for dog parents — find compatible playdates and trusted walkers nearby.",
    domain: "Consumer · social",
    status: "Live",
    url: "https://www.pawcial.com",
    logo: "/pawcial-logo.png",
  },
  {
    name: "PlaneSane",
    tagline: "Choose the best flight, not just the cheapest — reliability, weather, connection, and fare risk scored from years of US flight data.",
    domain: "Travel · consumer",
    status: "Live",
    url: "/planesane",
    internal: true,
    logo: "/planesane/planesane-logo.svg",
  },
  {
    name: "Puzzlecub",
    tagline: "Six AI-driven games in one app — Math, Word, Sand, Alpha, Maze, and Geo — adapting to how you play.",
    domain: "Games · all ages",
    status: "Live",
    url: "/puzzlecub",
    internal: true,
    logo: "/puzzlecub/puzzlecub-logo.png",
  },
  {
    name: "Chaturang",
    tagline: "The 8th-century Indian ancestor of chess, reborn with a strong, self-play-tuned AI.",
    domain: "Games · board & strategy",
    status: "Live",
    url: "/chaturang",
    internal: true,
    logo: "/chaturang/chaturang-logo.png",
  },
];

const PRACTICES = [
  {
    label: "Domain-specific AI assistants",
    body:
      "Conversational AI tuned for the questions a real customer actually asks at a high-stakes moment — clinic visit, claim, return, transaction. Trained on a single domain's vocabulary, integrated into the systems already running it, designed to defer when it should.",
  },
  {
    label: "AI-driven educational games",
    body:
      "Games where the AI is the tutor, the antagonist, and the narrator — adapting difficulty in real time and turning practice into play. Currently building reading and math fluency tools for children ages 5 through 12.",
  },
];

function StatusPill({ status, label }: { status: ProductStatus; label?: string }) {
  const styles =
    status === "Live"
      ? "bg-[#E6F0EC] text-[#1F4C40] border-[#C9DED7]"
      : status === "Beta"
        ? "bg-[#FFF3D8] text-[#92400E] border-[#FDE68A]"
        : "bg-[#F5EFE8] text-[#78716C] border-[#E8E2D6]";
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles}`}
    >
      {label ?? status}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="home" />

      {/* ── Hero ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            AI for high-trust moments
          </p>
          <h1 className="max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[64px]">
            Calm, deeply integrated AI for the moments where clarity matters most.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Neurantra is a small product studio. We build domain-specific AI
            assistants and AI-driven educational games, with a bias toward
            tools that are quiet, careful, and earn their keep.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#products"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              See what we&apos;re building
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-line bg-transparent px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ── What we build ── */}
      <section id="what-we-build" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            What we build
          </p>
          <div className="grid gap-12 sm:grid-cols-2">
            {PRACTICES.map(p => (
              <div key={p.label} className="border-t border-line pt-8">
                <h2 className="text-[26px] font-semibold leading-tight tracking-tight text-foreground">
                  {p.label}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Products
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {PRODUCTS.map(prod => {
              const inner = (
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white/60 p-7 transition-colors hover:bg-white">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {prod.logo && (
                        <Image
                          src={prod.logo}
                          alt=""
                          width={36}
                          height={36}
                          className="h-9 w-9 rounded-lg object-contain"
                        />
                      )}
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {prod.name}
                      </h3>
                    </div>
                    <StatusPill status={prod.status} label={prod.statusLabel} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {prod.domain}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {prod.tagline}
                  </p>
                  {prod.url && (
                    <p className="mt-6 inline-flex items-center text-[13px] font-semibold text-accent">
                      {prod.internal ? "Learn more" : `Visit ${prod.name}`} →
                    </p>
                  )}
                </article>
              );
              if (!prod.url) {
                return <div key={prod.name}>{inner}</div>;
              }
              if (prod.internal) {
                return (
                  <Link key={prod.name} href={prod.url} className="group block">
                    {inner}
                  </Link>
                );
              }
              return (
                <a
                  key={prod.name}
                  href={prod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ad ── */}
      <AdSlot
        slot={AD_SLOTS.home}
        className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10"
      />

      {/* ── Contact ── */}
      <section id="contact" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Contact
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Have a question, an idea, or want to talk shop?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            We&apos;re a small team and we read everything.
          </p>
          <a
            href="mailto:hello@neurantra.com"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            hello@neurantra.com
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
