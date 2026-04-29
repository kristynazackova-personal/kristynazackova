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
        className="mono-caption mb-14 inline-block hover:text-[color:var(--color-accent)] transition-colors duration-200"
      >
        ← Back to writing
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl sm:text-[40px] font-medium tracking-[-0.03em] leading-[1.1] mb-4" style={{ color: "var(--color-ink)" }}>
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm" style={{ color: "var(--color-mute)" }}>By Kristyna Zackova</span>
          <span style={{ color: "var(--color-rule)" }}>·</span>
          <time className="mono-caption">
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
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                  style={{ background: "rgba(168,50,74,0.08)", color: "var(--color-accent)" }}
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

      <div className="mt-12 pt-8 flex items-center gap-3" style={{ borderTop: "1px solid var(--color-rule)" }}>
        <LikeButton slug={slug} />
        <span className="text-xs" style={{ color: "var(--color-mute)" }}>Found this useful?</span>
      </div>
    </article>
  );
}
