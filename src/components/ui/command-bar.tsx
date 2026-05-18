"use client";

import React from "react";
import { Search } from "lucide-react";
import { CommandTyping } from "./command-typing";
import { motion } from "framer-motion";

interface CommandBarProps {
  onEnter: () => void;
}

export const CommandBar = ({ onEnter }: CommandBarProps) => {
  return (
    <div className="w-full max-w-2xl bg-zinc-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex items-center gap-3 group focus-within:border-red-500/50 transition-colors">
      <div className="pl-4">
        <Search className="w-5 h-5 text-zinc-600 group-focus-within:text-red-500 transition-colors" />
      </div>
      <div className="flex-1 text-left py-3 text-lg text-zinc-400 font-medium">
        gdraft <CommandTyping />
      </div>
      <button 
        onClick={onEnter}
        className="flex items-center gap-1.5 pr-2 outline-none group/btn"
      >
        <div className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-white/5 text-[10px] font-bold text-zinc-500 uppercase tracking-tighter group-hover/btn:bg-red-500 group-hover/btn:text-white group-hover/btn:border-red-400/50 transition-all active:scale-95 shadow-lg">
          Enter
        </div>
      </button>
    </div>
  );
};
