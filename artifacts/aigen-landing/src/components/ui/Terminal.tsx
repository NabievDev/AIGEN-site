import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  "> Генерирую дизайн сайта...  ✓",
  "> Подключаю ИИ-агента...     ✓",
  "> Деплою на домен...         ✓",
  "> Твой сайт готов! 🎉"
];

export function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentFullLine = lines[currentLineIndex];

    if (currentCharIndex < currentFullLine.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, 40); // Typewriter speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentFullLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 600); // Delay between lines
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="w-full max-w-lg rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0F]/80 backdrop-blur-md shadow-2xl relative z-10">
      {/* Window Header */}
      <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-xs font-mono text-white/40 select-none">
          bash — 80x24
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm leading-relaxed text-white/90 min-h-[200px]">
        {displayedLines.map((line, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-2"
          >
            <span className={line.includes("🎉") ? "text-green-400" : "text-white"}>
              {line}
            </span>
          </motion.div>
        ))}
        
        {currentLineIndex < lines.length && (
          <div className="mb-2">
            {lines[currentLineIndex].substring(0, currentCharIndex)}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-white/70 align-middle ml-1"
            />
          </div>
        )}
        
        {currentLineIndex >= lines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="mt-2 w-2 h-4 bg-white/70 inline-block"
          />
        )}
      </div>
    </div>
  );
}
