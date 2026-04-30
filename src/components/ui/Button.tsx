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
    
    const baseStyles = "inline-flex items-center justify-center border font-mono font-bold uppercase tracking-[0.08em] transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "border-cyan-200/35 bg-cyan-300/12 text-cyan-100 shadow-[0_0_28px_rgba(0,229,255,.16)] hover:bg-cyan-300/18 hover:shadow-[0_0_36px_rgba(0,229,255,.24)]",
      secondary: "border-white/12 bg-black/35 text-white shadow-[inset_0_0_18px_rgba(23,183,255,.045)] hover:border-cyan-200/28 hover:bg-cyan-300/8",
      outline: "border-accent/25 bg-black/25 text-white hover:bg-accent/10 hover:border-accent/45",
      ghost: "border-transparent hover:bg-white/5 hover:text-white text-muted-foreground",
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
