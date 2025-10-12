import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

type AnalyticsEvent = "page_view" | "download_cv" | "button_click";

type AnalyticsEntry = {
  event: AnalyticsEvent;
  metadata?: Record<string, unknown>;
  timestamp: string;
};

type AnalyticsStore = {
  totals: Record<AnalyticsEvent, number>;
  events: AnalyticsEntry[];
  lastUpdated: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "analytics.json");
const MAX_EVENTS = 200;
const ALLOWED_EVENTS: AnalyticsEvent[] = ["page_view", "download_cv", "button_click"];

function normalizeStore(data: Partial<AnalyticsStore> | undefined): AnalyticsStore {
  const totals: Record<AnalyticsEvent, number> = {
    page_view: data?.totals?.page_view ?? 0,
    download_cv: data?.totals?.download_cv ?? 0,
    button_click: data?.totals?.button_click ?? 0,
  };

  const events = Array.isArray(data?.events)
    ? data!.events
        .filter((entry): entry is AnalyticsEntry => {
          if (!entry || typeof entry !== "object") return false;
          const evt = (entry as AnalyticsEntry).event;
          return typeof evt === "string" && ALLOWED_EVENTS.includes(evt as AnalyticsEvent);
        })
        .map((entry) => {
          const metadata = entry.metadata && typeof entry.metadata === "object" ? entry.metadata : undefined;
          return {
            event: entry.event,
            metadata,
            timestamp: entry.timestamp ?? new Date().toISOString(),
          } satisfies AnalyticsEntry;
        })
        .slice(-MAX_EVENTS)
    : [];

  return {
    totals,
    events,
    lastUpdated: data?.lastUpdated ?? new Date().toISOString(),
  };
}

// In serverless platforms the filesystem may be read-only. Use an in-memory
// fallback when fs operations fail so the API doesn't throw and take down the
// deployment. This keeps analytics best-effort: persisted locally when
// available, otherwise kept in memory for the lifetime of the instance.
let inMemoryStore: AnalyticsStore | null = null;

async function ensureStore(): Promise<AnalyticsStore> {
  if (inMemoryStore) return inMemoryStore;

  // In serverless environments (Vercel) don't attempt disk operations.
  const isServerless = process.env.VERCEL === "1" || process.env.NODE_ENV === "production";
  if (isServerless) {
    inMemoryStore = normalizeStore(undefined);
    return inMemoryStore;
  }

  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = normalizeStore(JSON.parse(raw));
    inMemoryStore = parsed;
    return parsed;
  } catch (err) {
    console.warn(
      "Analytics: failed to read/write data file, falling back to in-memory store.",
      err instanceof Error ? err.message : err
    );
    inMemoryStore = normalizeStore(undefined);

    // Try to write an initial file but don't fail if it errors
    try {
      await fs.writeFile(DATA_FILE, JSON.stringify(inMemoryStore, null, 2), "utf8");
    } catch {
      // ignore write errors on read-only filesystems
    }

    return inMemoryStore;
  }
}

async function saveStore(store: AnalyticsStore) {
  store.lastUpdated = new Date().toISOString();
  inMemoryStore = store;
  const isServerless = process.env.VERCEL === "1" || process.env.NODE_ENV === "production";
  if (isServerless) return;

  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(store, null, 2), "utf8");
  } catch (err) {
    console.warn(
      "Analytics: failed to persist analytics to disk; continuing with in-memory store.",
      err instanceof Error ? err.message : err
    );
  }
}

export async function GET() {
  const store = await ensureStore();
  return NextResponse.json(store, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const event = body?.event as AnalyticsEvent | undefined;
    const metadata = body && typeof body.metadata === "object" && body.metadata !== null ? (body.metadata as Record<string, unknown>) : undefined;

    if (!event) {
      return NextResponse.json({ ok: false, error: "Missing event type" }, { status: 400 });
    }

    const store = await ensureStore();
    if (store.totals[event] === undefined) store.totals[event] = 0;
    store.totals[event] += 1;

    let sanitizedMetadata: Record<string, unknown> | undefined;
    if (metadata) {
      try {
        sanitizedMetadata = JSON.parse(JSON.stringify(metadata));
      } catch (err) {
        console.warn("Failed to serialize analytics metadata", err);
      }
    }

    const entry: AnalyticsEntry = { event, metadata: sanitizedMetadata, timestamp: new Date().toISOString() };

    if (!Array.isArray(store.events)) store.events = [];
    store.events.push(entry);
    if (store.events.length > MAX_EVENTS) store.events = store.events.slice(-MAX_EVENTS);

    // If Supabase is configured, insert the event into the `analytics` table
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (supabaseUrl && serviceRoleKey) {
      try {
        const supabase = createClient(supabaseUrl, serviceRoleKey, {
          auth: { persistSession: false },
        });
        // Fire-and-forget insert so we don't block the response or risk timeouts.
        (async () => {
          try {
            const res = await supabase.from("analytics").insert([{ event, metadata: sanitizedMetadata ?? null }]);
            // res may contain an `error` property. Check safely using unknown and property checks
            const resObj: unknown = res;
            if (resObj && typeof resObj === "object" && "error" in resObj) {
              const maybeError = (resObj as { error?: { message?: unknown } }).error;
              let errMessage: string | undefined;
              if (maybeError && typeof maybeError === "object" && typeof (maybeError as { message?: unknown }).message === "string") {
                errMessage = (maybeError as { message?: string }).message;
              }
              console.warn("Supabase analytics insert error:", errMessage ?? resObj);
            }
          } catch (err) {
            console.warn("Supabase insert failed", err);
          }
        })();
      } catch (e) {
        console.warn("Supabase client init failed", e);
      }
    }

    await saveStore(store);

    return NextResponse.json({ ok: true, totals: store.totals, entry });
  } catch (error) {
    console.error("Analytics POST error", error);
    return NextResponse.json({ ok: false, error: "Failed to record analytics" }, { status: 500 });
  }
}
