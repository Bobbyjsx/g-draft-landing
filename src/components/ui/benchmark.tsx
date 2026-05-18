"use client";

import React from "react";
import { motion } from "framer-motion";

interface BenchmarkProps {
  title: string;
  value: string;
  percentage: string;
  color: string;
  delay?: number;
}

export const Benchmark = ({ title, value, percentage, color, delay = 0.5 }: BenchmarkProps) => {
  return (
    <div>
      <div className="flex justify-between mb-3 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
        <span className={color === "bg-red-500" ? "text-red-500" : ""}>{title}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: percentage }}
          transition={{ duration: 1.2, delay }}
          className={`h-full ${color} ${color === "bg-red-500" ? "shadow-[0_0_20px_rgba(239,68,68,0.4)]" : ""}`}
        />
      </div>
    </div>
  );
};
