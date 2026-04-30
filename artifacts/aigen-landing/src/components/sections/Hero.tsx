import { motion } from "framer-motion";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { Terminal } from "@/components/ui/Terminal";
import { Button } from "@/components/ui/button";

export function Hero() {
  const headingText = "Твой ребёнок создаст настоящий сайт с ИИ".split(" ");

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center bg-[#0A0A0F] overflow-hidden pt-20 pb-16">
      {/* Backgrounds */}
      <ParticleCanvas />
      <GradientBlobs />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-start pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-sm font-medium text-[#D8B4FE] mb-8 font-mono backdrop-blur-sm"
            >
              🚀 Старт — июнь 2025
            </motion.div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-6 tracking-tight max-w-3xl">
              {headingText.map((word, i) => {
                const isGradient = word === "с" || word === "ИИ";
                return (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.08,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    key={i}
                    className={`inline-block mr-3 mb-2 ${isGradient ? "gradient-text" : ""}`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed font-sans"
            >
              За 3 месяца школьник пройдёт путь от «что такое ИИ» до собственного проекта в интернете на своём домене — используя инструменты, которыми пользуются взрослые разработчики.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a 
                href="https://forms.yandex.ru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full glow-button bg-[#7C3AED] text-white hover:bg-[#7C3AED]/90 border-transparent rounded-full px-8 py-6 text-lg h-auto">
                  Записаться на курс →
                </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent backdrop-blur-sm px-8 py-6 text-lg h-auto" onClick={() => {
                document.querySelector("#program")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Смотреть программу
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/50 font-mono"
            >
              <span className="flex items-center gap-2"><span className="text-[#06B6D4]">✓</span> Без опыта программирования</span>
              <span className="flex items-center gap-2"><span className="text-[#06B6D4]">✓</span> Онлайн</span>
              <span className="flex items-center gap-2"><span className="text-[#06B6D4]">✓</span> Результат — живой сайт</span>
            </motion.div>
          </div>

          {/* Right Column - Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
