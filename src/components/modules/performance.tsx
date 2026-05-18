"use client";

import React from "react";
import { Cpu, Network } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Benchmark } from "@/components/ui/benchmark";

export const Performance = () => {
  return (
    <section className="py-32 overflow-hidden border-t border-white/[0.03] sm:max-w-6xl 2xl:max-w-7xl max-w-[90%] w-full mx-auto snap-start min-h-screen flex flex-col justify-center">
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <ScrollReveal direction="right" className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Speed by <br />
              <span className="text-red-500 italic">eliminating friction.</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-12 leading-relaxed">
              True developer productivity isn&apos;t just about network
              latency—it&apos;s about removing cognitive overhead. g-draft turns
              a 20-minute context-gathering task into a 2-second command.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/5 flex items-center justify-center shrink-0 border border-red-500/10">
                  <Network className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-zinc-100 uppercase text-[10px] tracking-widest">
                    Workflow Pipelining
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    The agent analyzes your branch while you focus on the next
                    feature.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-zinc-100 uppercase text-[10px] tracking-widest">
                    Context Awareness
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Automatically imports project context and PR templates into
                    every prompt.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="flex-1 relative">
            <div className="p-10 rounded-[2.5rem] bg-zinc-950 border border-white/[0.05] terminal-shadow relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full" />

              <div className="mb-12">
                <span className="text-[10px] font-bold text-zinc-600 tracking-[0.2em] uppercase mb-2 block text-left">
                  Cognitive Load Benchmark
                </span>
                <span className="text-xl font-mono font-bold text-zinc-100 italic block text-left">
                  2 Words{" "}
                  <span className="text-zinc-700 not-italic">
                    vs 20 Minutes
                  </span>
                </span>
              </div>

              <div className="space-y-8">
                <Benchmark 
                   title="Manual Context Gathering"
                   value="100% Load"
                   percentage="95%"
                   color="bg-zinc-800"
                />
                <Benchmark 
                   title="g-draft Workflow"
                   value="5% Load"
                   percentage="15%"
                   color="bg-red-500"
                   delay={1}
                />
              </div>

              <div className="mt-16 grid grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden text-left">
                <div className="bg-zinc-950 p-5">
                  <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">
                    Time Saved
                  </div>
                  <div className="text-base font-mono font-bold text-zinc-400">
                    ~15m/PR
                  </div>
                </div>
                <div className="bg-zinc-950 p-5">
                  <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">
                    Audit Depth
                  </div>
                  <div className="text-base font-mono font-bold text-zinc-400">
                    Expert
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
