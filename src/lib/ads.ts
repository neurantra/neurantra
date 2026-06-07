// AdSense configuration for neurantra.com. Ships DARK — nothing loads or renders until the flags
// below are set per-environment. The publisher ID is baked in (it's public anyway — it appears in
// ad markup and in /ads.txt). Same AdSense publisher as the other Neurantra properties.
//
// Two independent switches so the chicken-and-egg resolves cleanly:
//   NEXT_PUBLIC_ADSENSE_ENABLED=true  -> load the AdSense script. Set this when you're ready for
//       Google to VERIFY/REVIEW the site (script present, but no ad units = no ads shown).
//   NEXT_PUBLIC_ADS_ENABLED=true      -> actually RENDER ad units. Keep off until the site is
//       approved and you're ready to show ads. (Requires the script, so it implies the above.)
//
// Slot IDs (created in AdSense → Ads → By ad unit, after the site is added) come from the
// NEXT_PUBLIC_AD_SLOT_* envs — until set, an <AdSlot> renders nothing.

const PUBLISHER = "ca-pub-5992130091579926"; // baked-in publisher (override via env if ever needed)

export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || PUBLISHER;
export const ADSENSE_ENABLED = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true"; // load script
export const ADS_SLOTS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";   // render ad units

// Named slots -> env. Add more as you create ad units in the AdSense dashboard.
export const AD_SLOTS = {
  home: process.env.NEXT_PUBLIC_AD_SLOT_HOME || "",
  product: process.env.NEXT_PUBLIC_AD_SLOT_PRODUCT || "",
} as const;
