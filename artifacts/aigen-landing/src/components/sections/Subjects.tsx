const subjects = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Информатика",
    emoji: "💻",
    description: "Программирование, алгоритмы, базы данных. Подготовка к ОГЭ и ЕГЭ по информатике с нуля до высокого балла.",
    tags: ["Python", "Алгоритмы", "ЕГЭ/ОГЭ"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Математика",
    emoji: "📐",
    description: "Алгебра, геометрия, теория вероятностей. Разбираем задачи всех уровней сложности для уверенной сдачи экзамена.",
    tags: ["Алгебра", "Геометрия", "ЕГЭ/ОГЭ"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.782 3 18.128" />
      </svg>
    ),
    title: "Английский язык",
    emoji: "🇬🇧",
    description: "Грамматика, лексика, говорение, письмо. Комплексная подготовка к ОГЭ и ЕГЭ по английскому языку.",
    tags: ["Грамматика", "Speaking", "ЕГЭ/ОГЭ"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    title: "Китайский язык",
    emoji: "🇨🇳",
    description: "Иероглифика, грамматика, разговорный китайский. Один из самых востребованных языков для изучения.",
    tags: ["Иероглифика", "Грамматика", "ОГЭ"],
  },
];

export function Subjects() {
  return (
    <section id="subjects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Направления</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            По каким предметам готовим
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Занятия ведут опытные преподаватели с многолетним стажем подготовки к экзаменам
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((s, i) => (
            <div
              key={i}
              className="card-hover bg-white border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map((tag) => (
                  <span key={tag} className="bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#lead-form" className="btn-primary inline-flex">
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  );
}
