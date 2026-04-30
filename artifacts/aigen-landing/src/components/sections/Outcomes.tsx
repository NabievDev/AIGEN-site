import { motion } from "framer-motion";
import { Globe, Bot, Film, Github } from "lucide-react";

const outcomes = [
  {
    icon: Globe,
    title: "Живой сайт в интернете",
    desc: "Готовый проект, доступный по ссылке — не «домашнее задание», а настоящий сайт на своём домене",
    color: "text-[#7C3AED]",
    bg: "bg-[#7C3AED]/10"
  },
  {
    icon: Bot,
    title: "Умение работать с ИИ-агентами",
    desc: "Kiro, Replit, MCP — инструменты, которые используют профессиональные разработчики прямо сейчас",
    color: "text-[#06B6D4]",
    bg: "bg-[#06B6D4]/10"
  },
  {
    icon: Film,
    title: "Медиаконтент для проекта",
    desc: "Сгенерированные картинки и видео, motion-анимации — проект будет выглядеть профессионально",
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    icon: Github,
    title: "Портфолио на GitHub",
    desc: "Код проекта сохранён в репозитории. Это первая строчка в будущем резюме",
    color: "text-gray-900",
    bg: "bg-gray-200/50"
  }
];

export function Outcomes() {
  return (
    <section className="py-24 bg-[#F7F7F9] relative">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Что будет в руках после курса
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.bg} ${item.color}`}>
                <item.icon strokeWidth={1.5} size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
