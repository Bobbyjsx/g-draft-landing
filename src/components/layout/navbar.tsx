"use client";

import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { useInstallModal } from "@/components/modules/install-modal";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { open: openInstallModal } = useInstallModal();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-9 h-9 shadow-[0_0_20px_rgba(239,68,68,0.3)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] group-hover:scale-105 transition-all duration-300" />
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-red-500 transition-colors">g-draft</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 mr-4 border-r border-white/5 pr-12">
              <Link href="/#features" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">Features</Link>
              <Link href="/docs/introduction" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">Documentation</Link>
              <a 
                href="https://github.com/Bobbyjsx/g-draft" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
            
            <Button 
              size="sm" 
              className="bg-white text-black hover:bg-red-500 hover:text-white border-none rounded-lg px-6 font-bold h-9 transition-all active:scale-95"
              onClick={openInstallModal}
            >
              <Terminal className="w-3.5 h-3.5 mr-2" />
              Install
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-zinc-400 p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-2xl p-6 flex flex-col gap-6"
        >
          <Link href="/#features" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-widest text-zinc-400">Features</Link>
          <Link href="/docs/introduction" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-widest text-zinc-400">Documentation</Link>
          <a href="https://github.com/Bobbyjsx/g-draft" className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
            <GithubIcon className="w-5 h-5" />
            GitHub
          </a>
          <Button 
            size="lg" 
            className="w-full bg-red-600 text-white border-none rounded-xl font-bold"
            onClick={() => {
              setIsOpen(false);
              openInstallModal();
            }}
          >
            <Terminal className="w-4 h-4 mr-2" />
            Install g-draft
          </Button>
        </motion.div>
      )}
    </nav>
  );
};
