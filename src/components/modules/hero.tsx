"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { ValueProp } from "./hero/value-prop";
import { TerminalShowcase } from "./hero/terminal-showcase";

export const Hero = () => {
  const valuePropRef = useRef<HTMLDivElement>(null);
  const terminalSectionRef = useRef<HTMLDivElement>(null);
  
  // Track if the first section is in view to toggle keyboard listener
  const isValuePropInView = useInView(valuePropRef, { amount: 0.5 });

  const scrollToTerminal = () => {
    terminalSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only trigger scroll if Enter is pressed while ValueProp is visible
      if (e.key === "Enter" && isValuePropInView) {
        scrollToTerminal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isValuePropInView]); // Re-bind listener when visibility changes

  return (
    <>
      <ValueProp ref={valuePropRef} onEnter={scrollToTerminal} />
      <TerminalShowcase ref={terminalSectionRef} />
    </>
  );
};
