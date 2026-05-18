"use client";

import { GithubIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.03] bg-black py-24 snap-start overflow-hidden">
      {/* Subtle Bottom Glow to mirror the CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-lg tracking-tight text-white">g-draft</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              High-performance AI orchestration for modern Git workflows. 
              Built for speed, security, and zero cognitive overhead.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                All Systems Operational
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Product</span>
              <div className="flex flex-col gap-3">
                <a href="#features" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">Features</a>
                <a href="/docs/cli" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors font-mono">gdraft --help</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Resources</span>
              <div className="flex flex-col gap-3">
                <Link href="/docs/introduction" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">Documentation</Link>
                <Link href="/docs/providers" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">Providers</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Community</span>
              <div className="flex flex-col gap-3 font-mono">
                <a 
                  href="https://github.com/bobbyjsx/g-draft" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-medium text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a 
                  href="https://x.com/EzealaGodswill" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-medium text-zinc-500 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/[0.02] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-zinc-600 font-mono">
            © 2026 Godswill Ezeala. Crafted for the terminal.
          </div>
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
