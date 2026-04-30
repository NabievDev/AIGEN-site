import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "24 лекции (по 1 часу)",
  "24 домашних задания с проверкой",
  "Доступ к записям занятий",
  "Чат поддержки с преподавателем",
  "Сертификат об окончании",
  "Финальный проект на домене"
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#7C3AED]/5 to-[#06B6D4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Стоимость участия
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[480px] mx-auto"
        >
          <div className="relative bg-white rounded-3xl p-1 shadow-[0_0_40px_-15px_rgba(124,58,237,0.3)]">
            {/* Gradient Border Illusion */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] rounded-3xl opacity-20" />
            
            <div className="relative bg-white rounded-[22px] p-8 md:p-10 flex flex-col">
              <h3 className="font-display font-bold text-2xl text-gray-900">AIGEN Intensive</h3>
              <p className="font-mono text-sm text-gray-500 mb-8 mt-1">Летний интенсив · 3 месяца</p>

              <div className="mb-2">
                <span className="font-display font-extrabold text-4xl sm:text-5xl gradient-text">12 900 ₽</span>
                <span className="text-gray-500 font-medium"> / месяц</span>
              </div>
              <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                или 34 900 ₽ за весь курс
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
                <Button size="lg" className="w-full glow-button bg-[#7C3AED] text-white hover:bg-[#7C3AED]/90 border-transparent rounded-2xl py-6 text-lg">
                  Записаться →
                </Button>
              </a>
            </div>
          </div>
          
          <p className="text-center text-xs text-gray-400 mt-6 max-w-xs mx-auto">
            Оплата возможна помесячно. Количество мест ограничено.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
