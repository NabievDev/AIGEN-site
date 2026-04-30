import { motion } from "framer-motion";

const items = [
  "24 занятия",
  "3 месяца",
  "Реальный проект",
  "Собственный домен",
  "ИИ-агенты",
  "Kiro от Amazon",
  "Replit",
  "GitHub",
  "MCP-серверы",
  "Motion-сайты"
];

// Duplicate items to ensure smooth infinite scroll
const marqueeItems = [...items, ...items, ...items, ...items];

export function MarqueeStrip() {
  return (
    <div className="w-full bg-white border-y border-gray-200 overflow-hidden py-5 flex items-center relative h-[80px]">
      <motion.div
        animate={{ x: [0, -1920] }} // Adjust based on estimated width
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
        className="flex items-center whitespace-nowrap"
      >
        {marqueeItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-mono text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider mx-6">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]/40" />
          </div>
        ))}
      </motion.div>
      
      {/* Gradient fades for edges */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
}
