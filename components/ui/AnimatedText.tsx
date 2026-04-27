"use client";

import { motion } from "framer-motion";
import { splitTextContainer, splitTextWord } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
}

export function AnimatedText({ text, className = "", as: Tag = "h2", delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={splitTextContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-wrap ${className}`}
      style={{ perspective: 600 }}
      transition={{ delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={splitTextWord}
          className="inline-block mr-[0.3em]"
          style={{ transformOrigin: "bottom" }}
        >
          <Tag className={className} style={{ display: "contents" }}>
            {word}
          </Tag>
        </motion.span>
      ))}
    </motion.div>
  );
}
