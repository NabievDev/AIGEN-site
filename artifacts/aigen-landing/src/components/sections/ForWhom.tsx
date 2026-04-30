import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function ForWhom() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Этот интенсив — для тебя, если...
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Kids Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] mb-6">
              <span className="font-display font-bold text-xl">Для ребёнка</span>
            </div>
            
            <ul className="space-y-5">
              {[
                "Тебе интересно, как работает ИИ — не просто «поговорить», а реально создавать",
                "Ты хочешь сделать что-то настоящее — игру, сайт или инструмент, которым пользуются другие",
                "Тебе нравится разбираться в новых технологиях быстрее взрослых"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Parents Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] mb-6">
              <span className="font-display font-bold text-xl">Для родителя</span>
            </div>
            
            <ul className="space-y-5">
              {[
                "Ты хочешь, чтобы ребёнок провёл лето с пользой, а не только с TikTok",
                "Тебе важен конкретный результат, а не просто «прошли курс»",
                "Ты ищешь навыки, которые реально пригодятся в будущем"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#06B6D4] shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center shadow-sm"
        >
          <p className="font-medium text-amber-900 md:text-lg flex items-center justify-center gap-2">
            <span className="text-2xl">⚡</span> Опыт программирования не нужен. Нужен только компьютер и интерес.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
