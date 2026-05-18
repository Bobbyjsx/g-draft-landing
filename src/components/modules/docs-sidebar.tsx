"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DocLink {
  slug: string;
  title: string;
}

interface DocsSidebarProps {
  docs: DocLink[];
}

export const DocsSidebar = ({ docs }: DocsSidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 shrink-0">
      <nav className="sticky top-32 flex flex-col gap-1">
        <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-4 pl-4">
          Documentation
        </div>
        {docs.map((doc) => {
          const href = `/docs/${doc.slug}`;
          const isActive = pathname === href;

          return (
            <Link
              key={doc.slug}
              href={href}
              className={cn(
                "block py-2 text-sm font-medium transition-all border-l pl-4 -ml-px",
                isActive
                  ? "text-red-500 border-red-500 bg-red-500/5 font-semibold"
                  : "text-zinc-400 border-white/5 hover:text-zinc-100 hover:border-white/20"
              )}
            >
              {doc.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
