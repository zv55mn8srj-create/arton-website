/**
 * ArtON Analytics — Gallery Quietism maintenance layer.
 * Record useful journeys without collecting names, emails, phone numbers, or artwork details.
 */
type Gtag = (command: "config" | "event", target: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export const GA_MEASUREMENT_ID = "G-MX1ZYCVF40";

export function trackEvent(eventName: string, parameters: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, {
    ...parameters,
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.hash}`,
  });
}

export function trackPageView(path: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: path, page_title: document.title });
}

function inferClickEvent(element: HTMLElement): { name: string; label: string } | null {
  const explicit = element.dataset.analyticsEvent;
  const anchor = element.closest("a");
  const href = anchor?.getAttribute("href") || "";
  const label = (element.dataset.analyticsLabel || element.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);

  if (explicit) return { name: explicit, label };
  if (href.startsWith("mailto:")) return { name: "email_consultation_click", label };
  if (href.includes("lin.ee")) return { name: "line_consultation_click", label };
  if (href === "/start" || href.startsWith("/start#")) return { name: "plan_selection_click", label };
  if (href === "/b2b" || href.startsWith("/b2b#")) return { name: "enterprise_esg_click", label };
  if (href === "/curator" || href.startsWith("/curator#")) return { name: "curator_join_click", label };
  if (href.startsWith("/#") || href.startsWith("#")) return { name: "section_navigation_click", label };
  return null;
}

export function installClickTracking() {
  if (typeof document === "undefined") return () => undefined;
  const handleClick = (event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const interactive = target.closest("a,button");
    if (!(interactive instanceof HTMLElement)) return;
    const inferred = inferClickEvent(interactive);
    if (inferred) trackEvent(inferred.name, { link_text: inferred.label || "未命名 CTA" });
  };
  document.addEventListener("click", handleClick, true);
  return () => document.removeEventListener("click", handleClick, true);
}

export function bootstrapAnalytics() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = ((command: "config" | "event", target: string, params?: Record<string, unknown>) => {
      window.dataLayer?.push([command, target, params]);
    }) as Gtag;
  }
}
