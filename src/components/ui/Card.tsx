"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverEffect = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -5 } : undefined}
        transition={{ duration: 0.2 }}
        className={cn(
          "overflow-hidden border border-[rgba(199,251,255,.12)] bg-[rgba(5,9,16,.54)] backdrop-blur-md transition-colors hover:border-cyan-200/22",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
