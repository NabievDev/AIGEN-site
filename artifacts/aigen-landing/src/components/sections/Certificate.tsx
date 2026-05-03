import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck, FileText, X, ExternalLink } from "lucide-react";
import certificateImg from "@/assets/certificate-nobg.png";

const ACCREDITATION_PDF_URL = "/accreditation.pdf";

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

function PdfModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[999] flex flex-col"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#0A0A0F]/90 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 m-4 md:m-8 flex flex-col flex-1 rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(124,58,237,0.5)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#111119] border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-lg shadow-[#F59E0B]/30">
                <Award size={16} className="text-white" strokeWidth={2.25} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/40 leading-none mb-0.5">
                  Документ об аккредитации
                </p>
                <p className="font-display font-bold text-white text-sm leading-none">
                  Федерация спортивного программирования Чувашии
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={ACCREDITATION_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition font-mono text-[11px] tracking-wide"
              >
                <ExternalLink size={12} />
                Открыть в новой вкладке
              </a>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
                aria-label="Закрыть"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <div className="flex-1 bg-[#1A1A24] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/30">
                <Award size={40} className="mx-auto mb-3 text-white/20" />
                <p className="font-mono text-sm">Загрузка документа…</p>
              </div>
            </div>
            <iframe
              src={ACCREDITATION_PDF_URL}
              className="relative z-10 w-full h-full border-0"
              title="Документ об аккредитации Федерации спортивного программирования Чувашии"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Certificate() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <section id="certificate" className="relative py-24 md:py-32 bg-[#F7F7F9] overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #111827 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
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
              Сертификат от{" "}
              <span className="gradient-text">Федерации спортивного программирования</span>
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
              <div className="relative pt-6 pb-10">
                <motion.div
                  aria-hidden="true"
                  animate={{ scaleX: [1, 0.85, 1], opacity: [0.55, 0.35, 0.55] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-10 rounded-[50%] bg-[#0A0A0F]/25 blur-2xl"
                />
                <motion.div
                  aria-hidden="true"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-x-0 top-0 mx-auto w-4/5 h-full bg-gradient-to-br from-[#7C3AED]/25 via-[#06B6D4]/15 to-[#F59E0B]/15 blur-[80px] rounded-[40px]"
                />
                <motion.div
                  animate={{ y: [0, -14, 0], rotate: [-1, 1, -1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="relative z-10 mx-auto max-w-[560px] drop-shadow-[0_40px_60px_rgba(17,24,39,0.35)]"
                >
                  <img
                    src={certificateImg}
                    alt="Образец сертификата от Федерации спортивного программирования Чувашии"
                    className="w-full h-auto block select-none pointer-events-none"
                    loading="lazy"
                    draggable={false}
                  />
                </motion.div>

                {/* "Образец" badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute top-2 right-4 sm:top-4 sm:right-8 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0F] text-white shadow-xl shadow-[#0A0A0F]/30 border border-white/10 font-mono text-xs tracking-wide"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
                    ОБРАЗЕЦ
                  </motion.div>
                </motion.div>

                {/* Award badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.55, type: "spring", stiffness: 150 }}
                  className="absolute bottom-4 left-2 sm:bottom-6 sm:left-4 z-20"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="flex items-center gap-3 pl-3 pr-5 py-3 rounded-2xl bg-white shadow-2xl border border-gray-100"
                  >
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
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right column */}
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

              {/* Benefits */}
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

              {/* CTA button to open PDF */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button
                  onClick={() => setShowPdf(true)}
                  className="group relative w-full overflow-hidden rounded-2xl"
                >
                  {/* Outer gradient border */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#F59E0B] opacity-60 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-white rounded-[calc(16px-1px)] px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/10 flex items-center justify-center group-hover:from-[#7C3AED]/20 group-hover:to-[#06B6D4]/20 transition">
                        <FileText size={16} className="text-[#7C3AED]" strokeWidth={2.25} />
                      </div>
                      <div className="text-left">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400 leading-none mb-0.5">
                          Официальный документ
                        </p>
                        <p className="font-display font-bold text-gray-900 text-sm leading-none">
                          Просмотреть документ об аккредитации
                        </p>
                      </div>
                    </div>
                    <ExternalLink
                      size={18}
                      className="text-gray-400 group-hover:text-[#7C3AED] shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {showPdf && <PdfModal onClose={() => setShowPdf(false)} />}
    </>
  );
}
