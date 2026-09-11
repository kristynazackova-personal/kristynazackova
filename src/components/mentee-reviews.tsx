"use client";

import { useEffect, useRef, useState } from "react";

type TextReview = {
  kind: "text";
  name: string;
  source: "MentorCruise" | "ADPList";
  /** ISO date the mentee posted the review on the platform. */
  date: string;
  meta: string;
  quote: string;
};

type ImageReview = {
  kind: "image";
  name: string;
  source: "ADPList";
  /** ISO date the mentee posted the review on the platform. */
  date: string;
  meta: string;
  src: string;
  alt: string;
};

type Review = TextReview | ImageReview;

const MENTORCRUISE_URL = "https://mentorcruise.com/mentor/kristynazackova/";
const ADPLIST_URL = "https://adplist.org/mentors/kristyna-zackova";

const SOURCE_URL: Record<Review["source"], string> = {
  MentorCruise: MENTORCRUISE_URL,
  ADPList: ADPLIST_URL,
};

const reviews: Review[] = [
  {
    kind: "text",
    name: "John",
    source: "MentorCruise",
    date: "2026-05-12",
    meta: "Standard Plan · 1 month",
    quote:
      "This was an entirely new experience for me, and I wasn’t sure what to expect. I had ideas about where I wanted to go in my professional work, but I didn’t know where to start or what assumptions I might be making. What first stood out to me about Kristyna was the breadth of her experience, especially across disciplines I was already interested in. She has been very responsive and worked with me to line out the best direction for me to pursue. She was thorough in the questions she asked, objectively assessed where I was, and has tailored our sessions to help me reach my goals as quickly as possible. Kristyna provides a comfortable but challenging environment and is able to tie new concepts directly into my current work experiences. She is very knowledgeable and has clearly put a lot of effort into helping me achieve my goals. After only a few sessions, those goals feel far more attainable than they did before.",
  },
  {
    kind: "image",
    name: "Patricia Charles",
    source: "ADPList",
    date: "2026-04-18",
    meta: "Product Manager, Chartered Banker",
    src: "https://adplist-users-production.s3.us-east-1.amazonaws.com/6f13f02a2d1713dace21475622c04d62/reviews/bee6424a-b1b2-5ff9-bd67-479896aa7b5c.webp",
    alt: "ADPList review by Patricia Charles: I had an outstanding session with Kristýna, who excelled in every aspect of product management and mentorship. Her structured approach and communication skills made complex product management concepts clear and relatable. She provided practical guidance on day-to-day operations which was insightful. Highly recommend, Kristýna!",
  },
  {
    kind: "text",
    name: "Selena",
    source: "MentorCruise",
    date: "2026-06-29",
    meta: "Standard Plan · 2 months",
    quote:
      "Kristýna has honestly been one of the best mentors I’ve met here. She truly thinks from the mentee’s side, and understands how confusing early career decisions can feel, especially in tech, and our conversations always feel genuine and actionable. She’s also incredibly organized and always comes prepared for our sessions, which I really respect. As a woman in the industry, she is a true inspiration. Really grateful!",
  },
  {
    kind: "image",
    name: "Upasana Dayananda",
    source: "ADPList",
    date: "2026-04-02",
    meta: "Product Manager, Brillio",
    src: "https://adplist-users-production.s3.us-east-1.amazonaws.com/6f13f02a2d1713dace21475622c04d62/reviews/d0796fa6-c997-568e-87c3-4cdd5dea1cec.webp",
    alt: "ADPList review by Upasana Dayananda: It was my first mentored session after a while and this is after I pivoted from Engineering into Product Management. Kristyna is highly skilled and qualified in this domain. She was able to navigate me through a situation where I felt stuck. She was able to help me start somewhere because I had multiple things going on in my head. Right now I feel like I have a direction of where to go to figure out what I’m cut out for.",
  },
  {
    kind: "text",
    name: "Austin",
    source: "MentorCruise",
    date: "2026-09-06",
    meta: "Standard Plan · 3 months",
    quote:
      "Kristyna is a great mentor, she has very valuable insights that I’m sure will come in handy in the future. Very gracious with her time as well, thank you!",
  },
  {
    kind: "text",
    name: "Austin",
    source: "MentorCruise",
    date: "2026-09-06",
    meta: "Standard Plan · 3 months",
    quote: "Great mentor, I appreciate our calls :)",
  },
];

// Newest first, by the date the mentee posted on the platform.
const sortedReviews = [...reviews].sort((a, b) => b.date.localeCompare(a.date));

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

const CLAMP_CHARS = 170;

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#800020" aria-hidden="true">
          <path d="M12 2.5l2.9 6.1 6.7.8-4.9 4.6 1.3 6.6L12 17.3l-6 3.3 1.3-6.6L2.4 9.4l6.7-.8L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function SourceLink({ source }: { source: Review["source"] }) {
  return (
    <a
      href={SOURCE_URL[source]}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[10px] font-mono tracking-wider uppercase hover:underline whitespace-nowrap shrink-0"
      style={{ color: "#9CA3AF" }}
    >
      {source} {"↗"}
    </a>
  );
}

function TextCard({ review }: { review: TextReview }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.quote.length > CLAMP_CHARS;
  const text =
    isLong && !expanded ? review.quote.slice(0, CLAMP_CHARS).trimEnd() + "…" : review.quote;

  return (
    <figure
      className="rounded-lg border p-4 flex flex-col gap-2.5 h-full w-[270px] shrink-0 snap-start"
      style={{ borderColor: "#E5E7EB", background: "#FEFEFE" }}
    >
      <Stars />
      <blockquote className="text-[13px] leading-[1.55] flex-1" style={{ color: "#374151" }}>
        {text}
        {isLong && (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="text-xs font-medium underline underline-offset-2 cursor-pointer"
              style={{ color: "#800020" }}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          </>
        )}
      </blockquote>
      <figcaption className="pt-2.5 border-t flex items-end justify-between gap-3" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <div className="min-w-0">
          <p className="text-[13px] font-bold truncate">{review.name}</p>
          <p className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>{review.meta} · {formatDate(review.date)}</p>
        </div>
        <SourceLink source={review.source} />
      </figcaption>
    </figure>
  );
}

function ImageCard({ review }: { review: ImageReview }) {
  return (
    <figure
      className="rounded-lg border overflow-hidden flex flex-col h-full w-[270px] shrink-0 snap-start"
      style={{ borderColor: "#E5E7EB", background: "#FEFEFE" }}
    >
      <a href={SOURCE_URL[review.source]} target="_blank" rel="noopener noreferrer" className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.src}
          alt={review.alt}
          loading="lazy"
          className="w-full block"
          style={{ aspectRatio: "3360 / 2480", background: "#1a1a1a" }}
        />
      </a>
      <figcaption className="p-4 pt-3 flex items-end justify-between gap-3 flex-1">
        <div className="min-w-0">
          <p className="text-[13px] font-bold truncate">{review.name}</p>
          <p className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>{review.meta} · {formatDate(review.date)}</p>
        </div>
        <SourceLink source={review.source} />
      </figcaption>
    </figure>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

export default function MenteeReviews() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const itemStep = () => {
    const el = stripRef.current;
    const item = el?.querySelector<HTMLElement>("[data-review-item]");
    return item ? item.offsetWidth + 16 : 286;
  };

  const scrollBy = (dir: -1 | 1) => {
    stripRef.current?.scrollBy({ left: dir * itemStep(), behavior: "smooth" });
  };

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const measure = () => {
      setAtStart(el.scrollLeft <= 1);
      setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
    };
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
    };
  }, []);

  const arrowBtn =
    "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full border shadow-md transition-all duration-100 hover:bg-black/5 cursor-pointer disabled:opacity-0 disabled:pointer-events-none";

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
        <p className="text-[10px] font-bold font-mono tracking-wider shrink-0" style={{ color: "#800020" }}>
          WHAT MENTEES SAY
        </p>
        <p className="text-[11px]" style={{ color: "#6B7280" }}>
          All 5-star, newest first. Read them on{" "}
          <a href={MENTORCRUISE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black">MentorCruise</a>
          {" "}and{" "}
          <a href={ADPLIST_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black">ADPList</a>.
        </p>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          className={`${arrowBtn} -left-3 sm:-left-4`}
          style={{ borderColor: "#E5E7EB", background: "#FFFFFF", color: "#4B5563" }}
          aria-label="Previous review"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          className={`${arrowBtn} -right-3 sm:-right-4`}
          style={{ borderColor: "#E5E7EB", background: "#FFFFFF", color: "#4B5563" }}
          aria-label="Next review"
        >
          <Chevron dir="right" />
        </button>

        <div
          ref={stripRef}
          className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide items-stretch"
        >
          {sortedReviews.map((r, i) => (
            <div key={i} data-review-item className="shrink-0 flex">
              {r.kind === "image" ? <ImageCard review={r} /> : <TextCard review={r} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
