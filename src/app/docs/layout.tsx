import { getAllDocs } from "@/lib/docs";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = getAllDocs();

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64 shrink-0">
          <nav className="sticky top-32 flex flex-col gap-1">
            <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-4">Documentation</div>
            {docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="block py-2 text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors border-l border-white/5 pl-4 -ml-px hover:border-red-500/50"
              >
                {doc.title}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 max-w-3xl pb-24">
          {children}
        </main>
      </div>
    </div>
  );
}
