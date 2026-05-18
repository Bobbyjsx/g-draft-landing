"use client";

import React, { useState, useEffect } from "react";
import { Terminal, TerminalLine } from "./terminal";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalStep {
  type: "input" | "thought" | "output" | "action";
  text: string;
  isBold?: boolean;
  color?: string;
}

const sequences: TerminalStep[][] = [
  [
    { type: "input", text: "gdraft commit" },
    { type: "thought", text: "[AGENT] Analyzing staged changes..." },
    { type: "thought", text: "[AGENT] Formulating commit message..." },
    { type: "output", text: "feat(core): implement high-speed ACP pipelining", isBold: true },
    { type: "output", text: "- Bypass standard handshake for immediate agent streams" },
    { type: "output", text: "- Reduce warm-up latency by 85%" },
    { type: "action", text: "[a] Accept & Commit  [e] Edit  [c] Copy  [r] Retry" },
  ],
  [
    { type: "input", text: "gdraft review" },
    { type: "thought", text: "[AGENT] Auditing codebase for vulnerabilities..." },
    { type: "thought", text: "[AGENT] Analyzing performance patterns..." },
    { type: "output", text: "⚠️ Bug Risk: Unhandled promise rejection in src/cli/index.ts", isBold: true, color: "text-red-400" },
    { type: "output", text: "🔒 Security: Hardcoded API key in src/config.ts (line 42)", isBold: true, color: "text-red-500" },
    { type: "output", text: "⚡ Performance: O(n²) loop detected in diff generator", isBold: true, color: "text-yellow-500" },
    { type: "action", text: "[c] Copy Report  [r] Rerun Review  [esc] Exit" },
  ],
  [
    { type: "input", text: "gdraft pr" },
    { type: "thought", text: "[AGENT] Scanning branch history & applying PR template..." },
    { type: "output", text: "# Pull Request: OAuth2 Persistent Sessions", isBold: true },
    { type: "output", text: "## Summary" },
    { type: "output", text: "- Integrated secure cookie storage for session persistence" },
    { type: "output", text: "- Updated middleware to validate JWT on edge runtime" },
    { type: "action", text: "[e] Edit Description  [c] Copy  [r] Regenerate" },
  ]
];

export const AnimatedTerminal = () => {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  const currentSequence = sequences[sequenceIndex];

  useEffect(() => {
    if (isClearing) return;

    if (stepIndex >= currentSequence.length) {
      const timeout = setTimeout(() => {
        setIsClearing(true);
        setTimeout(() => {
          setSequenceIndex((prev) => (prev + 1) % sequences.length);
          setStepIndex(0);
          setDisplayText("");
          setIsClearing(false);
        }, 800);
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const currentStep = currentSequence[stepIndex];

    if (currentStep.type === "input") {
      const startTyping = setTimeout(() => {
        setIsTyping(true);
        let charIndex = 0;
        const typingInterval = setInterval(() => {
          setDisplayText(currentStep.text.slice(0, charIndex + 1));
          charIndex++;
          if (charIndex >= currentStep.text.length) {
            clearInterval(typingInterval);
            setIsTyping(false);
            setTimeout(() => setStepIndex((prev) => prev + 1), 600);
          }
        }, 60);
        return () => clearInterval(typingInterval);
      }, 200);
      return () => clearTimeout(startTyping);
    } else {
      const delay = currentStep.type === "thought" ? 800 : 400;
      const timeout = setTimeout(() => {
        setStepIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [stepIndex, sequenceIndex, isClearing, currentSequence]);

  return (
    <Terminal className="text-left !bg-black/40 !backdrop-blur-3xl border-white/5 shadow-2xl min-h-[340px] relative">
      <motion.div
        animate={isClearing ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <AnimatePresence mode="popLayout">
          {currentSequence.slice(0, stepIndex + 1).map((step, i) => {
            if (step.type === "input") {
              return (
                <TerminalLine key={`${sequenceIndex}-${i}`} prefix="➜">
                  {i === stepIndex ? displayText : step.text}
                  {i === stepIndex && isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-1.5 h-4 bg-red-500 ml-1 align-middle"
                    />
                  )}
                </TerminalLine>
              );
            }

            if (step.type === "thought") {
              return (
                <motion.div
                  key={`${sequenceIndex}-${i}`}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TerminalLine color="text-red-400/60 font-medium">{step.text}</TerminalLine>
                </motion.div>
              );
            }

            if (step.type === "output") {
              const isFirstOutput = currentSequence[i-1]?.type === "thought";
              return (
                <motion.div
                  key={`${sequenceIndex}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={isFirstOutput ? "mt-4 pl-4 border-l-2 border-red-500/30 bg-red-500/[0.02] py-1" : "pl-4 border-l-2 border-red-500/30 bg-red-500/[0.02] py-1"}
                >
                  <TerminalLine color={step.color || (step.isBold ? "text-zinc-100 font-bold" : "text-zinc-500")}>
                    {step.text}
                  </TerminalLine>
                </motion.div>
              );
            }

            if (step.type === "action") {
              return (
                <motion.div
                  key={`${sequenceIndex}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 border-t border-white/5 pt-4"
                >
                  <TerminalLine color="text-zinc-600 font-bold tracking-tight">{step.text}</TerminalLine>
                </motion.div>
              );
            }

            return null;
          })}
        </AnimatePresence>
      </motion.div>
    </Terminal>
  );
};
