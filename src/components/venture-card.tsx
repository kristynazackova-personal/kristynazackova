"use client";

import { useState, useRef, useEffect } from "react";

function MediaCarousel({ media }: { media: VentureMedia[] }) {
  const [current, setCurrent] = useState(0);
  const total = media.length;

  return (
    <div>
      <p
        className="text-[10px] font-bold font-mono tracking-wider mb-3"
        style={{ color: "#800020" }}
      >
        PREVIEW
      </p>
      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
        {media.map((m, i) => (
          <div
            key={i}
            className="snap-center shrink-0 flex flex-col items-center"
          >
            {/* Phone frame */}
            <div
              className="relative rounded-[28px] overflow-hidden shadow-lg"
              style={{
                width: "220px",
                border: "6px solid #1a1a1a",
                background: "#1a1a1a",
              }}
            >
              {/* Notch */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 z-10 rounded-b-xl"
                style={{
                  width: "80px",
                  height: "16px",
                  background: "#1a1a1a",
                }}
              />
              {m.type === "video" ? (
                <video
                  src={m.src}
                  controls
                  playsInline
                  muted
                  className="w-full rounded-[22px]"
                />
              ) : (
                <img
                  src={m.src}
                  alt={m.alt}
                  className="w-full rounded-[22px]"
                />
              )}
            </div>
            {/* Caption */}
            <p className="text-[10px] text-center mt-2" style={{ color: "#9CA3AF" }}>
              {m.alt}
            </p>
          </div>
        ))}
      </div>
      {total > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {media.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-150"
              style={{
                background: i === current ? "#800020" : "rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </div>
      )}
    </div>
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
