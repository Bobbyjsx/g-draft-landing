"use client";

import { motion } from "framer-motion";
import { Cpu, Network } from "lucide-react";

export const Performance = () => {
  return (
    <section className="py-32 overflow-hidden border-t border-white/[0.03]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Speed by <br /><span className="text-red-500 italic">eliminating friction.</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-12 leading-relaxed">
              True developer productivity isn&apos;t just about network latency—it&apos;s about removing cognitive overhead. 
              g-draft turns a 20-minute context-gathering task into a 2-second command.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/5 flex items-center justify-center shrink-0 border border-red-500/10">
                  <Network className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-zinc-100 uppercase text-[10px] tracking-widest">Workflow Pipelining</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">The agent analyzes your branch while you focus on the next feature.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-zinc-100 uppercase text-[10px] tracking-widest">Context Awareness</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Automatically imports project context and PR templates into every prompt.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="p-10 rounded-[2.5rem] bg-zinc-950 border border-white/[0.05] terminal-shadow relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full" />
              
              <div className="mb-12">
                <span className="text-[10px] font-bold text-zinc-600 tracking-[0.2em] uppercase mb-2 block">Cognitive Load Benchmark</span>
                <span className="text-xl font-mono font-bold text-zinc-100 italic">2 Words <span className="text-zinc-700 not-italic">vs 20 Minutes</span></span>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                    <span>Manual Context Gathering</span>
                    <span>100% Load</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-zinc-800" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3 text-[10px] font-bold text-red-500 uppercase tracking-widest">
                    <span>g-draft Workflow</span>
                    <span>5% Load</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-red-500/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "5%" }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      className="h-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden text-left">
                  <div className="bg-zinc-950 p-5">
                    <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">Time Saved</div>
                    <div className="text-base font-mono font-bold text-zinc-400">~15m/PR</div>
                  </div>
                  <div className="bg-zinc-950 p-5">
                    <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">Audit Depth</div>
                    <div className="text-base font-mono font-bold text-zinc-400">Expert</div>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
