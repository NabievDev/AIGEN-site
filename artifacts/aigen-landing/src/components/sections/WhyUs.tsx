const reasons = [
  {
    icon: "🏅",
    title: "4 года опыта",
    description: "Преподаватели школы ведут подготовку к экзаменам уже 4 года и знают все особенности каждого формата.",
  },
  {
    icon: "👨‍🎓",
    title: "Более 600 учеников",
    description: "Сотни выпускников успешно сдали ОГЭ и ЕГЭ и поступили в выбранные учебные заведения.",
  },
  {
    icon: "💻",
    title: "Полностью онлайн",
    description: "Занимайтесь из дома, в дороге или из другого города — нужен только компьютер и интернет.",
  },
  {
    icon: "🎯",
    title: "Индивидуальный подход",
    description: "Программа составляется под конкретного ученика с учётом его уровня, целей и темпа обучения.",
  },
  {
    icon: "📅",
    title: "Гибкое расписание",
    description: "Занятия в удобное для вас время — утром, вечером или на выходных. Без жёсткой привязки к расписанию.",
  },
  {
    icon: "📊",
    title: "Отчётность для родителей",
    description: "Регулярная обратная связь: прогресс ученика, темы занятий и рекомендации для самостоятельной работы.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Почему мы</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Почему выбирают ФениксУм
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Мы не просто объясняем теорию — мы готовим к реальному экзамену с реальным результатом
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="card-hover flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="text-3xl flex-shrink-0">{r.icon}</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1.5">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-14 orange-gradient rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Готовы начать подготовку?
            </h3>
            <p className="text-orange-100">
              Оставьте заявку — мы свяжемся и подберём программу именно для вас
            </p>
          </div>
          <a
            href="#lead-form"
            className="flex-shrink-0 bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
          >
            Оставить заявку →
          </a>
        </div>
      </div>
    </section>
  );
}
