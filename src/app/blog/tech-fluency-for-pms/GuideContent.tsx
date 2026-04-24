"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GUIDE_STYLES } from "./styles";
import { GUIDE_BODY } from "./body";

type Mode = "read" | "flashcard";

export default function GuideContent({ fontClass }: { fontClass: string }) {
  const [mode, setMode] = useState<Mode>("read");
  const [showBackTop, setShowBackTop] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onTermClick = (ev: Event) => {
      if (mode !== "flashcard") return;
      const target = ev.target as HTMLElement;
      const term = target.closest(".term");
      if (term) term.classList.toggle("revealed");
    };

    const terms = root.querySelectorAll(".term");
    terms.forEach((t) => t.addEventListener("click", onTermClick));

    if (mode === "read") {
      terms.forEach((t) => t.classList.remove("revealed"));
    }

    return () => {
      terms.forEach((t) => t.removeEventListener("click", onTermClick));
    };
  }, [mode]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const links = root.querySelectorAll<HTMLAnchorElement>(".toc a[href^='#']");
    const onClick = (ev: Event) => {
      const anchor = ev.currentTarget as HTMLAnchorElement;
      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      ev.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    links.forEach((l) => l.addEventListener("click", onClick));
    return () => links.forEach((l) => l.removeEventListener("click", onClick));
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      ref={rootRef}
      className={`pm-guide ${fontClass} ${mode === "flashcard" ? "flashcard" : ""}`}
    >
      <style dangerouslySetInnerHTML={{ __html: GUIDE_STYLES }} />

      <div className="wrapper">
        <div className="top-bar">
          <Link href="/blog" className="top-back">&larr; Back to writing</Link>
        </div>

        <header className="masthead">
          <div className="masthead-meta">
            <span>A Pocket Guide</span>
            <span>Vol. I</span>
            <span>For Interview Prep</span>
          </div>
          <h1>
            Tech Fluency <span className="amp">&amp;</span> the Non-Technical PM
          </h1>
          <p className="tagline">
            A field manual for holding your own in a room full of engineers.
          </p>
        </header>

        <div className="intro">
          <p className="dropcap">
            You don&rsquo;t need to code to work with engineers well &mdash; you need to understand the shape of their world. The goal of this guide isn&rsquo;t to turn you into a developer. It&rsquo;s to give you enough vocabulary and context that you can follow a technical conversation, ask good questions, and earn credibility by showing you&rsquo;ve done the homework.
          </p>
          <p>
            Read it once through. Then, in the day or two before your interview, flip it into flashcard mode (button below) and quiz yourself. If anyone uses a term you don&rsquo;t recognize in the interview, the best move is always to say: <em>&ldquo;Can you walk me through that? I want to make sure I understand it the way you do.&rdquo;</em> That&rsquo;s not weakness &mdash; it&rsquo;s good product behavior.
          </p>
        </div>

        <div className="study-controls">
          <button
            className={`study-btn ${mode === "read" ? "active" : ""}`}
            onClick={() => setMode("read")}
            type="button"
          >
            Read Mode
          </button>
          <button
            className={`study-btn ${mode === "flashcard" ? "active" : ""}`}
            onClick={() => setMode("flashcard")}
            type="button"
          >
            Flashcard Mode
          </button>
        </div>

        <div dangerouslySetInnerHTML={{ __html: GUIDE_BODY }} />

        <div className="colophon">
          <span className="mark">&#10087;</span>
          You don&rsquo;t need to know everything. You need to know enough to listen well, ask sharp questions,
          <br />
          and earn the right to be in the room. You already have the hardest part &mdash; curiosity. Good luck.
        </div>
      </div>

      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className={`back-top ${showBackTop ? "visible" : ""}`}
      >
        &uarr;
      </button>
    </div>
  );
}
