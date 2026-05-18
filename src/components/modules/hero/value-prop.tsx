"use client";

import { useInstallModal } from "@/components/modules/install-modal";
import { Button } from "@/components/ui/button";
import { CommandBar } from "@/components/ui/command-bar";
import { Spotlight } from "@/components/ui/spotlight";
import { motion, Variants } from "framer-motion";
import { Terminal } from "lucide-react";
import React from "react";

interface ValuePropProps {
  onEnter: () => void;
}

export const ValueProp = React.forwardRef<HTMLDivElement, ValuePropProps>(
  ({ onEnter }, ref) => {
    const { open: openInstallModal } = useInstallModal();

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
      },
    };

    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.21, 0.47, 0.32, 0.98],
        },
      },
    };

    return (
      <section
        ref={ref}
        className="relative pt-32 pb-16 overflow-hidden flex flex-col items-center justify-center min-h-screen snap-start"
      >
        <div className="hero-accent" />
        <Spotlight className="opacity-40" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 relative z-10"
        >
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              <span className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase">
                Bring Your Own Agent
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-gradient-red"
            >
              Your terminal&apos;s <br />
              <span className="text-red-500 italic">ghostwriter.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-2xl leading-relaxed"
            >
              Automate the boring parts of version control.{" "}
              <br className="hidden md:block" />
              Works with your local AI agents: Claude, Gemini, or Codex.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="w-full flex flex-col items-center gap-8"
            >
              <CommandBar onEnter={onEnter} />

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-2xl border-white/10 hover:bg-white/5 transition-all"
                onClick={openInstallModal}
              >
                <Terminal className="w-4 h-4 mr-3 text-red-500" />
                Install globally
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  },
);
ValueProp.displayName = "ValueProp";
