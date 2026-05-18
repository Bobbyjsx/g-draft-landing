"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  index: number;
}

export const FeatureCard = ({ title, description, icon: Icon, color, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="p-10 bg-black hover:bg-white/[0.02] transition-colors group relative"
    >
      <div className={`w-10 h-10 flex items-center justify-center mb-8 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold mb-3 text-zinc-100 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-zinc-500 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
};
