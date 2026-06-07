"use client";

import Script from "next/script";
import { ADSENSE_CLIENT, ADSENSE_ENABLED } from "@/lib/ads";

// Loads the Google AdSense library. Present only when NEXT_PUBLIC_ADSENSE_ENABLED is set — which is
// also what Google needs to verify/review the site. Consent for EEA/UK is handled by Google's own
// certified "Privacy & messaging" CMP (configured in the AdSense dashboard, served by this script).
export function AdScript() {
  if (!ADSENSE_ENABLED || !ADSENSE_CLIENT) return null;
  return (
    <Script
      id="adsbygoogle-js"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
    />
  );
}
