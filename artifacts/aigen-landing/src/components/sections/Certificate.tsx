import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck, FileText } from "lucide-react";
import certificateImg from "@/assets/certificate.png";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Аккредитация Минспорта",
    text: "Региональная федерация аккредитована Министерством физической культуры и спорта Чувашской Республики.",
  },
  {
    icon: BadgeCheck,
    title: "Официальный документ",
    text: "Сертификат подтверждает прохождение программы и навыки в области ИИ и спортивного программирования.",
  },
  {
    icon: FileText,
    title: "Первая строка в портфолио",
    text: "Можно приложить к олимпиадным заявкам, при поступлении в ИТ-классы и профильные вузы.",
  },
];

export function Certificate() {
  return (
    <section id="certificate" className="relative py-24 md:py-32 bg-[#F7F7F9] overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #111827 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Soft accent glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/[0.07] blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/15 mb-5">
            <Award size={14} className="text-[#7C3AED]" />
            <span className="font-mono text-[11px] tracking-wider text-[#7C3AED] uppercase">
              Документ об окончании
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight">
            Сертификат от <span className="gradient-text">Федерации спортивного программирования</span>
          </h2>
          <p className="mt-5 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            По итогам интенсива каждый ученик получает официальный сертификат от региональной
            спортивной федерации, аккредитованной Министерством спорта Чувашской Республики.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Certificate Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow halo */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#7C3AED]/20 via-[#06B6D4]/15 to-[#F59E0B]/15 blur-3xl rounded-[40px]" />

              <motion.div
                initial={{ rotate: -2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(17,24,39,0.45)] border border-white/40"
              >
                <img
                  src={certificateImg}
                  alt="Образец сертификата от Федерации спортивного программирования Чувашии"
                  className="w-full h-auto block"
                  loading="lazy"
                />
                {/* Subtle gloss overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
              </motion.div>

              {/* Floating "Образец" badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-10"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0F] text-white shadow-xl shadow-[#0A0A0F]/30 border border-white/10 font-mono text-xs tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
                  ОБРАЗЕЦ
                </div>
              </motion.div>

              {/* Floating award badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55, type: "spring", stiffness: 150 }}
                className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 z-10"
              >
                <div className="flex items-center gap-3 pl-3 pr-5 py-3 rounded-2xl bg-white shadow-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-lg shadow-[#F59E0B]/30">
                    <Award size={20} className="text-white" strokeWidth={2.25} />
                  </div>
                  <div className="leading-tight">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400">
                      Аккредитация
                    </p>
                    <p className="font-display font-bold text-gray-900 text-sm">
                      Минспорт Чувашии
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column — federation info + benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Federation card */}
            <div className="relative bg-white border border-gray-200 rounded-3xl p-7 md:p-8 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#F59E0B]" />

              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                  <ShieldCheck size={22} className="text-[#7C3AED]" strokeWidth={2.25} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Кто выдаёт
                  </p>
                  <h3 className="font-display font-bold text-xl text-gray-900 leading-tight">
                    Региональная федерация спортивного программирования Чувашии
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Аккредитованная Министерством физической культуры и спорта Чувашской Республики
                спортивная федерация. Сертификат — это не «бумажка о просмотре», а официально
                признанный документ.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="group flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-white/70 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/10 flex items-center justify-center group-hover:from-[#7C3AED]/20 group-hover:to-[#06B6D4]/20 transition">
                    <b.icon size={18} className="text-[#7C3AED]" strokeWidth={2.25} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 text-base mb-1">
                      {b.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
