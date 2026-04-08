import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "@/lib/mdx-remote";

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
    <article className="max-w-2xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="text-sm text-muted hover:text-foreground transition-colors mb-12 inline-block"
      >
        &larr; Back
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight mb-3">
          {post.title}
        </h1>
        <time className="text-sm text-muted font-mono">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <div className="prose max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
