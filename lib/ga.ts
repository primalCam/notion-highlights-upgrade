// lib/ga.ts
// -------------------------------
// Google Analytics (GA4) Event Helper
// -------------------------------
// Usage:
//   gaEvent("install_click", { location: "hero_primary" })
//
// GA4 will automatically create the event the first time it fires.
// Then you can mark it as a conversion in GA4 Admin → Events.
//

export const gaEvent = (
  eventName: string,
  params: Record<string, any> = {}
): void => {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;

  if (!gtag || typeof gtag !== "function") {
    console.warn("gtag() not found — event not sent:", eventName, params);
    return;
  }

  try {
    gtag("event", eventName, params);
  } catch (error) {
    console.error("GA event failed:", eventName, params, error);
  }
};
