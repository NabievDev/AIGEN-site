import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Нужен ли опыт программирования?",
    a: "Нет. Мы начинаем с полного нуля. Единственное, что нужно — это компьютер (Windows или Mac) и стабильный интернет."
  },
  {
    q: "Сколько времени занимает курс в неделю?",
    a: "2 занятия в неделю по 1 часу + домашнее задание (обычно 30–60 минут). Итого около 3–4 часов в неделю."
  },
  {
    q: "Как проходят занятия — онлайн или офлайн?",
    a: "Полностью онлайн, в формате живой видеолекции. Все занятия записываются — пропущенное можно посмотреть."
  },
  {
    q: "Что если ребёнок отстанет или не поймёт тему?",
    a: "В группе чат поддержки с преподавателем. Плюс к записям всегда можно вернуться."
  },
  {
    q: "Что именно ребёнок сделает к концу курса?",
    a: "Готовый сайт или веб-приложение, доступное по ссылке в интернете, на собственном доменном имени, с ИИ-функциями и медиаконтентом, созданным нейросетями."
  },
  {
    q: "Как происходит запись?",
    a: "Нажмите кнопку «Записаться», заполните короткую форму. Мы свяжемся с вами в течение 24 часов."
  },
  {
    q: "Можно ли вернуть деньги, если не подойдёт?",
    a: "Да, в течение первых двух занятий — полный возврат без вопросов."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#F7F7F9]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Частые вопросы
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-0">
                <AccordionTrigger className="text-left px-6 py-5 hover:no-underline hover:bg-gray-50 rounded-xl transition-colors font-medium text-gray-900">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
