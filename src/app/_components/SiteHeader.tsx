"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NeurantraLogo } from "./NeurantraLogo";

const HOME_LINKS = [
  { href: "#what-we-build", label: "What we build", section: "what-we-build" },
  { href: "#products", label: "Products", section: "products" },
  { href: "#contact", label: "Contact", section: "contact" },
];

export type SiteHeaderVariant = "home" | "subpage";

export function SiteHeader({ variant = "home" }: { variant?: SiteHeaderVariant }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (variant !== "home") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    HOME_LINKS.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [variant]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex items-center justify-between py-5">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            onClick={() => setMobileOpen(false)}
          >
            <NeurantraLogo size={26} className="text-accent" />
            <span className="text-[15px] font-bold tracking-[0.18em] uppercase text-foreground">
              Neurantra
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted sm:inline">
              · domain-specific AI
            </span>
          </Link>

          {variant === "subpage" ? (
            <Link
              href="/"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              ← Back to home
            </Link>
          ) : (
            <>
              <nav className="hidden gap-7 text-sm text-muted sm:flex">
                {HOME_LINKS.map(({ href, label, section }) => (
                  <NavLink key={href} href={href} active={active === section}>
                    {label}
                  </NavLink>
                ))}
              </nav>

              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(o => !o)}
                className="flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-foreground sm:hidden"
              >
                {mobileOpen ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  >
                    <path d="M6 6 L18 18 M18 6 L6 18" />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  >
                    <path d="M4 7h16 M4 12h16 M4 17h16" />
                  </svg>
                )}
              </button>
            </>
          )}
        </div>

        {variant === "home" && mobileOpen && (
          <nav className="flex flex-col gap-1 pb-5 sm:hidden">
            {HOME_LINKS.map(({ href, label, section }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                data-active={active === section}
                className="rounded-md px-2 py-2.5 text-base text-muted transition-colors hover:bg-foreground/5 hover:text-foreground data-[active=true]:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      data-active={active}
      className="relative transition-colors hover:text-foreground data-[active=true]:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 data-[active=true]:after:scale-x-100"
    >
      {children}
    </a>
  );
}
