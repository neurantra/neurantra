const ventures = [
  {
    name: "IyerSpine",
    href: "https://iyerspine.com",
    stage: "Live in healthcare",
    summary:
      "A patient-facing spine practice assistant that helps visitors navigate care options, education, and next steps with clarity.",
  },
  {
    name: "Alhena",
    href: "https://alhena.ai",
    stage: "E-commerce concept",
    summary:
      "An AI storefront concierge for product discovery, objection handling, and high-intent conversion moments across modern commerce sites.",
  },
  {
    name: "RunConcierge",
    href: "https://runconcierge.ai",
    stage: "Endurance concept",
    summary:
      "A runner and event assistant designed for training guidance, race-day logistics, sponsor discovery, and community engagement.",
  },
];

const capabilities = [
  "Domain-trained assistants that speak in the language of the practice, brand, or event.",
  "Web-native experiences that can start as static pages and grow into live demos, workflows, and copilots.",
  "Conversation design focused on trust, clarity, and action instead of generic chatbot theater.",
];

export default function Home() {
  return (
    <main className="page-shell flex-1">
      <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex min-h-[calc(100svh-3rem)] max-w-7xl flex-col">
          <header className="reveal-fade flex items-center justify-between border-b border-[color:var(--line)] py-5">
            <a href="#" className="text-lg font-semibold tracking-[0.24em] uppercase">
              Neurantra
            </a>
            <nav className="hidden items-center gap-8 text-sm text-[color:var(--muted)] md:flex">
              <a href="#capabilities">Capabilities</a>
              <a href="#ventures">Ventures</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-16 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div className="max-w-3xl">
              <p className="reveal-up text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--muted)]">
                AI assistants for high-trust domains
              </p>
              <h1 className="reveal-up-delay mt-6 max-w-4xl font-[family:var(--font-cormorant)] text-6xl leading-[0.92] tracking-[-0.04em] text-[color:var(--foreground)] sm:text-7xl lg:text-[6.7rem]">
                Neurantra builds domain-specific AI assistants that feel
                useful on day one.
              </h1>
              <p className="reveal-fade mt-8 max-w-xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                We start with healthcare, but the broader thesis is bigger:
                every serious team deserves an assistant designed around its
                vocabulary, workflows, and moments of trust.
              </p>
              <div className="reveal-fade mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#ventures"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-semibold text-[color:var(--surface-strong)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore the ventures
                </a>
                <a
                  href="mailto:hello@neurantra.com"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition-colors duration-300 hover:bg-[color:var(--surface)]"
                >
                  Start a conversation
                </a>
              </div>
            </div>

            <div className="relative min-h-[32rem] reveal-fade">
              <div className="hero-orbit absolute left-[6%] top-[8%] h-24 w-24 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] backdrop-blur-sm" />
              <div className="hero-orbit-delayed absolute right-[10%] top-[6%] h-40 w-40 rounded-full bg-[color:var(--glow)] blur-2xl" />
              <div className="absolute inset-x-[8%] top-[12%] bottom-[8%] overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(160deg,rgba(255,250,243,0.94),rgba(237,231,221,0.68))] p-6 shadow-[0_18px_60px_rgba(35,28,18,0.08)] backdrop-blur-md">
                <div className="flex h-full flex-col justify-between rounded-[1.6rem] border border-white/60 bg-[rgba(255,255,255,0.48)] p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    <span>Active fields</span>
                    <span>03</span>
                  </div>
                  <div className="space-y-5">
                    <div className="border-b border-[color:var(--line)] pb-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">
                        Healthcare
                      </p>
                      <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight">
                        Patient assistants that reduce confusion and move people
                        toward the right next step.
                      </p>
                    </div>
                    <div className="border-b border-[color:var(--line)] pb-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">
                        Commerce
                      </p>
                      <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight">
                        Storefront guides that answer objections and convert
                        intent while preserving brand voice.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">
                        Endurance
                      </p>
                      <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight">
                        Running and event assistants that coordinate logistics,
                        training context, and community touchpoints.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-[color:var(--line)] pt-5 text-sm text-[color:var(--muted)]">
                    <span>Operator-grade conversation design</span>
                    <span className="h-3 w-3 rounded-full bg-[color:var(--accent)] shadow-[0_0_0_10px_var(--accent-soft)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="border-y border-[color:var(--line)] bg-[rgba(255,250,243,0.5)] px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
              What we are building
            </p>
            <h2 className="mt-5 max-w-md font-[family:var(--font-cormorant)] text-5xl leading-[0.95] tracking-[-0.04em]">
              AI assistants with domain memory, calm language, and a clear job
              to do.
            </h2>
          </div>
          <div className="grid gap-6">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex gap-5 border-b border-[color:var(--line)] pb-6 last:border-b-0 last:pb-0"
              >
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[color:var(--accent)]" />
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ventures" className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
              Current and emerging ventures
            </p>
            <h2 className="mt-5 font-[family:var(--font-cormorant)] text-5xl leading-[0.97] tracking-[-0.04em]">
              One company, multiple assistant patterns, each tuned to a real
              operating environment.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            {ventures.map((venture) => (
              <a
                key={venture.name}
                href={venture.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-5 py-8 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.26)] md:grid-cols-[1fr_160px_1.3fr]"
              >
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                    {venture.name}
                  </h3>
                </div>
                <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">
                  {venture.stage}
                </p>
                <div className="flex items-start justify-between gap-6">
                  <p className="max-w-xl text-lg leading-8 text-[color:var(--muted)]">
                    {venture.summary}
                  </p>
                  <span className="pt-1 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--foreground)] transition-transform duration-300 group-hover:translate-x-1">
                    Visit
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.25rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(24,31,45,0.96),rgba(36,46,66,0.9))] px-7 py-10 text-[color:var(--surface-strong)] sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/58">
              Design philosophy
            </p>
            <h2 className="mt-5 max-w-2xl font-[family:var(--font-cormorant)] text-5xl leading-[0.96] tracking-[-0.04em]">
              The best assistants do not perform intelligence. They reduce
              friction, answer clearly, and move people forward.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/72">
            <p>
              Neurantra is structured as a parent platform for domain-specific
              assistants. Each product can keep its own voice and market while
              sharing a common design standard for trust, clarity, and action.
            </p>
            <p>
              That allows us to ship focused experiences now and support richer
              demos, live workflows, and deeper integrations as the portfolio
              grows.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-[color:var(--line)] px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
              Let&apos;s build deliberately
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              If you are shaping a high-trust customer journey, we should talk.
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-sm text-[color:var(--muted)] sm:items-start">
            <a
              href="mailto:hello@neurantra.com"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 font-semibold text-[color:var(--foreground)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              hello@neurantra.com
            </a>
            <p>Health practices, commerce brands, and event operators welcome.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
