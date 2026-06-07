"use client";

import { useEffect, useRef, useState } from "react";
import { ADS_SLOTS_ENABLED, ADSENSE_CLIENT, ADSENSE_ENABLED } from "@/lib/ads";

// One responsive display ad unit. Renders nothing unless ads are turned on AND a slot id is set
// (slot ids are created in AdSense after the site is added), so it's a no-op until you're live.
// Labeled "Advertisement" and placed sparingly to keep Neurantra's calm, quiet-by-design feel.
//
// CLS: the slot reserves a min-height so an ad filling in doesn't shift the page (a Core Web Vitals /
// SEO ding). To avoid the flip side — an empty reserved box when AdSense returns NO ad (before approval,
// an ad blocker, or genuine no-fill) — we collapse the whole unit once it resolves "unfilled" (or never
// fills within a short window), so there's no orphan "Advertisement" label or wasted gap.
const RESERVED_MIN_HEIGHT = 250; // px — typical responsive in-content fill
const UNFILLED_TIMEOUT_MS = 4000; // no fill by now (blocked / pre-approval) -> collapse

export function AdSlot({ slot, className }: { slot: string; className?: string }) {
  const active = ADSENSE_ENABLED && ADS_SLOTS_ENABLED && !!slot;
  const insRef = useRef<HTMLModElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!active) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      /* AdSense not ready / blocked — ignore */
    }
    // AdSense stamps data-ad-status="filled" | "unfilled" on the <ins> once it resolves. Collapse on
    // "unfilled"; a timeout covers the case where the script never responds (blocked / not yet approved).
    const el = insRef.current;
    if (!el) return;
    const collapseIfUnfilled = () => {
      if (el.getAttribute("data-ad-status") === "unfilled") setCollapsed(true);
    };
    const observer = new MutationObserver(collapseIfUnfilled);
    observer.observe(el, { attributes: true, attributeFilter: ["data-ad-status"] });
    const timer = setTimeout(() => {
      if (el.getAttribute("data-ad-status") !== "filled") setCollapsed(true);
    }, UNFILLED_TIMEOUT_MS);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [active]);

  if (!active || collapsed) return null;
  return (
    <div className={className}>
      <p className="mb-1 text-center text-[10px] uppercase tracking-[0.18em] text-muted/70">
        Advertisement
      </p>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: RESERVED_MIN_HEIGHT }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
