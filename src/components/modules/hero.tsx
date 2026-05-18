"use client";

import { motion } from "framer-motion";
import { AnimatedTerminal } from "@/components/ui/animated-terminal";
import { Spotlight } from "@/components/ui/spotlight";
import { Terminal as TerminalIcon, Search, GitBranch, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden flex flex-col items-center">
      {/* Raycast-style subtle red glow and interactive spotlight */}
      <div className="hero-accent" />
      <Spotlight className="opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase">
              Powered by Gemini 3.1 Pro
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-gradient-red"
          >
            Git at the speed <br />of <span className="text-red-500 italic">thought.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-2xl leading-relaxed"
          >
            Stop wasting hours on boilerplate Git tasks. <br className="hidden md:block" />
            One command to automate commits, PRs, and audits.
          </motion.p>

          {/* Command Bar Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-2xl bg-zinc-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-2 mb-20 shadow-2xl flex items-center gap-3 group focus-within:border-red-500/50 transition-colors"
          >
            <div className="pl-4">
              <Search className="w-5 h-5 text-zinc-600 group-focus-within:text-red-500 transition-colors" />
            </div>
            <div className="flex-1 text-left py-3 text-lg text-zinc-400 font-medium">
              gdraft <span className="text-zinc-600 italic">commit</span>
            </div>
            <div className="flex items-center gap-1.5 pr-2">
              <div className="px-2 py-1 rounded bg-zinc-800 border border-white/5 text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Enter</div>
            </div>
          </motion.div>

          {/* Feature Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-24">
             {[
               { icon: TerminalIcon, label: "2-Word Commits", color: "text-red-500" },
               { icon: GitBranch, label: "Auto-Fill PR Templates", color: "text-orange-500" },
               { icon: ShieldCheck, label: "Rigorous Code Audits", color: "text-white" }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 + (i * 0.1) }}
                 className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.03] hover:border-red-500/20 transition-all group cursor-default"
               >
                 <item.icon className={cn("w-5 h-5", item.color)} />
                 <span className="text-sm font-semibold text-zinc-400 group-hover:text-zinc-100 transition-colors">{item.label}</span>
               </motion.div>
             ))}
          </div>

          {/* Animated Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            style={{ y: 0 }}
            className="w-full max-w-4xl"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <AnimatedTerminal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
