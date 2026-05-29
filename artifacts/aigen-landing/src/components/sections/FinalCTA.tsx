import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const centralY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const topRightY = useTransform(scrollYProgress, [0, 1], [60, -120]);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0A0A0F] to-[#1E0A3C] border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 dark-dot-grid opacity-20 pointer-events-none" />
      <motion.div
        style={{ y: centralY }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#7C3AED]/20 blur-[120px]"
      />
      <motion.div
        style={{ y: topRightY }}
        className="pointer-events-none absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/10 blur-3xl"
      />

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 mb-6">
            <Flame size={14} className="text-[#F59E0B]" />
            <span className="font-mono text-[11px] tracking-wider text-white/70 uppercase">
              Запись открыта · Старт в июне
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Мест осталось{" "}
            <span className="relative inline-block">
              <span className="gradient-text">немного</span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </span>
          </h2>

          <p className="text-xl text-white/65 mb-4 font-sans leading-relaxed">
            Группы небольшие — чтобы каждый получал внимание преподавателя.
          </p>
          <p className="text-base text-white/45 mb-12 font-mono">
            Оставьте заявку — свяжемся в течение 24 часов и ответим на все вопросы.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://forms.yandex.ru/u/69f71ba1d0468853be7e29d2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto glow-button bg-[#7C3AED] text-white hover:bg-[#7C3AED]/90 border-transparent rounded-full px-12 py-7 text-xl font-medium shadow-[0_0_50px_rgba(124,58,237,0.45)]"
              >
                Оставить заявку →
              </Button>
            </a>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex -space-x-2">
                {["from-[#7C3AED] to-[#6366F1]", "from-[#06B6D4] to-[#0EA5E9]", "from-[#F59E0B] to-[#F97316]"].map(
                  (c, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full bg-gradient-to-br ${c} border-2 border-[#1E0A3C]`}
                    />
                  )
                )}
              </div>
              <p className="text-sm text-white/40 font-mono">
                Форма в новой вкладке · Ответим быстро
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
