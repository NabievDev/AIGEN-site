import { motion } from "framer-motion";
import {
  MessageSquareCode,
  Cpu,
  GitBranch,
  Wand2,
  Bug,
  Server,
  Sparkles,
  ArrowUpRight,
  MousePointerClick,
} from "lucide-react";

const skills = [
  {
    icon: MessageSquareCode,
    title: "Говорить с ИИ на языке задач",
    text: "Превращать «хочу красивый сайт» в чёткое задание, которое ИИ-агент понимает и выполняет с первого раза.",
    accent: "#7C3AED",
  },
  {
    icon: Cpu,
    title: "Работать в Kiro и Replit",
    text: "Те же IDE, в которых сегодня собирают продукты взрослые команды — но с человеческим, а не «программистским» интерфейсом.",
    accent: "#06B6D4",
  },
  {
    icon: GitBranch,
    title: "Хранить код в Git и GitHub",
    text: "Никаких «у меня сломалось всё». Версии, ветки, откаты — как у настоящих разработчиков.",
    accent: "#F59E0B",
  },
  {
    icon: Wand2,
    title: "Генерировать картинки и видео",
    text: "Подбирать стиль, описывать сцены, собирать готовый медиаконтент для своего проекта.",
    accent: "#7C3AED",
  },
  {
    icon: Bug,
    title: "Чинить ошибки вместе с ИИ",
    text: "Главный навык 2025: уметь читать ошибку, описать её агенту и довести проект до зелёной галочки.",
    accent: "#06B6D4",
  },
  {
    icon: Server,
    title: "Запускать проект в интернет",
    text: "Сервер, домен, деплой — то, что превращает «домашку» в живой работающий продукт.",
    accent: "#F59E0B",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Soft background tint + dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #111827 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/[0.06] blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/15 mb-5">
            <Sparkles size={14} className="text-[#7C3AED]" />
            <span className="font-mono text-[11px] tracking-wider text-[#7C3AED] uppercase">
              Навыки
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            А чему конкретно <span className="gradient-text">научится ребёнок?</span>
          </h2>
          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Не «попрограммировать на Питоне три месяца», а реальному набору навыков, который сегодня
            нужен, чтобы создавать продукты вместе с ИИ — быстро, качественно и до конца.
          </p>
        </motion.div>

        {/* The "this site" meta hook — the wow moment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 md:mb-20"
        >
          {/* Outer glow */}
          <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-br from-[#7C3AED]/40 via-[#06B6D4]/30 to-[#F59E0B]/30 blur-2xl opacity-60" />

          <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0F] border border-white/10 shadow-2xl">
            {/* Decorative gradient blobs inside the card */}
            <div className="pointer-events-none absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-[#7C3AED]/30 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full bg-[#06B6D4]/25 blur-[100px]" />

            {/* Browser-window chrome */}
            <div className="relative flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="hidden sm:flex flex-1 items-center justify-center">
                <div className="font-mono text-[11px] text-white/40 px-3 py-1 rounded-md bg-white/5 border border-white/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                  aigen.school
                </div>
              </div>
              <div className="font-mono text-[11px] text-white/30 hidden md:block">
                live · index.tsx
              </div>
            </div>

            {/* Body */}
            <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-10 p-6 sm:p-10 md:p-14">
              <div>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#06B6D4]" />
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-[#06B6D4] uppercase">
                    Прямо сейчас
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-[1.15] tracking-tight">
                  Этот сайт, который вы листаете,{" "}
                  <span className="gradient-text">собран целиком при помощи ИИ</span> — без единой
                  написанной вручную строчки.
                </h3>

                <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                  Дизайн, анимации, тексты, вёрстка, деплой на сервер — всё сделано в связке
                  человек&nbsp;+&nbsp;ИИ-агент. Это и есть навык, которому мы учим школьников. К
                  концу интенсива ваш ребёнок сможет собрать такой же — и свой, и круче.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-2">
                  {[
                    "Kiro IDE",
                    "Replit",
                    "GitHub",
                    "MCP",
                    "Motion-сайты",
                    "Нейросети для медиа",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] tracking-wide text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right "stats" panel */}
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 self-stretch">
                {[
                  { label: "Строк, написанных вручную", value: "0" },
                  { label: "Часов от идеи до запуска", value: "< 24" },
                  { label: "Использовано ИИ-агентов", value: "1" },
                  { label: "Тех же инструментов учим", value: "100%" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 backdrop-blur-sm overflow-hidden hover:bg-white/[0.06] transition"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="font-display font-extrabold text-3xl sm:text-4xl gradient-text leading-none">
                      {s.value}
                    </div>
                    <div className="mt-2 text-white/55 text-xs sm:text-[13px] leading-snug">
                      {s.label}
                    </div>
                  </motion.div>
                ))}

                {/* Floating "made with AI" pill */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-mono text-[10px] tracking-wider uppercase shadow-lg shadow-[#7C3AED]/40"
                >
                  <MousePointerClick size={12} />
                  Made with AI
                </motion.div>
              </div>
            </div>

            {/* Footer line */}
            <div className="relative px-6 sm:px-10 md:px-14 pb-6 sm:pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-5 border-t border-white/10">
                <p className="font-mono text-[11px] tracking-wide text-white/40">
                  // выпускник интенсива умеет собирать такие сайты сам
                </p>
                <a
                  href="#program"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#program")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-white/70 hover:text-white transition group"
                >
                  Посмотреть программу
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative"
            >
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition duration-500"
                style={{
                  background: `linear-gradient(135deg, ${s.accent}, transparent 60%)`,
                }}
              />
              <div className="relative h-full bg-white border border-gray-200/80 rounded-2xl p-6 md:p-7 shadow-[0_4px_20px_-10px_rgba(17,24,39,0.08)] group-hover:shadow-[0_20px_50px_-20px_rgba(17,24,39,0.18)] group-hover:-translate-y-1.5 group-hover:border-transparent transition-all duration-500 overflow-hidden">
                <div
                  className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.07] group-hover:opacity-[0.13] blur-2xl transition"
                  style={{ backgroundColor: s.accent }}
                />

                <div className="relative flex items-start gap-4 mb-3">
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${s.accent}14`,
                      color: s.accent,
                    }}
                  >
                    <s.icon size={20} strokeWidth={2.25} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 leading-snug pt-1.5">
                    {s.title}
                  </h3>
                </div>

                <p className="relative text-gray-600 text-[15px] leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
