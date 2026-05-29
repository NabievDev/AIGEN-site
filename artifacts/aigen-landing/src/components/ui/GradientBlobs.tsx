import { motion, useScroll, useTransform } from "framer-motion";

export function GradientBlobs() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 900], [0, -160]);
  const y2 = useTransform(scrollY, [0, 900], [0, -100]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4">
        <motion.div
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -50, -20, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[500px] h-[500px] bg-[#7C3AED] rounded-full opacity-30 mix-blend-screen"
          style={{ filter: "blur(120px)" }}
        />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-1/3 right-1/4">
        <motion.div
          animate={{
            x: [0, -40, 20, 60, 0],
            y: [0, 60, 10, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="w-[400px] h-[400px] bg-[#06B6D4] rounded-full opacity-20 mix-blend-screen"
          style={{ filter: "blur(100px)" }}
        />
      </motion.div>
    </div>
  );
}
