import { motion } from "framer-motion";
import { MessageCircleQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Нужен ли опыт программирования?",
    a: "Нет. Мы начинаем с полного нуля. Единственное, что нужно — это компьютер (Windows или Mac) и стабильный интернет.",
  },
  {
    q: "Сколько времени занимает курс в неделю?",
    a: "2 занятия в неделю по 1 часу + домашнее задание (обычно 30–60 минут). Итого около 3–4 часов в неделю.",
  },
  {
    q: "Как проходят занятия — онлайн или офлайн?",
    a: "Полностью онлайн, в формате живой видеолекции. Все занятия записываются — пропущенное можно посмотреть.",
  },
  {
    q: "Что если ребёнок отстанет или не поймёт тему?",
    a: "В группе чат поддержки с преподавателем. Плюс к записям всегда можно вернуться.",
  },
  {
    q: "Что если из-за летнего лагеря мы пропустим некоторые занятия?",
    a: "Все лекции и задания к домашней работе будут доступны в любой момент. От вас нужна будет только справка, подтверждающая отсутствие ребёнка. Все материалы впоследствии возможно будет просмотреть самостоятельно.",
  },
  {
    q: "Что именно ребёнок сделает к концу курса?",
    a: "Готовый сайт или веб-приложение, доступное по ссылке в интернете, на собственном доменном имени, с ИИ-функциями и медиаконтентом, созданным нейросетями.",
  },
  {
    q: "Как происходит запись?",
    a: "Нажмите кнопку «Записаться», заполните короткую форму. Мы свяжемся с вами в течение 24 часов.",
  },
  {
    q: "Можно ли вернуть деньги, если не подойдёт?",
    a: "Да, в течение первых двух занятий — полный возврат без вопросов.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F7F7F9] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #111827 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/[0.06] blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/15 mb-5">
            <MessageCircleQuestion size={14} className="text-[#7C3AED]" />
            <span className="font-mono text-[11px] tracking-wider text-[#7C3AED] uppercase">
              Вопросы и ответы
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Собрали самое важное. Не нашли ответ — напишите нам в Telegram.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-[#7C3AED]/15 via-transparent to-[#06B6D4]/10 blur-xl opacity-60" />
          <div className="relative bg-white rounded-2xl border border-gray-200/80 shadow-[0_8px_40px_-15px_rgba(124,58,237,0.1)] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#F59E0B]" />
            <div className="p-2">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left px-6 py-5 hover:no-underline hover:bg-gray-50/80 rounded-xl transition-colors font-medium text-gray-900 group">
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[11px] text-[#7C3AED] opacity-60 group-hover:opacity-100 transition shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-gray-600 leading-relaxed pl-[52px]">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
