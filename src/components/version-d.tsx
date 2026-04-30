import Link from "next/link";
import { getTranslations } from "next-intl/server";
import VentureCard from "./venture-card";
import type { Venture } from "./venture-card";
import FloatingObject from "./floating-object";

type VentureSpec = {
  id: "conversationlens" | "threadlift" | "lifemadeeasy" | "threed-space";
  link: string | null;
  status: Venture["status"];
  media: Venture["media"];
};

const ventureSpecs: VentureSpec[] = [
  {
    id: "conversationlens",
    link: "https://conversationlens.com?utm_source=kristynazackova.com&utm_medium=portfolio",
    status: "LIVE",
    media: [
      { type: "image", src: "/ventures/IMG_6681.jpeg", alt: "Dashboard" },
      { type: "image", src: "/ventures/IMG_6682.jpeg", alt: "Relationship Journey" },
      { type: "image", src: "/ventures/IMG_6674.jpeg", alt: "Health Score & Metrics" },
      { type: "image", src: "/ventures/IMG_6676.jpeg", alt: "AI Therapist Chat" },
      { type: "image", src: "/ventures/IMG_6677.jpeg", alt: "Features Overview" },
      { type: "image", src: "/ventures/IMG_6678.jpeg", alt: "Shared Dashboards" },
      { type: "image", src: "/ventures/IMG_6679.jpeg", alt: "Plans & Pricing" },
    ],
  },
  {
    id: "threadlift",
    link: "https://www.threadlift.io?utm_source=kristynazackova.com&utm_medium=portfolio",
    status: "LIVE",
    media: [],
  },
  {
    id: "lifemadeeasy",
    link: null,
    status: "QA",
    media: [],
  },
  {
    id: "threed-space",
    link: "https://lifeos.solutions",
    status: "BETA",
    media: [],
  },
];

const experienceIds = ["founder", "inmar", "bazaarvoice"] as const;

const capabilities: Array<{ id: string; category: "CORE" | "METHODS" | "DOMAINS" }> = [
  { id: "product-strategy", category: "CORE" },
  { id: "continuous-discovery", category: "CORE" },
  { id: "go-to-market", category: "CORE" },
  { id: "cross-team-leadership", category: "CORE" },
  { id: "user-research-ux", category: "METHODS" },
  { id: "data-analysis", category: "METHODS" },
  { id: "solution-architecture", category: "METHODS" },
  { id: "customer-journeys", category: "METHODS" },
  { id: "saas", category: "DOMAINS" },
  { id: "ai-ml-products", category: "DOMAINS" },
  { id: "martech", category: "DOMAINS" },
  { id: "agile-scrum", category: "DOMAINS" },
];

export default async function VersionD() {
  const t = await getTranslations("home");

  const ventures: Venture[] = ventureSpecs.map((spec) => ({
    title: t(`ventures.${spec.id}.title`),
    summary: t(`ventures.${spec.id}.summary`),
    why: t(`ventures.${spec.id}.why`),
    description: t(`ventures.${spec.id}.description`),
    link: spec.link,
    status: spec.status,
    media: spec.media,
  }));

  const grouped = capabilities.reduce((acc, c) => {
    if (!acc[c.category]) acc[c.category] = [];
    acc[c.category].push(c.id);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div
      data-theme="d"
      className="min-h-full flex flex-col"
      style={{ background: "#F8F8F7", color: "#000000" }}
    >
      <div className="relative z-10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

          {/* Hero */}
          <section
            className="pt-16 sm:pt-28 pb-16 sm:pb-24 mb-12 sm:mb-24 relative"
            style={{ background: "radial-gradient(circle at 30% 40%, #ffffff 0%, #f7f7f7 60%, #f3f3f3 100%)" }}
          >
            <div className="relative grid grid-cols-12 items-center">
              {/* Text block */}
              <div className="col-span-12 md:col-span-7 ml-0 max-w-[680px]">
                <h1
                  className="text-[36px] sm:text-[48px] md:text-[64px] leading-[1.08] tracking-[-0.02em] font-bold text-black animate-[fadeSlideIn_400ms_ease-out_both]"
                  style={{ transform: "translateX(-4px)" }}
                >
                  {t("heroTitle")}
                </h1>
                <div className="mt-5 flex items-start gap-3 sm:gap-4 animate-[fadeSlideIn_400ms_ease-out_100ms_both]">
                  <img
                    src="/kristyna.png"
                    alt="Kristyna Zackova"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300 shrink-0 mt-0.5"
                    style={{ border: "2px solid rgba(0,0,0,0.06)" }}
                  />
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="text-[15px] sm:text-[16px] font-medium text-black/80">
                      Kristyna Zackova
                    </div>
                    <div className="text-[13px] sm:text-[14px] text-gray-500">
                      {t.rich("heroRole", {
                        brand: (chunks) => (
                          <a
                            href="https://conversationlens.com?utm_source=kristynazackova.com&utm_medium=portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors duration-150"
                          >
                            {chunks}
                          </a>
                        ),
                      })}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-6 animate-[fadeSlideIn_400ms_ease-out_150ms_both]">
                  <a href="https://www.linkedin.com/in/k-zackova/?utm_source=kristynazackova.com&utm_medium=portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors duration-150" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://x.com/zackovak?utm_source=kristynazackova.com&utm_medium=portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors duration-150">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#systems" className="text-sm text-gray-500 hover:text-black transition-colors duration-150">
                    {t("viewWork")} &darr;
                  </a>
                </div>
              </div>

              {/* Floating 3D object */}
              <div className="hidden md:flex col-span-5 relative justify-center items-center">
                <FloatingObject />
              </div>
            </div>
          </section>

          {/* Ventures */}
          <section id="systems" className="py-14">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#4B5563" }}>
                {t("venturesHeading")}
              </h2>
              <span className="text-xs font-mono" style={{ color: "#4B5563" }}>{t("venturesCount", { count: ventures.length })}</span>
            </div>
            <div className="space-y-3">
              {ventures.map((v) => (
                <VentureCard key={v.title} venture={v} />
              ))}
            </div>
          </section>

          <div className="h-px mx-auto max-w-[200px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

          {/* Experience */}
          <section id="experience" className="py-14">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#4B5563" }}>
              {t("experienceHeading")}
            </h2>
            <div className="space-y-0">
              {experienceIds.map((id) => (
                <div key={id} className="py-5 border-t first:border-t-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 md:items-baseline" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
                  <div className="md:col-span-2">
                    <span className="text-xs font-mono font-semibold" style={{ color: "#4B5563" }}>{t(`experience.${id}.period`)}</span>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-sm font-bold">{t(`experience.${id}.role`)}</p>
                    <p className="text-xs font-medium" style={{ color: "#800020" }}>{t(`experience.${id}.company`)}</p>
                  </div>
                  <div className="md:col-span-6 mt-1 md:mt-0">
                    <p className="text-xs font-mono mb-1" style={{ color: "#4B5563" }}>{t(`experience.${id}.scope`)}</p>
                    <p className="text-sm" style={{ color: "#4B5563" }}>{t(`experience.${id}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px mx-auto max-w-[200px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

          {/* Writing */}
          <section className="py-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#4B5563" }}>{t("writingHeading")}</h2>
                <p className="text-xs" style={{ color: "#6B7280" }}>{t("writingTagline")}</p>
              </div>
              <Link href="/blog" className="text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-100 hover:bg-black/5 self-start sm:self-auto shrink-0" style={{ color: "#000", background: "rgba(0,0,0,0.03)" }}>
                {t("writingCta")} &rarr;
              </Link>
            </div>
          </section>

          {/* Mentorship */}
          <section className="py-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#4B5563" }}>{t("mentorshipHeading")}</h2>
                <p className="text-xs" style={{ color: "#6B7280" }}>{t("mentorshipTagline")}</p>
              </div>
              <a
                href="https://mentorcruise.com/mentor/kristynazackova/?source=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto shrink-0"
              >
                <img
                  src="https://cdn.mentorcruise.com/img/banner/sky-mentoring-badge.svg"
                  width="120"
                  alt="MentorCruise"
                />
              </a>
            </div>
          </section>

          <div className="h-px mx-auto max-w-[200px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

          {/* Capabilities */}
          <section className="py-14">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#4B5563" }}>
              {t("capabilitiesHeading")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs font-mono font-bold mb-3" style={{ color: "#800020" }}>{t(`capabilityCategories.${category}`)}</p>
                  <div className="space-y-2">
                    {items.map((id) => (
                      <div key={id} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full" style={{ background: "#000" }} />
                        <span className="text-sm" style={{ color: "#4B5563" }}>{t(`capabilityLabels.${id}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px mx-auto max-w-[200px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

          {/* Contact */}
          <section className="py-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-sm font-bold mb-1">{t("contactHeading")}</h2>
                <p className="text-xs" style={{ color: "#6B7280" }}>{t("contactTagline")}</p>
              </div>
              <a href="mailto:kristynazackova@gmail.com" className="text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-100 hover:bg-black/5 self-start sm:self-auto shrink-0" style={{ color: "#000", background: "rgba(0,0,0,0.03)" }}>
                {t("contactCta")} &rarr;
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
