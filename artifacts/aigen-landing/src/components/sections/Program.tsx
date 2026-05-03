import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const programData = [
  {
    id: "june",
    tab: "Июнь",
    title: "Июнь — Вводная в ИИ",
    subtitle: "8 занятий · Введение в мир инструментов",
    items: [
      "Что такое ИИ и как им пользоваться",
      "Обзор сервисов: ChatGPT, Claude, Midjourney и другие",
      "VPN: зачем нужен и как настроить",
      "Что такое ИИ-агент и как он работает",
      "Первое знакомство с Kiro (IDE от Amazon)",
      "Первый HTML-проект через ИИ-агента",
    ],
  },
  {
    id: "july",
    tab: "Июль",
    title: "Июль — Replit и первые проекты",
    subtitle: "8 занятий · Создаём и запускаем",
    items: [
      "Знакомство с Replit и облачной разработкой",
      "Как работать с Replit бесплатно (несколько аккаунтов + почтовые домены)",
      "Git и GitHub: как хранить и не терять код",
      "Связка аккаунтов Replit через Git — работаем над проектом непрерывно",
      "Устранение ошибок: как «читать» баги и просить ИИ их исправить",
      "Дизайн и мобильная версия",
    ],
  },
  {
    id: "august",
    tab: "Август",
    title: "Август — Продвинутый уровень: деплой и медиа",
    subtitle: "8 занятий · Делаем финальный проект",
    items: [
      "MCP-серверы: подключаем внешние инструменты к Replit",
      "Генерация картинок через нейросети (Midjourney, DALL·E)",
      "Motion-сайты: видео и анимации от ИИ",
      "Что такое сервер и как устроен интернет",
      "Деплой проекта через Kiro",
      "Домен: покупка и подключение",
      "🎓 Финальная презентация проектов и сертификаты",
    ],
  },
];

export function Program() {
  const [activeTab, setActiveTab] = useState(programData[0].id);
  const activeContent = programData.find((d) => d.id === activeTab)!;

  return (
    <section id="program" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#7C3AED]/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/15 mb-5">
            <CalendarDays size={14} className="text-[#7C3AED]" />
            <span className="font-mono text-[11px] tracking-wider text-[#7C3AED] uppercase">
              3 месяца · 24 занятия
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
            Программа <span className="gradient-text">интенсива</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Каждый месяц — свой уровень и своя задача. К концу августа — готовый проект в интернете.
          </p>

          {/* Month tabs */}
          <div className="inline-flex p-1.5 bg-gray-100 rounded-full border border-gray-200">
            {programData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-7 py-2.5 text-sm sm:text-base font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? "text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#6366F1] rounded-full shadow-md shadow-[#7C3AED]/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-[0_8px_40px_-15px_rgba(124,58,237,0.15)]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#F59E0B]" />
          <div className="bg-white p-8 md:p-10 min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-1">
                  {activeContent.title}
                </h3>
                <p className="font-mono text-[#7C3AED] text-sm font-medium mb-8 pb-6 border-b border-gray-100">
                  {activeContent.subtitle}
                </p>

                <ul className="space-y-4">
                  {activeContent.items.map((item, i) => {
                    const isGraduation = item.includes("🎓");
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                            isGraduation ? "bg-amber-400" : "bg-[#06B6D4]"
                          }`}
                        />
                        <span
                          className={`text-gray-700 leading-relaxed ${
                            isGraduation ? "font-medium" : ""
                          }`}
                        >
                          {item}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="https://forms.yandex.ru/u/69f71ba1d0468853be7e29d2" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="glow-button bg-[#7C3AED] text-white hover:bg-[#7C3AED]/90 border-transparent rounded-full px-10 py-6 text-lg"
            >
              Записаться на курс →
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
