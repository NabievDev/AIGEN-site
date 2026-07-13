const programs = [
  {
    badge: "Для всех",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Общеобразовательная программа",
    description: "Укрепляем знания по школьной программе, устраняем пробелы и помогаем уверенно учиться. Подходит для любого класса и уровня.",
    features: [
      "Работа с текущей школьной программой",
      "Выявление и устранение пробелов в знаниях",
      "Домашние задания и проверка",
      "Регулярная обратная связь родителям",
    ],
    accent: "border-blue-200",
    iconBg: "bg-blue-50 text-blue-500",
    icon: "📖",
  },
  {
    badge: "9 класс",
    badgeColor: "bg-orange-100 text-orange-700",
    title: "Подготовка к ОГЭ",
    description: "Системная подготовка к основному государственному экзамену. Разбираем формат, решаем варианты, нарабатываем навыки.",
    features: [
      "Разбор всех заданий формата ОГЭ",
      "Решение реальных вариантов прошлых лет",
      "Работа с типичными ошибками",
      "Психологическая подготовка к экзамену",
    ],
    accent: "border-orange-300",
    iconBg: "bg-orange-50 text-orange-500",
    icon: "📝",
    featured: true,
  },
  {
    badge: "11 класс",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Подготовка к ЕГЭ",
    description: "Глубокая подготовка к единому государственному экзамену. Цель — максимальный балл для поступления в вуз мечты.",
    features: [
      "Полное прохождение программы ЕГЭ",
      "Разбор заданий повышенной сложности",
      "Пробные экзамены в формате реального ЕГЭ",
      "Стратегия набора максимального балла",
    ],
    accent: "border-purple-200",
    iconBg: "bg-purple-50 text-purple-500",
    icon: "🎓",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-20 bg-slate-50 section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Форматы обучения</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Выберите свою программу
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Индивидуальный план для каждого ученика в зависимости от цели и уровня
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {programs.map((prog, i) => (
            <div
              key={i}
              className={`card-hover bg-white rounded-2xl border-2 ${prog.accent} p-7 flex flex-col gap-5 shadow-sm relative ${prog.featured ? "ring-2 ring-orange-400 ring-offset-2" : ""}`}
            >
              {prog.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="orange-gradient text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                    Популярный выбор
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${prog.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {prog.icon}
                </div>
                <div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${prog.badgeColor}`}>
                    {prog.badge}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg mt-2 leading-snug">{prog.title}</h3>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed">{prog.description}</p>

              <ul className="space-y-2.5">
                {prog.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#lead-form" className="btn-primary mt-auto text-sm">
                Записаться →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
