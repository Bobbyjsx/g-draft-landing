"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)] group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl italic">g</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-red-500 transition-colors">g-draft</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/#features" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Features</Link>
            <Link href="/docs/introduction" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Documentation</Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <Button size="sm" className="bg-white text-black hover:bg-zinc-200 border-none rounded-lg px-6 font-bold h-9">Install</Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/5 bg-black p-6 flex flex-col gap-6"
        >
          <Link href="/#features" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-zinc-400">Features</Link>
          <Link href="/docs/introduction" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-zinc-400">Documentation</Link>
          <a href="https://github.com" className="text-sm font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
            <GithubIcon className="w-5 h-5" />
            GitHub
          </a>
          <Button size="lg" className="w-full bg-red-600 text-white border-none rounded-xl">Install g-draft</Button>
        </motion.div>
      )}
    </nav>
  );
};
