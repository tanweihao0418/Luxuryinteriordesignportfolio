import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from value (e.g., "200+" -> 200)
  const numMatch = value.match(/\d+/);
  const targetNum = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(/\d+/, '');
  
  const [count, setCount] = useState(0);
  const springValue = useSpring(0, { 
    stiffness: 50, 
    damping: 30,
    duration: duration * 1000 
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(targetNum);
    }
  }, [isInView, springValue, targetNum]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCount(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  );
}
