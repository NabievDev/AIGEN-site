import { motion } from "framer-motion";
import { Send, Github } from "lucide-react";
import { SiVk } from "react-icons/si";

const teachers = [
  {
    name: "Иван Петров",
    role: "Frontend-разработчик · ИИ-энтузиаст",
    bio: "5 лет в разработке, работал с Replit и Kiro с первого релиза. Объясняю сложные вещи так, что понимают даже родители.",
    initials: "ИП",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Анна Соколова",
    role: "AI Engineer · Преподаватель",
    bio: "Строила ИИ-агентов для крупных компаний. Верю, что подростки осваивают новые инструменты быстрее всех остальных.",
    initials: "АС",
    color: "from-purple-500 to-fuchsia-500"
  },
  {
    name: "Дмитрий Орлов",
    role: "Fullstack · Ментор",
    bio: "Учу детей с 2018 года. Помогаю пройти путь от первой строчки кода до собственного запущенного проекта.",
    initials: "ДО",
    color: "from-amber-400 to-orange-500"
  }
];

export function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-[#F7F7F9]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Кто ведёт курс
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:-translate-y-1.5 transition-transform"
            >
              {/* Avatar Placeholder */}
              <div className={`w-24 h-24 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br ${t.color} text-white font-display text-2xl font-bold shadow-inner`}>
                {t.initials}
              </div>
              
              <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{t.name}</h3>
              <p className="font-mono text-xs text-gray-500 mb-4 bg-gray-100 px-3 py-1 rounded-full">{t.role}</p>
              
              <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                {t.bio}
              </p>
              
              <div className="flex items-center gap-4 text-gray-400 mt-auto">
                <a href="#" onClick={e=>e.preventDefault()} className="hover:text-[#7C3AED] transition-colors">
                  <Send size={18} />
                </a>
                <a href="#" onClick={e=>e.preventDefault()} className="hover:text-[#0077FF] transition-colors">
                  <SiVk size={18} />
                </a>
                <a href="#" onClick={e=>e.preventDefault()} className="hover:text-black transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
