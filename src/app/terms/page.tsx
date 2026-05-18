import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default async function TermsPage() {
  const filePath = path.join(process.cwd(), "src/app/terms/content.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-red-500/30">
      <Navbar />
      <main className="container mx-auto px-6 pt-40 pb-24 max-w-4xl">
        <article className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-500 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/5">
          <MDXRemote source={content} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
