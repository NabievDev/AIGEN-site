import { Send } from "lucide-react";
import { SiVk } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-display font-bold text-2xl tracking-tight">AIGEN</span>
              <div className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full mb-0.5" />
            </div>
            <p className="text-white/60 text-sm max-w-xs mb-6">
              Летний интенсив по ИИ для школьников 10–14 лет
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7C3AED]/20 hover:text-[#7C3AED] transition-colors border border-white/5">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077FF]/20 hover:text-[#0077FF] transition-colors border border-white/5">
                <SiVk size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-mono text-sm font-bold tracking-wider uppercase text-white/40 mb-6">Навигация</h4>
            <ul className="space-y-3">
              {["О курсе", "Программа", "Преподаватели", "Цена", "FAQ"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link === "О курсе" ? "about" : link === "Цена" ? "pricing" : link === "Программа" ? "program" : link === "Преподаватели" ? "teachers" : "faq"}`} 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-mono text-sm font-bold tracking-wider uppercase text-white/40 mb-6">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@aigen.school" className="text-white/70 hover:text-[#7C3AED] transition-colors">
                  hello@aigen.school
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#7C3AED] transition-colors">
                  @aigen_school (Telegram)
                </a>
              </li>
              <li className="text-white/50 text-sm mt-4 pt-4 border-t border-white/10">
                Время ответа: пн–пт, 10:00–20:00
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-sm text-white/40">
            © 2025 AIGEN Intensive · <a href="#" className="hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-4">Политика конфиденциальности</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
