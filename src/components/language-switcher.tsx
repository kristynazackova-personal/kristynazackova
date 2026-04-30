"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { setLocaleAction } from "@/app/actions/set-locale";
import { locales, type Locale } from "@/i18n/locale";

const labels: Record<Locale, string> = {
  en: "EN",
  cs: "CS",
};

export default function LanguageSwitcher() {
  const current = useLocale() as Locale;
  const t = useTranslations("languageSwitcher");
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={t("label")}
    >
      {locales.map((code) => {
        const active = code === current;
        return (
          <button
            key={code}
            type="button"
            onClick={() =>
              !active &&
              startTransition(() => {
                setLocaleAction(code);
              })
            }
            disabled={isPending || active}
            aria-pressed={active}
            className="text-xs font-medium uppercase tracking-wider px-2 py-1 rounded transition-all duration-100 disabled:opacity-100"
            style={{
              color: active ? "#000" : "#4B5563",
              background: active ? "rgba(0,0,0,0.05)" : "transparent",
              opacity: isPending && !active ? 0.5 : 1,
              cursor: active ? "default" : "pointer",
            }}
          >
            {labels[code]}
          </button>
        );
      })}
    </div>
  );
}
