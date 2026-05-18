import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="200" height="200" rx="48" fill="#EF4444" />
        <path
          d="M125.5 140C111.5 140 100.5 136 92.5 128C84.5 120 80.5 108.5 80.5 93.5C80.5 78.5 84.5 67 92.5 59C100.5 51 111.5 47 125.5 47C139.5 47 150 51 157 59L138.5 76C135.5 71.3333 131.167 69 125.5 69C120.167 69 116 71.3333 113 76C110 80.6667 108.5 86.5 108.5 93.5C108.5 100.5 110 106.333 113 111C116 115.667 120.167 118 125.5 118C131.167 118 135.5 115.667 138.5 111V102H123.5V86H163.5V125C163.5 129.667 162.333 133.333 160 136C157.667 138.667 154.333 140 150 140H125.5Z"
          fill="white"
        />
        <rect
          x="40"
          y="40"
          width="12"
          height="120"
          rx="6"
          fill="white"
          fill-opacity="0.2"
        />
      </svg>
    </div>
  );
};
