import * as React from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ children, title = "gdraft tui", className }) => {
  return (
    <div className={cn("rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden terminal-shadow font-mono text-sm", className)}>
      <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-center text-zinc-500 text-xs">{title}</div>
      </div>
      <div className="p-4 overflow-auto max-h-[400px]">
        {children}
      </div>
    </div>
  );
};

export const TerminalLine: React.FC<{ children: React.ReactNode; color?: string; prefix?: string }> = ({ children, color = "text-zinc-300", prefix = "" }) => (
  <div className="flex gap-2 mb-1">
    {prefix && <span className="text-zinc-600 shrink-0">{prefix}</span>}
    <span className={color}>{children}</span>
  </div>
);
