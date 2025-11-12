import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[9999]"
      style={{ 
        scaleX,
        background: "linear-gradient(90deg, #7c3aed 0%, #8b5cf6 50%, #d4f764 100%)"
      }}
    />
  );
}