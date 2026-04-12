import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "@/lib/mdx-remote";
import LikeButton from "@/components/like-button";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="max-w-[700px] mx-auto px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-muted hover:text-accent transition-colors duration-250 mb-14 inline-block"
      >
        &larr; Back to writing
      </Link>

      <header className="mb-12">
        <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm" style={{ color: "#4B5563" }}>By Kristyna Zackova</span>
          <span style={{ color: "rgba(0,0,0,0.2)" }}>&middot;</span>
          <time className="text-sm text-muted font-mono">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium bg-accent-bg text-accent rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="prose max-w-none">
        <MDXRemote source={post.content} />
      </div>

      <div className="mt-12 pt-8 flex items-center gap-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <LikeButton slug={slug} />
        <span className="text-xs" style={{ color: "#9CA3AF" }}>Found this useful?</span>
      </div>
    </article>
  );
}
