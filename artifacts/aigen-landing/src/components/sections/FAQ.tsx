import { useState } from "react";

const faqs = [
  {
    q: "Как проходят занятия?",
    a: "Все занятия проводятся онлайн в формате видеоконференции. Преподаватель и ученик работают в общей онлайн-доске, разбирают задачи, делают конспекты. Для занятий нужен компьютер или ноутбук с интернетом.",
  },
  {
    q: "С какого класса можно начать подготовку?",
    a: "Чем раньше начать, тем лучше. Мы принимаем учеников с любого класса: и для улучшения текущей успеваемости, и для целенаправленной подготовки к ОГЭ (9 класс) или ЕГЭ (11 класс).",
  },
  {
    q: "Как часто проходят занятия?",
    a: "Частота занятий обсуждается индивидуально. Как правило — 2–3 раза в неделю по 60–90 минут. Расписание составляется удобно для ученика и его семьи.",
  },
  {
    q: "Что если мы из другого города или страны?",
    a: "Это не проблема — все занятия проходят онлайн. У нас учатся ребята из разных городов России и из-за рубежа. Часовые пояса учитываются при составлении расписания.",
  },
  {
    q: "Как быстро будет виден результат?",
    a: "Первые результаты обычно заметны уже через 1–2 месяца регулярных занятий. Для серьёзной подготовки к ОГЭ/ЕГЭ рекомендуем начинать за 6–12 месяцев до экзамена.",
  },
  {
    q: "Есть ли домашние задания?",
    a: "Да, после каждого занятия преподаватель даёт задание для самостоятельной работы. Оно проверяется на следующем уроке. Это важная часть обучения, которая закрепляет пройденный материал.",
  },
  {
    q: "Как узнать стоимость занятий?",
    a: "Стоимость зависит от предмета, программы и количества занятий в неделю. Оставьте заявку, и мы свяжемся с вами, чтобы подобрать оптимальный формат и рассчитать стоимость.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-slate-500">Не нашли ответа? Оставьте заявку — мы ответим лично</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${open === i ? "border-orange-300 shadow-sm" : "border-slate-200"}`}
            >
              <button
                className="w-full text-left flex items-center justify-between gap-4 px-6 py-4 font-medium text-slate-900 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-orange-500 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-orange-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#lead-form" className="btn-primary inline-flex">
            Остались вопросы? Напишите нам
          </a>
        </div>
      </div>
    </section>
  );
}
