import { cookies, headers } from "next/headers";

export const locales = ["en", "cs"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

function pickFromAcceptLanguage(accept: string): Locale {
  const ranked = accept
    .split(",")
    .map((entry) => {
      const [tag, ...params] = entry.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? parseFloat(qParam.split("=")[1]) : 1;
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (tag.startsWith("cs") || tag.startsWith("sk")) return "cs";
    if (tag.startsWith("en")) return "en";
  }
  return defaultLocale;
}

export async function resolveLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const headerStore = await headers();
  const accept = headerStore.get("accept-language") ?? "";
  return pickFromAcceptLanguage(accept);
}
