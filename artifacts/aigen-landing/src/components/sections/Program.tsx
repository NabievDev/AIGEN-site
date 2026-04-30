import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      "Первый HTML-проект через ИИ-агента"
    ]
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
      "Дизайн и мобильная версия"
    ]
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
      "🎓 Финальная презентация проектов и сертификаты"
    ]
  }
];

export function Program() {
  const [activeTab, setActiveTab] = useState(programData[0].id);

  const activeContent = programData.find(d => d.id === activeTab)!;

  return (
    <section id="program" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-8">
            Программа интенсива
          </h2>

          {/* Custom Tabs */}
          <div className="inline-flex p-1.5 bg-gray-100 rounded-full w-full sm:w-auto max-w-full overflow-x-auto border border-gray-200">
            {programData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 text-sm sm:text-base font-medium rounded-full transition-colors whitespace-nowrap flex-1 sm:flex-none ${
                  activeTab === tab.id ? "text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[#7C3AED] rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col h-full"
            >
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">{activeContent.title}</h3>
              <p className="font-mono text-[#7C3AED] text-sm md:text-base font-medium mb-8 pb-6 border-b border-gray-100">
                {activeContent.subtitle}
              </p>
              
              <ul className="space-y-4 mb-8 flex-1">
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
                      <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${isGraduation ? "bg-amber-400" : "bg-[#06B6D4]"}`} />
                      <span className={`text-gray-700 leading-relaxed ${isGraduation ? "font-medium" : ""}`}>
                        {item}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="https://forms.yandex.ru/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="glow-button bg-[#7C3AED] text-white hover:bg-[#7C3AED]/90 border-transparent rounded-full px-10 py-6 text-lg">
              Записаться на курс →
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
