"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function MediaCarousel({ media }: { media: VentureMedia[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const total = media.length;

  const scrollStrip = (dir: -1 | 1) => {
    const el = stripRef.current;
    if (!el) return;
    const item = el.querySelector<HTMLElement>("[data-media-item]");
    const step = item ? item.offsetWidth + 16 : 240;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const show = (i: number) => setLightbox(((i % total) + total) % total);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowRight") show(lightbox + 1);
      else if (e.key === "ArrowLeft") show(lightbox - 1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, total]);

  const arrowBtn =
    "flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-100 hover:bg-black/5 disabled:opacity-30 cursor-pointer";

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p
          className="text-[10px] font-bold font-mono tracking-wider"
          style={{ color: "#800020" }}
        >
          PREVIEW
        </p>
        {total > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollStrip(-1)}
              className={arrowBtn}
              style={{ borderColor: "#E5E7EB", color: "#4B5563" }}
              aria-label="Scroll previews left"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollStrip(1)}
              className={arrowBtn}
              style={{ borderColor: "#E5E7EB", color: "#4B5563" }}
              aria-label="Scroll previews right"
            >
              <Chevron dir="right" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={stripRef}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
      >
        {media.map((m, i) => (
          <button
            key={i}
            type="button"
            data-media-item
            onClick={() => setLightbox(i)}
            className="snap-start shrink-0 flex flex-col items-center cursor-zoom-in group"
            aria-label={`Expand preview: ${m.alt}`}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-md transition-shadow duration-150 group-hover:shadow-lg"
              style={{ width: "220px", background: "#F3F4F6" }}
            >
              {m.type === "video" ? (
                <video src={m.src} muted playsInline className="w-full block" />
              ) : (
                <img src={m.src} alt={m.alt} className="w-full block" />
              )}
            </div>
            <p className="text-[10px] text-center mt-2" style={{ color: "#9CA3AF" }}>
              {m.alt}
            </p>
          </button>
        ))}
      </div>

      {lightbox !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)" }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={media[lightbox].alt}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); show(lightbox - 1); }}
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <Chevron dir="left" size={20} />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); show(lightbox + 1); }}
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <Chevron dir="right" size={20} />
                </button>
              </>
            )}

            <figure
              className="flex flex-col items-center max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {media[lightbox].type === "video" ? (
                <video
                  src={media[lightbox].src}
                  controls
                  autoPlay
                  playsInline
                  className="rounded-2xl"
                  style={{ maxHeight: "82vh", maxWidth: "min(92vw, 520px)" }}
                />
              ) : (
                <img
                  src={media[lightbox].src}
                  alt={media[lightbox].alt}
                  className="rounded-2xl"
                  style={{ maxHeight: "82vh", maxWidth: "min(92vw, 520px)", objectFit: "contain" }}
                />
              )}
              <figcaption className="mt-3 text-xs text-center" style={{ color: "#D1D5DB" }}>
                {media[lightbox].alt}
                {total > 1 && (
                  <span className="ml-2 font-mono" style={{ color: "#9CA3AF" }}>
                    {lightbox + 1} / {total}
                  </span>
                )}
              </figcaption>
            </figure>
          </div>,
          document.body,
        )}
    </div>
  );
}

function Chevron({ dir, size = 14 }: { dir: "left" | "right"; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface VentureMedia {
  type: "image" | "video";
  src: string;
  alt: string;
}

export interface Venture {
  title: string;
  summary: string;
  link: string | null;
  status: string;
  why: string;
  description: string;
  media: VentureMedia[];
}

export default function VentureCard({ venture }: { venture: Venture }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div
      className="border rounded-lg transition-all duration-150"
      style={{
        borderColor: open ? "#000" : "#E5E7EB",
        background: "#FEFEFE",
      }}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
      >
        <div className="flex items-center gap-4 min-w-0">
          <h3 className="text-sm font-bold truncate">{venture.title}</h3>
          <span
            className="text-[10px] font-bold font-mono tracking-wider px-2 py-0.5 rounded shrink-0"
            style={{
              background: venture.status === "LIVE" ? "#FDF2F4" : "#F3F4F6",
              color: venture.status === "LIVE" ? "#800020" : "#4B5563",
            }}
          >
            {venture.status}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {venture.link && (
            <a
              href={venture.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[10px] font-medium font-mono tracking-wider px-2 py-1 rounded transition-all duration-100 hover:bg-black/5"
              style={{ color: "#000", background: "rgba(0,0,0,0.03)" }}
            >
              VISIT {"\u2197"}
            </a>
          )}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-150"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              color: "#4B5563",
            }}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Summary — always visible */}
      <div className="px-5 pb-4 -mt-1">
        <p className="text-xs leading-[1.5]" style={{ color: "#4B5563" }}>
          {venture.summary}
        </p>
      </div>

      {/* Expandable content */}
      <div
        className="overflow-hidden transition-all duration-200"
        style={{
          maxHeight: open ? `${height}px` : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="px-5 pb-5">
          <div className="border-t pt-5" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
            {/* Why */}
            <div className="mb-5">
              <p
                className="text-[10px] font-bold font-mono tracking-wider mb-2"
                style={{ color: "#800020" }}
              >
                WHY I BUILT THIS
              </p>
              <p className="text-sm leading-[1.6]" style={{ color: "#4B5563" }}>
                {venture.why}
              </p>
            </div>

            {/* Description */}
            <div className="mb-5">
              <p
                className="text-[10px] font-bold font-mono tracking-wider mb-2"
                style={{ color: "#800020" }}
              >
                WHAT IT DOES
              </p>
              <p className="text-sm leading-[1.6]" style={{ color: "#4B5563" }}>
                {venture.description}
              </p>
            </div>

            {/* Media */}
            {venture.media.length > 0 && (
              <MediaCarousel media={venture.media} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
