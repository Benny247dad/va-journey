"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  amount?: number; // pixel offset distance
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  amount = 40,
  once = true,
}: RevealProps) {
  const offset = (() => {
    switch (direction) {
      case "up":
        return { x: 0, y: amount };
      case "down":
        return { x: 0, y: -amount };
      case "left":
        return { x: amount, y: 0 };
      case "right":
        return { x: -amount, y: 0 };
      default:
        return { x: 0, y: amount };
    }
  })();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, ease: "easeOut", delay }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}