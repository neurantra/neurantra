import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuestIcon } from "../_components/QuestIcon";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Questiverse — Neurantra",
  description:
    "Questiverse is a four-game adventure — Math, Word, Tide, and Alpha — bound together by an AI that learns how you play. Built for everyone. Coming June 2026.",
};

type QuestName = "math" | "word" | "tide" | "alpha";

interface Quest {
  key: QuestName;
  name: string;
  tagline: string;
  body: string;
  skills: string;
  screenshot: string;
  screenshotAlt: string;
}

const QUESTS: Quest[] = [
  {
    key: "math",
    name: "Math Quest",
    tagline: "Quick-fire arithmetic, rendered as a quest.",
    body:
      "Pick an operation, pick a difficulty, race the clock. Each correct answer unlocks the next scene of the quest — woven spider webs, ember-lit caves, deep-sea coral gardens — and earns coins toward your wallet. The AI behind the scenes tunes pacing as you play: clean streaks accelerate, slips loosen the timer.",
    skills: "Addition · subtraction · multiplication · division · mixed mode",
    screenshot: "/questiverse/iphone-sc-4.png",
    screenshotAlt: "Math Quest gameplay — 144 divided by 12, spider-web scene",
  },
  {
    key: "word",
    name: "Word Quest",
    tagline: "Guess the word. From its meaning.",
    body:
      "Each round gives you a definition. The keyboard runs A through Z; the word stays hidden. You make picks letter by letter — each one tells you something. Hints peel back a single letter; reveal jumps to the answer. Word Quest grows your vocabulary without ever feeling like flashcards.",
    skills: "Vocabulary · spelling · pattern recognition",
    screenshot: "/questiverse/iphone-sc-5.png",
    screenshotAlt: "Word Quest gameplay — definition-driven word puzzle with A-Z keyboard",
  },
  {
    key: "tide",
    name: "Tide Quest",
    tagline: "Math problems set against shifting tides.",
    body:
      "Tide Quest pairs each question with a piece of trivia — a fact about prime numbers, a stat about how far waves travel, a hint about ancient navigation. Solve fast, solve right, watch the tide turn. The pacing is slower than Math Quest; the satisfaction comes from rhythm.",
    skills: "Mental math · numeracy · general knowledge",
    screenshot: "/questiverse/iphone-sc-7.png",
    screenshotAlt: "Tide Quest gameplay — beach scene with a math question and trivia",
  },
  {
    key: "alpha",
    name: "Alpha Quest",
    tagline: "A letter-grid puzzle. Or, race the AI.",
    body:
      "Slide letters around a grid to spell as many valid words as you can. Solo mode is a contemplative puzzle. vs-AI mode is a race against one of three opponents — Doodle the Apprentice, Cipher the Journeyman, or Sphinx the Master. You play first with no AI visible; when you finish, your opponent plays the same shuffle. Beat their move count for a bonus.",
    skills: "Word formation · spatial reasoning · strategy",
    screenshot: "/questiverse/iphone-sc-8.png",
    screenshotAlt: "Alpha Quest gameplay — letter grid word puzzle",
  },
];

export default function QuestiversePage() {
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
                src="/questiverse/questiverse-logo.png"
                alt="Questiverse logo"
                width={72}
                height={72}
                priority
                className="h-[72px] w-[72px] rounded-2xl"
              />
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#E8E2D6] bg-[#F5EFE8] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#78716C]">
                Target live · June 2026
              </span>
            </div>
            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[60px]">
              Four quests.<br />One Questiverse.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Questiverse is a single app, four games — Math, Word, Tide, and
              Alpha — bound together by a shared wallet, a daily streak, and an
              AI that learns how you play. Built for everyone. Coming June 2026
              to the App Store and Google Play.
            </p>
          </div>
          <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[320px]">
            <Image
              src="/questiverse/iphone-sc-1.png"
              alt="Questiverse home screen showing the four quest tiles"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 320px, 80vw"
            />
          </div>
        </div>
      </section>

      {/* ── Made for everyone, with AI at the heart ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Made for everyone · safe for kids
          </p>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                AI that tutors, races, and gets out of the way.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Questiverse&rsquo;s AI is woven through gameplay, not bolted on.
                It tunes difficulty in Math Quest based on your streak. It plays
                the same letter shuffle as you in Alpha Quest&rsquo;s vs-AI mode
                and offers three opponents at three skill levels. It picks the
                next definition in Word Quest based on what you&rsquo;ve already
                guessed. The AI is the tutor, the antagonist, and the narrator —
                present without interrupting.
              </p>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                One question on first launch keeps younger players safe.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Questiverse is built for players of every age. On first launch
                it asks one thing — your year of birth — and uses that, locally,
                to decide what to show you. Under 13: ads are non-personalized
                through Google&rsquo;s kid-safe certified network, and outbound
                links are protected by a parental gate. Older players: friction
                free. Either way, no account is required, no progress leaves
                your device, and no personal information is ever collected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The four quests ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            The four quests
          </p>
          <div className="space-y-24">
            {QUESTS.map((q, i) => {
              const isReversed = i % 2 === 1;
              const textBlock = (
                <div>
                  <div className="flex items-center gap-4">
                    <QuestIcon name={q.key} size={56} />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                      {q.name}
                    </p>
                  </div>
                  <h3 className="mt-5 text-[26px] font-semibold leading-tight tracking-tight text-foreground sm:text-[32px]">
                    {q.tagline}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {q.body}
                  </p>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {q.skills}
                  </p>
                </div>
              );
              const imageBlock = (
                <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[300px]">
                  <Image
                    src={q.screenshot}
                    alt={q.screenshotAlt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 300px, 75vw"
                  />
                </div>
              );
              return (
                <article
                  key={q.name}
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
            Questiverse is targeting a June 2026 launch on the App Store and Google Play.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            We&rsquo;re in store review now. Once the apps go live, the badges
            below will start working. In the meantime, drop us a note if
            you&rsquo;d like to be among the first to know.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span
              aria-disabled="true"
              className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-full border border-line bg-white/40 px-6 text-sm font-semibold text-muted"
            >
              App Store · coming June 2026
            </span>
            <span
              aria-disabled="true"
              className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-full border border-line bg-white/40 px-6 text-sm font-semibold text-muted"
            >
              Google Play · coming June 2026
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
