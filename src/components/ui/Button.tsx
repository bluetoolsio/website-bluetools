"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center border font-mono font-bold uppercase tracking-[0.14em] transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    
    const techButton = "border-white/12 bg-black/40 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.025)] hover:border-cyan-200/34 hover:bg-cyan-300/10 hover:text-cyan-50";

    const variants = {
      primary: techButton,
      secondary: techButton,
      outline: techButton,
      ghost: "border-transparent bg-transparent text-muted-foreground hover:border-white/12 hover:bg-cyan-300/7 hover:text-white",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-7 text-sm",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
