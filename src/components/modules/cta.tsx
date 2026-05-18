"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export const CTA = () => {
  return (
    <section className="py-40 relative overflow-hidden flex flex-col items-center">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-gradient-red">
            Draft less. <br />
            <span className="text-red-500">Ship more.</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl mb-14 leading-relaxed">
            Join the elite developers automating their Git lifecycle. <br className="hidden md:block" />
            Install g-draft and reclaim your flow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg bg-red-600 hover:bg-red-500 text-white border-none rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <Terminal className="w-5 h-5 mr-3" />
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg border-white/10 hover:bg-white/5 rounded-2xl">
              <GithubIcon className="w-5 h-5 mr-3" />
              Star on GitHub
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8">
             <div className="flex flex-col items-center">
               <span className="text-2xl font-bold text-zinc-100">2s</span>
               <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Avg Generation</span>
             </div>
             <div className="w-px h-8 bg-white/10" />
             <div className="flex flex-col items-center">
               <span className="text-2xl font-bold text-zinc-100">ACP</span>
               <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Pipelined</span>
             </div>
             <div className="w-px h-8 bg-white/10" />
             <div className="flex flex-col items-center">
               <span className="text-2xl font-bold text-zinc-100">0</span>
               <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Cold Starts</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
