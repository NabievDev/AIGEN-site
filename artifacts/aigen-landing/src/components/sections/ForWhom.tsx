import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Zap, GraduationCap, Heart } from "lucide-react";

const kidPoints = [
  "Тебе интересно, как работает ИИ — не просто «поговорить», а реально создавать",
  "Ты хочешь сделать что-то настоящее — игру, сайт или инструмент, которым пользуются другие",
  "Тебе нравится разбираться в новых технологиях быстрее взрослых",
];

const parentPoints = [
  "Хотите, чтобы ребёнок провёл лето с пользой, а не только с TikTok",
  "Важен конкретный результат, а не просто «прошли курс»",
  "Ищете навыки, которые реально пригодятся в будущем",
];

export function ForWhom() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Soft ambient background tint */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#7C3AED]/[0.06] via-transparent to-[#06B6D4]/[0.06] blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/15 mb-5">
            <Sparkles size={14} className="text-[#7C3AED]" />
            <span className="font-mono text-[11px] tracking-wider text-[#7C3AED] uppercase">Для кого</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Этот интенсив — <span className="gradient-text">для вас</span>, если...
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* Kids Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            {/* Gradient outer glow on hover */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#7C3AED] via-[#9F67FF] to-[#06B6D4] opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

            <div className="relative bg-white border border-gray-200/80 rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_-12px_rgba(17,24,39,0.08)] group-hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.35)] group-hover:-translate-y-1.5 group-hover:border-transparent transition-all duration-500 h-full overflow-hidden">
              {/* Decorative corner gradient */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#7C3AED]/[0.07] blur-3xl group-hover:bg-[#7C3AED]/[0.14] transition" />

              <div className="relative flex items-center gap-4 mb-7">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/30">
                  <Zap size={26} className="text-white" strokeWidth={2.25} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-400">Tab 01</p>
                  <h3 className="font-display font-bold text-2xl text-gray-900 leading-tight">Ребёнку</h3>
                </div>
              </div>

              <ul className="relative space-y-3">
                {kidPoints.map((text, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 mt-0.5 w-6 h-6 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
                      <span className="font-mono text-[10px] font-bold text-[#7C3AED]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-gray-700 leading-relaxed text-[15px] md:text-base pt-0.5">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Parents Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#06B6D4] via-[#22D3EE] to-[#7C3AED] opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

            <div className="relative bg-white border border-gray-200/80 rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_-12px_rgba(17,24,39,0.08)] group-hover:shadow-[0_20px_60px_-20px_rgba(6,182,212,0.35)] group-hover:-translate-y-1.5 group-hover:border-transparent transition-all duration-500 h-full overflow-hidden">
              <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#06B6D4]/[0.07] blur-3xl group-hover:bg-[#06B6D4]/[0.14] transition" />

              <div className="relative flex items-center gap-4 mb-7">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06B6D4] to-[#0E7490] flex items-center justify-center shadow-lg shadow-[#06B6D4]/30">
                  <ShieldCheck size={26} className="text-white" strokeWidth={2.25} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-400">Tab 02</p>
                  <h3 className="font-display font-bold text-2xl text-gray-900 leading-tight">Родителю</h3>
                </div>
              </div>

              <ul className="relative space-y-3">
                {parentPoints.map((text, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 mt-0.5 w-6 h-6 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                      <span className="font-mono text-[10px] font-bold text-[#06B6D4]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-gray-700 leading-relaxed text-[15px] md:text-base pt-0.5">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer — premium dark-on-light pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-[#7C3AED]/45 via-[#A855F7]/35 to-[#6366F1]/40 blur-2xl opacity-80" />

          <div className="relative flex flex-col sm:flex-row items-center gap-5 px-6 sm:px-8 py-6 rounded-3xl bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#5B21B6] border border-[#A855F7]/30 shadow-2xl shadow-[#7C3AED]/25 overflow-hidden">
            {/* Inner sheen + colored ambient blobs */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.08] via-transparent to-white/[0.04]" />
            <div className="pointer-events-none absolute -left-12 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#A855F7]/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#6366F1]/25 blur-3xl" />
            {/* Subtle dotted texture for premium feel */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-screen"
              style={{
                backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />

            <div className="relative shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] shadow-lg shadow-[#F59E0B]/40 ring-1 ring-white/20">
              <span className="text-2xl leading-none" aria-hidden="true">⚡</span>
            </div>

            <div className="relative flex-1 text-center sm:text-left">
              <p className="font-mono text-[11px] tracking-wider text-[#F59E0B] uppercase mb-1">No-code? No problem.</p>
              <p className="text-white text-base md:text-lg font-medium leading-snug">
                Опыт программирования <span className="text-white/65">не нужен.</span> Нужен только компьютер
                <span className="text-white/65"> и</span> интерес.
              </p>
            </div>

            <div className="hidden sm:flex relative shrink-0 items-center gap-2 text-white/60 font-mono text-xs">
              <Heart size={14} className="text-[#F59E0B]" />
              <GraduationCap size={14} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
