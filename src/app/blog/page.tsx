import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles about product, technology, and building things.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Writing</h1>
      <p className="text-muted mb-14">
        Occasional thoughts on product, technology, and building things.
      </p>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0">
                <time className="text-sm text-muted font-mono w-32 shrink-0">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <div>
                  <h2 className="font-medium group-hover:opacity-60 transition-opacity">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted mt-0.5">
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
