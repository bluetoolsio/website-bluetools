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
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold tracking-[-0.01em] transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-accent text-accent-foreground hover:bg-[#8bbaff] shadow-lg shadow-accent/25 hover:shadow-accent/35",
      secondary: "border border-white/10 bg-white/10 text-white hover:border-accent/25 hover:bg-white/15",
      outline: "border border-accent/25 bg-accent/5 text-white hover:bg-accent/12 hover:border-accent/45",
      ghost: "hover:bg-white/5 hover:text-white text-muted-foreground",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-lg",
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
