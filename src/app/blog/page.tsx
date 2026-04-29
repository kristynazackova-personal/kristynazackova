import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on product, technology, and building things.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-[800px] mx-auto px-6 py-24">
      <p className="mono-caption mb-4">● 03 — Writing</p>
      <h1 className="text-4xl sm:text-[56px] font-medium tracking-[-0.03em] leading-[1.02] mb-4" style={{ color: "var(--color-ink)" }}>
        A path, <span style={{ color: "var(--color-accent)" }}>not a ladder</span>.
      </h1>
      <p className="text-[18px] leading-[1.5] mb-16" style={{ color: "var(--color-mute)" }}>
        Occasional thoughts on product, technology, and building things.
      </p>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <div className="space-y-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-lift group block p-5 -mx-4 rounded-[20px] transition-all"
              style={{ background: "var(--color-card)", border: "1px solid var(--color-rule)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <time className="mono-caption w-36 shrink-0">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <div>
                  <h2 className="text-[22px] font-medium tracking-[-0.025em] leading-[1.2] group-hover:text-[color:var(--color-accent)] transition-colors duration-200" style={{ color: "var(--color-ink)" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm mt-1" style={{ color: "var(--color-mute)" }}>
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
