import { motion } from "framer-motion";
import { Check, Tag, Zap, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "24 лекции (по 1 часу)",
  "24 домашних задания с проверкой",
  "Доступ к записям занятий",
  "Чат поддержки с преподавателем",
  "Сертификат об окончании",
  "Финальный проект на домене",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#7C3AED]/5 to-[#06B6D4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/15 mb-5">
            <Tag size={14} className="text-[#7C3AED]" />
            <span className="font-mono text-[11px] tracking-wider text-[#7C3AED] uppercase">
              Инвестиция
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Стоимость <span className="gradient-text">участия</span>
          </h2>
          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Прозрачные цены без скрытых платежей. Оплата помесячно или сразу со скидкой.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-6 max-w-4xl mx-auto">
          {/* Main pricing card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[420px] shrink-0"
          >
            <div className="relative bg-white rounded-3xl p-1 shadow-[0_0_40px_-15px_rgba(124,58,237,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] rounded-3xl opacity-20" />
              <div className="relative bg-white rounded-[22px] p-8 md:p-10 flex flex-col overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]" />
                <h3 className="font-display font-bold text-2xl text-gray-900">AIGEN Intensive</h3>
                <p className="font-mono text-sm text-gray-500 mb-8 mt-1">Летний интенсив · 3 месяца</p>

                <div className="mb-2">
                  <span className="font-display font-extrabold text-4xl sm:text-5xl gradient-text">5 100 ₽</span>
                  <span className="text-gray-500 font-medium"> / месяц</span>
                </div>
                <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                  или <span className="font-semibold text-gray-700">15 300 ₽</span> за весь курс
                </p>

                <ul className="space-y-4 mb-10 flex-1">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7C3AED]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-[#7C3AED]" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://forms.yandex.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    className="w-full glow-button bg-[#7C3AED] text-white hover:bg-[#7C3AED]/90 border-transparent rounded-2xl py-6 text-lg"
                  >
                    Записаться →
                  </Button>
                </a>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-5 max-w-xs mx-auto">
              Оплата помесячно. Количество мест ограничено.
            </p>
          </motion.div>

          {/* Discount card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-auto lg:min-w-[300px] lg:max-w-[320px]"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Outer glow */}
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-[#7C3AED]/50 via-[#06B6D4]/30 to-[#F59E0B]/40 blur-xl opacity-70" />

              <div className="relative bg-[#0A0A0F] border border-white/10 rounded-3xl p-7 md:p-8 overflow-hidden">
                {/* Background blobs */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#7C3AED]/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#F59E0B]/15 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* Badge */}
                <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] mb-5 shadow-lg shadow-[#F59E0B]/30">
                  <Percent size={12} className="text-white" />
                  <span className="font-mono text-[11px] font-bold tracking-wider text-white uppercase">
                    Выгода 10%
                  </span>
                </div>

                <h3 className="relative font-display font-bold text-xl text-white leading-snug mb-3">
                  Разовая оплата — выгоднее
                </h3>
                <p className="relative text-white/60 text-sm leading-relaxed mb-7">
                  Оплатите весь курс сразу и сэкономьте 1 530 ₽ — скидка 10% уже учтена. Никаких ежемесячных платежей.
                </p>

                {/* Price display */}
                <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-5 mb-7 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <p className="font-mono text-xs text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Zap size={11} className="text-[#F59E0B]" />
                    Единовременно за 3 месяца
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl font-extrabold gradient-text">
                      13 770 ₽
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-white/40 text-sm line-through">15 300 ₽</span>
                    <span className="font-mono text-[11px] text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded-full">
                      −1 530 ₽
                    </span>
                  </div>
                </div>

                <a
                  href="https://forms.yandex.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full"
                >
                  <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#6366F1] text-white font-medium text-base hover:opacity-90 active:opacity-80 transition shadow-lg shadow-[#7C3AED]/30">
                    Выбрать этот вариант →
                  </button>
                </a>

                <p className="relative text-center text-white/30 font-mono text-[11px] mt-4">
                  Одного платежа достаточно на весь курс
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
