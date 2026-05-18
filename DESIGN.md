---
version: 1.2.0
name: "g-draft Premium"
author: "Godswill Ezeala"
description: "A premium, high-contrast dark mode design system with minimalist grid patterns and sophisticated glassmorphism for a professional engineering feel."
tokens:
  colors:
    background: "#000000"
    foreground: "#ffffff"
    primary: "#ef4444" # Red-500
    accent: "#f97316"  # Orange-500
    muted: "#a1a1aa"   # Zinc-400
    border: "rgba(255, 255, 255, 0.08)"
    glow: "rgba(239, 68, 68, 0.15)"
  textures:
    grid:
      color: "rgba(255, 255, 255, 0.02)"
      size: "40px"
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
      background: "rgba(255, 255, 255, 0.02)"
      blur: "12px"
    terminalShadow: "0 0 100px rgba(239, 68, 68, 0.08)"
---

# g-draft Design System

## Philosophy
The g-draft design system is built for the "Terminal-Native" developer. It emphasizes focus, speed, and precision through a minimalist aesthetic that uses light, color, and geometric patterns sparingly to direct attention to critical workflows.

## Visual Identity
- **Pure Black Foundation:** The foundation is absolute black (`#000000`), providing maximum contrast for text and allowing glowing accents to pop.
- **Engineering Grids:** A minimalist background grid (`grid-bg`) reinforces the product's identity as a precision engineering tool.
- **Red Accents:** Red is used to signify action, intensity, and the "live" nature of the g-draft agent.

## Core Components

### Brand Assets
- **Logo:** A rounded square (`rx=48`) with `#EF4444` background, featuring a white stylized "G" and a 20% opacity accent line.
- **Favicon:** The SVG logo is used as the primary site icon and apple-touch-icon.

### Command Bar
A floating, translucent input field that serves as the entry point for g-draft commands. It should feel lightweight yet grounded through subtle shadows and border-glows.

### Terminal Mockup
The primary demonstration tool. It must use a monospace font and reflect the actual CLI behavior, including agent "thought" blocks and action menus.

### Glass Cards
Used for feature grids and performance benchmarks. They use extremely low-opacity backgrounds and heavy background blurs to maintain a sense of space and high quality.

## Guidelines
- **Typography:** Use the Geist font family for a modern, engineering-focused look. Headers should be bold and tightly tracked.
- **Reduced Cognitive Load:** UI elements should be spaced generously to prevent visual fatigue.
- **Depth & Clarity:** Use subtle layers (grids, glass) to create a sense of premium materiality without distracting visual noise.
