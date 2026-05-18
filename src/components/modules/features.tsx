"use client";

import React from "react";
import {
  FileText,
  GitCommitVertical,
  History,
  MousePointer2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    title: "2-Word Commits",
    description: "Generate professional, context-aware commit messages without manually scanning your own diff.",
    icon: GitCommitVertical,
    color: "text-red-500",
  },
  {
    title: "Zero PR Boilerplate",
    description: "g-draft automatically detects your team's PR template and fills it using AI and branch history.",
    icon: FileText,
    color: "text-orange-500",
  },
  {
    title: "Spaghetti Code Guard",
    description: "Run automated security and performance audits. Stop shipping bugs before they reach Git.",
    icon: ShieldCheck,
    color: "text-zinc-100",
  },
  {
    title: "Reduced Cognitive Load",
    description: "No more copying templates or context-switching between your terminal and browser.",
    icon: Zap,
    color: "text-red-400",
  },
  {
    title: "Vim-Optimized TUI",
    description: "Interactive dashboard with full Vim keybindings for the terminal-native developer.",
    icon: MousePointer2,
    color: "text-zinc-100",
  },
  {
    title: "Persistent Memory",
    description: "Audit logs and project-specific caches stay with you, keeping your workspace clean.",
    icon: History,
    color: "text-orange-400",
  },
];

export const Features = () => {
  return (
    <section className="py-32 relative border-t border-white/[0.03] sm:max-w-6xl 2xl:max-w-7xl max-w-[90%] w-full mx-auto snap-start min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Stop drafting. <br />{" "}
            <span className="text-zinc-500 italic">Start shipping.</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            We focus on reducing your typing load and cognitive fatigue.{" "}
            <br className="hidden md:block" /> g-draft handles the
            context-gathering so you don&apos;t have to.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05] rounded-3xl overflow-hidden">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
