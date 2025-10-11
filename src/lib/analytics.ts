"use client";

export type AnalyticsEvent = "page_view" | "download_cv" | "button_click";

const ANALYTICS_URL =
  // prefer NEXT_PUBLIC variant (available in browser when set)
  (process.env.NEXT_PUBLIC_ANALYTICS_API_URL as string) ?? "/api/analytics";

export async function trackEvent(
  event: AnalyticsEvent,
  metadata?: Record<string, unknown>
) {
  try {
    await fetch(ANALYTICS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event, metadata }),
      keepalive: true,
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to send analytics event", error);
    }
  }
}
