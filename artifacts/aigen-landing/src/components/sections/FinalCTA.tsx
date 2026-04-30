import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0F] to-[#1E0A3C] border-t border-white/10 relative overflow-hidden">
      {/* Decorative stars / particles static feel */}
      <div className="absolute inset-0 dark-dot-grid opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Мест осталось немного
          </h2>
          
          <p className="text-xl text-white/70 mb-10 font-sans">
            Запись на летний интенсив открыта. Старт — июнь.
          </p>
          
          <div className="flex flex-col items-center">
            <a 
              href="https://forms.yandex.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto glow-button bg-[#7C3AED] text-white hover:bg-[#7C3AED]/90 border-transparent rounded-full px-10 py-7 text-xl font-medium shadow-[0_0_40px_rgba(124,58,237,0.4)]">
                Оставить заявку →
              </Button>
            </a>
            
            <p className="mt-6 text-sm text-white/40 font-mono">
              Форма откроется в новой вкладке · Ответим в течение 24 часов
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
