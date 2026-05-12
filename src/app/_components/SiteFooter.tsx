import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:px-10">
        <div className="flex items-baseline gap-3">
          <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-foreground">
            Neurantra LLC
          </span>
          <span>· {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms
          </Link>
          <a
            href="mailto:hello@neurantra.com"
            className="transition-colors hover:text-foreground"
          >
            hello@neurantra.com
          </a>
        </div>
      </div>
    </footer>
  );
}
