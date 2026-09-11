"use client";

import { useState } from "react";

type TextReview = {
  kind: "text";
  name: string;
  source: "MentorCruise" | "ADPList";
  meta: string;
  quote: string;
};

type ImageReview = {
  kind: "image";
  name: string;
  source: "ADPList";
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
    meta: "Standard Plan · 1 month · May 2026",
    quote:
      "This was an entirely new experience for me, and I wasn’t sure what to expect. I had ideas about where I wanted to go in my professional work, but I didn’t know where to start or what assumptions I might be making. What first stood out to me about Kristyna was the breadth of her experience, especially across disciplines I was already interested in. She has been very responsive and worked with me to line out the best direction for me to pursue. She was thorough in the questions she asked, objectively assessed where I was, and has tailored our sessions to help me reach my goals as quickly as possible. Kristyna provides a comfortable but challenging environment and is able to tie new concepts directly into my current work experiences. She is very knowledgeable and has clearly put a lot of effort into helping me achieve my goals. After only a few sessions, those goals feel far more attainable than they did before.",
  },
  {
    kind: "image",
    name: "Patricia Charles",
    source: "ADPList",
    meta: "Product Manager, Chartered Banker · April 2026",
    src: "https://adplist-users-production.s3.us-east-1.amazonaws.com/6f13f02a2d1713dace21475622c04d62/reviews/bee6424a-b1b2-5ff9-bd67-479896aa7b5c.webp",
    alt: "ADPList review by Patricia Charles: I had an outstanding session with Kristýna, who excelled in every aspect of product management and mentorship. Her structured approach and communication skills made complex product management concepts clear and relatable. She provided practical guidance on day-to-day operations which was insightful. Highly recommend, Kristýna!",
  },
  {
    kind: "text",
    name: "Selena",
    source: "MentorCruise",
    meta: "Standard Plan · 2 months · June 2026",
    quote:
      "Kristýna has honestly been one of the best mentors I’ve met here. She truly thinks from the mentee’s side, and understands how confusing early career decisions can feel, especially in tech, and our conversations always feel genuine and actionable. She’s also incredibly organized and always comes prepared for our sessions, which I really respect. As a woman in the industry, she is a true inspiration. Really grateful!",
  },
  {
    kind: "image",
    name: "Upasana Dayananda",
    source: "ADPList",
    meta: "Product Manager, Brillio · April 2026",
    src: "https://adplist-users-production.s3.us-east-1.amazonaws.com/6f13f02a2d1713dace21475622c04d62/reviews/d0796fa6-c997-568e-87c3-4cdd5dea1cec.webp",
    alt: "ADPList review by Upasana Dayananda: It was my first mentored session after a while and this is after I pivoted from Engineering into Product Management. Kristyna is highly skilled and qualified in this domain. She was able to navigate me through a situation where I felt stuck. She was able to help me start somewhere because I had multiple things going on in my head. Right now I feel like I have a direction of where to go to figure out what I’m cut out for.",
  },
  {
    kind: "text",
    name: "Austin",
    source: "MentorCruise",
    meta: "Standard Plan · 3 months · September 2026",
    quote:
      "Kristyna is a great mentor, she has very valuable insights that I’m sure will come in handy in the future. Very gracious with her time as well, thank you!",
  },
  {
    kind: "text",
    name: "Austin",
    source: "MentorCruise",
    meta: "Standard Plan · 3 months · September 2026",
    quote: "Great mentor, I appreciate our calls :)",
  },
];

const CLAMP_CHARS = 420;

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
      className="rounded-lg border p-5 flex flex-col gap-3 h-full"
      style={{ borderColor: "#E5E7EB", background: "#FEFEFE" }}
    >
      <Stars />
      <blockquote className="text-sm leading-[1.6] flex-1" style={{ color: "#374151" }}>
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
      <figcaption className="pt-3 border-t flex items-end justify-between gap-3" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <div className="min-w-0">
          <p className="text-sm font-bold truncate">{review.name}</p>
          <p className="text-[11px]" style={{ color: "#6B7280" }}>{review.meta}</p>
        </div>
        <SourceLink source={review.source} />
      </figcaption>
    </figure>
  );
}

function ImageCard({ review }: { review: ImageReview }) {
  return (
    <figure
      className="rounded-lg border overflow-hidden flex flex-col h-full"
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
      <figcaption className="p-5 pt-4 flex items-end justify-between gap-3 flex-1">
        <div className="min-w-0">
          <p className="text-sm font-bold truncate">{review.name}</p>
          <p className="text-[11px]" style={{ color: "#6B7280" }}>{review.meta}</p>
        </div>
        <SourceLink source={review.source} />
      </figcaption>
    </figure>
  );
}

export default function MenteeReviews() {
  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
        <p className="text-[10px] font-bold font-mono tracking-wider" style={{ color: "#800020" }}>
          WHAT MENTEES SAY
        </p>
        <p className="text-[11px]" style={{ color: "#6B7280" }}>
          All 5-star. Read them on{" "}
          <a href={MENTORCRUISE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black">MentorCruise</a>
          {" "}and{" "}
          <a href={ADPLIST_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black">ADPList</a>.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r, i) =>
          r.kind === "image" ? <ImageCard key={i} review={r} /> : <TextCard key={i} review={r} />,
        )}
      </div>
    </div>
  );
}
