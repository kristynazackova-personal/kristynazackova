"use client";

import { useState, useEffect } from "react";

export default function LikeButton({ slug }: { slug: string }) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`liked:${slug}`);
    if (stored === "true") setLiked(true);

    const storedCount = localStorage.getItem(`likes:${slug}`);
    if (storedCount) setCount(parseInt(storedCount, 10));

    // Try fetching from API, fall back to localStorage
    fetch(`/api/likes/${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data) => {
        setCount(data.count);
        localStorage.setItem(`likes:${slug}`, String(data.count));
      })
      .catch(() => {});
  }, [slug]);

  const handleLike = async () => {
    if (liked) return;

    setLiked(true);
    setAnimating(true);
    localStorage.setItem(`liked:${slug}`, "true");

    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(`likes:${slug}`, String(newCount));

    // Track in Mixpanel
    if (typeof window !== "undefined" && (window as Record<string, unknown>).mixpanel) {
      (window as Record<string, unknown> & { mixpanel: { track: (event: string, props: Record<string, string>) => void } }).mixpanel.track("Article Liked", { slug });
    }

    // Try API, ignore if it fails
    try {
      const res = await fetch(`/api/likes/${slug}`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        setCount(data.count);
        localStorage.setItem(`likes:${slug}`, String(data.count));
      }
    } catch {}

    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <button
      onClick={handleLike}
      disabled={liked}
      className="flex items-center gap-2 text-sm transition-all duration-150"
      style={{
        color: liked ? "#800020" : "#9CA3AF",
        cursor: liked ? "default" : "pointer",
      }}
      aria-label={liked ? "You liked this article" : "Like this article"}
    >
      <span
        className="text-xl transition-transform duration-300"
        style={{
          transform: animating ? "scale(1.3)" : "scale(1)",
          display: "inline-block",
        }}
      >
        {"\u{1F44D}"}
      </span>
      <span className="font-mono text-xs">
        {count}
      </span>
    </button>
  );
}
