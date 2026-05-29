import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export interface ParallaxValues {
  ref: React.RefObject<HTMLDivElement>;
  y1: MotionValue<number>;
  y2: MotionValue<number>;
  y3: MotionValue<number>;
  y4: MotionValue<number>;
}

export function useParallaxSection(): ParallaxValues {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const y2 = useTransform(scrollYProgress, [0, 1], [130, -130]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const y4 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return { ref, y1, y2, y3, y4 };
}
