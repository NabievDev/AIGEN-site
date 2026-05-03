import { useState } from "react";
import { Send } from "lucide-react";
import { SiVk } from "react-icons/si";
import { PrivacyModal } from "@/components/PrivacyModal";

function MaxIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Мессенджер Макс"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.75 13.5h-1.5v-4.19l-2.25 2.94-2.25-2.94V15.5H8.25v-7h1.5l2.25 3 2.25-3h1.5v7z" />
    </svg>
  );
}

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
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
                Летний интенсив по ИИ для школьников 8–15 лет
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7C3AED]/20 hover:text-[#7C3AED] transition-colors border border-white/5"
                  aria-label="Telegram"
                >
                  <Send size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077FF]/20 hover:text-[#0077FF] transition-colors border border-white/5"
                  aria-label="ВКонтакте"
                >
                  <SiVk size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#005FF9]/20 hover:text-[#005FF9] transition-colors border border-white/5"
                  aria-label="Мессенджер Макс"
                >
                  <MaxIcon size={18} />
                </a>
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h4 className="font-mono text-sm font-bold tracking-wider uppercase text-white/40 mb-6">
                Навигация
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "О курсе", anchor: "about" },
                  { label: "Программа", anchor: "program" },
                  { label: "Цена", anchor: "pricing" },
                  { label: "FAQ", anchor: "faq" },
                ].map(({ label, anchor }) => (
                  <li key={anchor}>
                    <a
                      href={`#${anchor}`}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contacts */}
            <div>
              <h4 className="font-mono text-sm font-bold tracking-wider uppercase text-white/40 mb-6">
                Контакты
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:chuvashia@fsp-russia.ru"
                    className="text-white/70 hover:text-[#7C3AED] transition-colors"
                  >
                    chuvashia@fsp-russia.ru
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/fspchuvbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#7C3AED] transition-colors"
                  >
                    @fspchuvbot (Telegram)
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
              © 2026 AIGEN Intensive ·{" "}
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-4 cursor-pointer"
              >
                Политика конфиденциальности
              </button>
            </p>
          </div>
        </div>
      </footer>

      {privacyOpen && <PrivacyModal onClose={() => setPrivacyOpen(false)} />}
    </>
  );
}
