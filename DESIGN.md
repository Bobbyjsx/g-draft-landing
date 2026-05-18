---
version: 1.0.0
name: "g-draft Premium"
author: "Godswill Ezeala"
description: "A premium, high-contrast dark mode design system inspired by Raycast, featuring deep red accents and sophisticated glows."
tokens:
  colors:
    background: "#000000"
    foreground: "#ffffff"
    primary: "#ef4444" # Red-500
    accent: "#f97316"  # Orange-500
    muted: "#a1a1aa"   # Zinc-400
    border: "rgba(255, 255, 255, 0.08)"
    glow: "rgba(239, 68, 68, 0.15)"
  typography:
    sans: "Geist, Inter, sans-serif"
    mono: "Geist Mono, monospace"
    headings:
      weight: 700
      tracking: "-0.025em"
  shape:
    borderRadius:
      base: "0.5rem"
      lg: "1rem"
      xl: "1.5rem"
      full: "9999px"
  effects:
    glass:
      background: "rgba(255, 255, 255, 0.03)"
      blur: "10px"
    terminalShadow: "0 0 100px rgba(239, 68, 68, 0.1)"
---

# g-draft Design System

## Philosophy
The g-draft design system is built for the "Terminal-Native" developer. It emphasizes focus, speed, and precision through a minimalist aesthetic that uses light and color sparingly to direct attention to critical workflows.

## Visual Identity
- **Pure Black:** The foundation is absolute black (`#000000`), providing maximum contrast for text and allowing glowing accents to pop.
- **Red Accents:** Red is used to signify action, intensity, and the "live" nature of the g-draft agent.
- **Atmospheric Lighting:** Strategic radial gradients (Spotlights and Hero Accents) create depth and a premium "physical" feel to the digital interface.

## Core Components

### Command Bar
A floating, translucent input field that serves as the entry point for g-draft commands. It should feel lightweight yet grounded through subtle shadows and border-glows.

### Terminal Mockup
The primary demonstration tool. It must use a monospace font and reflect the actual CLI behavior, including agent "thought" blocks and action menus.

### Glass Cards
Used for feature grids and performance benchmarks. They use extremely low-opacity backgrounds and heavy background blurs to maintain a sense of space.

## Guidelines
- **Typography:** Use the Geist font family for a modern, engineering-focused look. Headers should be bold and tightly tracked.
- **Reduced Cognitive Load:** UI elements should be spaced generously to prevent visual fatigue.
- **Interactive Feedback:** Use micro-interactions (hover scale, opacity shifts) to make the interface feel responsive and "alive."
