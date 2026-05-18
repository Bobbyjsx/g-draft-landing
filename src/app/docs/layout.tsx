import { getAllDocs } from "@/lib/docs";
import { Navbar } from "@/components/layout/navbar";
import { DocsSidebar } from "@/components/modules/docs-sidebar";

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
        <DocsSidebar docs={docs} />
        <main className="flex-1 max-w-3xl pb-24">
          {children}
        </main>
      </div>
    </div>
  );
}
