import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Bot, Film, Github, PackageCheck } from "lucide-react";

const outcomes = [
  { icon: Globe, title: "Живой сайт в интернете", desc: "Готовый проект, доступный по ссылке — не «домашнее задание», а настоящий сайт на своём домене", accent: "#7C3AED", num: "01" },
  { icon: Bot, title: "Умение работать с ИИ-агентами", desc: "Kiro, Replit, MCP — инструменты, которые используют профессиональные разработчики прямо сейчас", accent: "#06B6D4", num: "02" },
  { icon: Film, title: "Медиаконтент для проекта", desc: "Сгенерированные картинки и видео, motion-анимации — проект будет выглядеть профессионально", accent: "#F59E0B", num: "03" },
  { icon: Github, title: "Портфолио на GitHub", desc: "Код проекта сохранён в репозитории. Это первая строчка в будущем резюме", accent: "#7C3AED", num: "04" },
];

export function Outcomes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const blobTopY = useTransform(scrollYProgress, [0, 1], [160, -160]);
  const blobBotY = useTransform(scrollYProgress, [0, 1], [-130, 130]);

  const y0 = useTransform(scrollYProgress, [0, 1], [120, -60]);
  const y1 = useTransform(scrollYProgress, [0, 1], [180, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -80]);
  const cardYs = [y0, y1, y2, y3];

  return (
    <section className="py-24 md:py-32 bg-[#F7F7F9] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #111827 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <motion.div style={{ y: blobTopY }} className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/20 blur-[100px]" />
      <motion.div style={{ y: blobBotY }} className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#06B6D4]/18 blur-[100px]" />

      <div ref={ref} className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/15 mb-5">
            <PackageCheck size={14} className="text-[#7C3AED]" />
            <span className="font-mono text-[11px] tracking-wider text-[#7C3AED] uppercase">Результат</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Что будет в руках <span className="gradient-text">после курса</span>
          </h2>
          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Не «знание» в голове, а конкретные артефакты — работающие, живые и доступные по ссылке.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 items-start">
          {outcomes.map((item, i) => (
            <motion.div key={i} style={{ y: cardYs[i] }} className="group relative">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition duration-500" style={{ background: `linear-gradient(135deg, ${item.accent}50, transparent 60%)` }} />
              <div className="relative h-full bg-white border border-gray-200/80 rounded-2xl p-7 md:p-8 shadow-[0_4px_20px_-10px_rgba(17,24,39,0.07)] group-hover:shadow-[0_20px_50px_-20px_rgba(17,24,39,0.16)] group-hover:-translate-y-1.5 group-hover:border-transparent transition-all duration-500 overflow-hidden">
                <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.08] group-hover:opacity-[0.14] blur-2xl transition" style={{ backgroundColor: item.accent }} />
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: `${item.accent}15`, color: item.accent }}>
                    <item.icon strokeWidth={1.75} size={24} />
                  </div>
                  <span className="font-mono text-[13px] font-bold text-gray-200 group-hover:text-gray-300 transition">{item.num}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
