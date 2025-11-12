import { motion } from "motion/react";
import { ReactNode } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function SplitText({ children, className = "", delay = 0 }: SplitTextProps) {
  const words = children.split(" ");

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: delay + wordIndex * 0.05,
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
            {wordIndex < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
