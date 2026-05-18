"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedTerminal } from "@/components/ui/animated-terminal";
import { Spotlight } from "@/components/ui/spotlight";
import {
  GitBranch,
  ShieldCheck,
  Terminal as TerminalIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { icon: TerminalIcon, label: "2-Word Commits", color: "text-red-500" },
  { icon: GitBranch, label: "Auto-Fill PR Templates", color: "text-orange-500" },
  { icon: ShieldCheck, label: "Rigorous Code Audits", color: "text-white" },
];

export const TerminalShowcase = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section 
      ref={ref}
      className="relative py-24 overflow-hidden flex flex-col items-center justify-center min-h-screen snap-start border-t border-white/[0.02]"
    >
      <Spotlight className="opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-24"
        >
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.03] hover:border-red-500/20 transition-all group cursor-default"
            >
              <item.icon className={cn("w-5 h-5", item.color)} />
              <span className="text-sm font-semibold text-zinc-400 group-hover:text-zinc-100 transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Animated Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
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
    </section>
  );
});
TerminalShowcase.displayName = "TerminalShowcase";
