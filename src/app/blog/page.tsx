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
      <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl font-semibold tracking-tight mb-3">
        Writing
      </h1>
      <p className="text-muted text-lg mb-16">
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
              className="group block py-6 border-b border-border/60 hover:bg-accent-bg/50 -mx-4 px-4 rounded-lg transition-all duration-250"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-0">
                <time className="text-sm text-muted font-mono w-36 shrink-0">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <div>
                  <h2 className="font-[family-name:var(--font-serif)] text-xl font-semibold group-hover:text-accent transition-colors duration-250">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted mt-1">
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
