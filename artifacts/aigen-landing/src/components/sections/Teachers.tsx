import { motion } from "framer-motion";
import { Send, Github, Users } from "lucide-react";
import { SiVk } from "react-icons/si";

const teachers = [
  {
    name: "Набиев Александр",
    role: "CEO ФСП ЧУВАШИИ · Руководитель интенсива",
    bio: "Президент Федерации спортивного программирования Чувашии, внедряет технологии ИИ-агентов в производственные бизнес-процессы.",
    initials: "НА",
    color: "from-[#7C3AED] to-[#6366F1]",
    glow: "#7C3AED",
  },
  {
    name: "Христофоров Иван",
    role: "Fullstack · Преподаватель",
    bio: "Капитан Сборной команды Чувашии по спортивному программированию, разработчик АртИнТех.",
    initials: "ХИ",
    color: "from-[#06B6D4] to-[#0EA5E9]",
    glow: "#06B6D4",
  },
  {
    name: "Фадеев Тимур",
    role: "UI/UX Designer · Преподаватель",
    bio: "Использование ИИ не просто для программирования, а для конструирования продуктов мирового уровня за счёт тщательной проработки User-интерфейса.",
    initials: "ФТ",
    color: "from-[#F59E0B] to-[#F97316]",
    glow: "#F59E0B",
  },
];

export function Teachers() {
  return (
    <section id="teachers" className="py-24 md:py-32 bg-[#F7F7F9] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #111827 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/[0.07] blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/15 mb-5">
            <Users size={14} className="text-[#7C3AED]" />
            <span className="font-mono text-[11px] tracking-wider text-[#7C3AED] uppercase">
              Команда
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Кто <span className="gradient-text">ведёт курс</span>
          </h2>
          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Практики, а не теоретики — каждый из преподавателей работает с ИИ-инструментами прямо сейчас.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teachers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition duration-500"
                style={{ background: `linear-gradient(135deg, ${t.glow}40, transparent 60%)` }}
              />

              <div className="relative h-full bg-white border border-gray-200/80 rounded-3xl p-7 md:p-8 shadow-[0_4px_20px_-10px_rgba(17,24,39,0.07)] group-hover:shadow-[0_20px_50px_-20px_rgba(17,24,39,0.18)] group-hover:-translate-y-1.5 group-hover:border-transparent transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${t.glow}, transparent)`,
                  }}
                />
                {/* Corner glow */}
                <div
                  className="pointer-events-none absolute -top-16 right-0 w-40 h-40 rounded-full opacity-[0.06] group-hover:opacity-[0.14] blur-2xl transition"
                  style={{ backgroundColor: t.glow }}
                />

                {/* Avatar */}
                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition duration-500"
                    style={{ backgroundColor: t.glow }}
                  />
                  <div
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br ${t.color} text-white font-display text-2xl font-bold shadow-lg`}
                  >
                    {t.initials}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{t.name}</h3>

                <div className="mb-5">
                  <span className="font-mono text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full inline-block">
                    {t.role}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">{t.bio}</p>

                <div className="flex items-center gap-4 text-gray-400 mt-auto pt-4 border-t border-gray-100 w-full justify-center">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="hover:text-[#7C3AED] transition-colors"
                  >
                    <Send size={18} />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="hover:text-[#0077FF] transition-colors"
                  >
                    <SiVk size={18} />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="hover:text-black transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
