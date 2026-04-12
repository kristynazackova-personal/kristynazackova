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

  const handleLike = () => {
    if (liked) return;

    setLiked(true);
    setAnimating(true);
    localStorage.setItem(`liked:${slug}`, "true");

    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(`likes:${slug}`, String(newCount));

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mp = (window as any).mixpanel;
      if (mp?.track) mp.track("Article Liked", { slug });
    } catch {}

    fetch(`/api/likes/${slug}`, { method: "POST" })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if (data?.count) {
          setCount(data.count);
          localStorage.setItem(`likes:${slug}`, String(data.count));
        }
      })
      .catch(() => {});

    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <button
      onClick={handleLike}
      type="button"
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
