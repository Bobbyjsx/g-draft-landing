import { getDocBySlug } from "@/lib/docs";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

interface DocPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) return {};

  return {
    title: doc.meta.title || doc.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    description: doc.meta.description || `Documentation for g-draft: ${doc.slug}. Learn how to automate your Git workflow with AI agents.`,
    openGraph: {
      title: doc.meta.title,
      description: doc.meta.description,
      type: "article",
    },
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <article className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-500 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/5">
      <MDXRemote source={doc.content} />
    </article>
  );
}
