import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Chaturang — Neurantra",
  description:
    "Chaturang is the 8th-century Indian board game that became chess — reborn on mobile with a strong, self-play-tuned AI and a Mughal-themed board. Coming soon.",
};

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
    eyebrow: "The opponent",
    heading: "An AI that learned the game, not memorized it.",
    body:
      "Chaturang's engine was tuned over hundreds of thousands of self-play positions, with a Chaturang-specific evaluation rather than a chess engine in disguise. Three difficulty levels: Easy beats casual players who blunder and is ideal for learning; Medium unlocks after three Easy wins and gives a real fight; Hard unlocks after five Medium wins and searches six plies deep. King-and-Rook versus lone King endgames are played perfectly, from a built-in tablebase computed by retrograde analysis.",
    note: "Easy · Medium · Hard — earned, not just selected",
    screenshot: "/chaturang/chaturang-board.png",
    screenshotAlt: "Chaturang mid-game board with ornate piece silhouettes",
  },
  {
    eyebrow: "Not chess",
    heading: "Its 8th-century ancestor, rules and all.",
    body:
      "Chaturang is played on an uncheckered 8×8 board, the Ashtāpada, with the two Kings starting diagonally opposite. The pieces are weaker than their chess descendants: the Mantri (Counsellor) moves a single square diagonally — nothing like a Queen — and the Gaja (Elephant) jumps exactly two squares diagonally, reaching only eight squares on the whole board. There is no castling. The one tactical lifeline is the Raja's once-per-game Knight-like leap, which can even escape check — a single move that shapes the whole game.",
    note: "Raja · Mantri · Gaja · Rook · Knight · pawns",
    screenshot: "/chaturang/chaturang-rules.png",
    screenshotAlt: "Chaturang How to Play screen explaining piece movement",
  },
  {
    eyebrow: "The depth",
    heading: "Set the game you want to play.",
    body:
      "Every game opens with a royal card-pick ceremony to reveal your side. From there, tune the challenge: turn on optional 5-minute blitz clocks, or cap the game with a move-count limit that draws if reached. Difficulty tiers unlock as you win, so the game grows with you rather than handing you everything at once.",
    note: "Card-pick ceremony · blitz clocks · move-limit mode",
    screenshot: "/chaturang/chaturang-settings.png",
    screenshotAlt: "Chaturang settings — difficulty tiers, timed game, move limit",
  },
  {
    eyebrow: "The loop",
    heading: "Hints when you need them, streaks to keep.",
    body:
      "Stuck? Spend coins on a hint and the engine shows you its recommended move, highlighted on the board. Earn coins back by winning, drawing, or watching an ad. A day-streak counter and lifetime stats track every game — all of it wrapped in a Mughal-themed aesthetic with ornate piece silhouettes and the Kalam typeface. No accounts, no signup, no tracking beyond what ad serving requires.",
    note: "Hints · coins · day streaks · lifetime stats",
    screenshot: "/chaturang/chaturang-stats.png",
    screenshotAlt: "Chaturang statistics screen — coins, games, streaks",
  },
];

export default function ChaturangPage() {
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

      {/* ── Hero ── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/chaturang/chaturang-logo.png"
                alt="Chaturang logo"
                width={72}
                height={72}
                priority
                className="h-[72px] w-[72px] rounded-2xl"
              />
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#E8E2D6] bg-[#F5EFE8] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#78716C]">
                Coming soon
              </span>
            </div>
            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[60px]">
              The game chess came from.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Chaturang is the 8th-century Indian board game widely considered
              the earliest known form of chess. The pieces are weaker, there is
              no castling, and the King has a single once-per-game Knight leap.
              Play it against an AI tuned over hundreds of thousands of self-play
              positions. Coming soon to the App Store and Google Play.
            </p>
          </div>
          <div className="relative mx-auto aspect-[1419/2796] w-full max-w-[320px]">
            <Image
              src="/chaturang/chaturang-cardpick.png"
              alt="Chaturang card-pick screen — choose your side"
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
                A 1,200-year-old game, played the way it was meant to be.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Chaturang spread from India along the trade routes and slowly
                became the chess the world plays today. Chaturang restores the
                original: the slower pieces, the diagonally-opposed Kings, the
                absence of castling. It is not a chess clone with a coat of
                paint — it is the game chess grew out of, with its own tactics
                and its own rhythm.
              </p>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                Built by Neurantra, quiet by design.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Chaturang asks for nothing: no account, no signup, no tracking
                beyond what ad serving requires. Everything — your coins, your
                streak, your lifetime stats — lives on your device. It is a
                single, finished game with a learned opponent, presented in a
                Mughal-themed aesthetic of ornate piece silhouettes and the
                Kalam typeface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Inside the game
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
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {f.body}
                  </p>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {f.note}
                  </p>
                </div>
              );
              const imageBlock = (
                <div className="relative mx-auto aspect-[1419/2796] w-full max-w-[300px]">
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

      {/* ── Coming soon CTA ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Coming soon
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Chaturang is in store review for the App Store and Google Play.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Once the apps go live, the badges below will start working. In the
            meantime, drop us a note if you&rsquo;d like to be among the first to
            know.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span
              aria-disabled="true"
              className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-full border border-line bg-white/40 px-6 text-sm font-semibold text-muted"
            >
              App Store · coming soon
            </span>
            <span
              aria-disabled="true"
              className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-full border border-line bg-white/40 px-6 text-sm font-semibold text-muted"
            >
              Google Play · coming soon
            </span>
          </div>
          <Link
            href="/#contact"
            className="mt-10 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Tell me when it&rsquo;s live →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
