const stats = [
  { value: "4", suffix: " года", label: "Преподаватели готовят учеников к экзаменам" },
  { value: "600", suffix: "+", label: "Учеников успешно прошли подготовку" },
  { value: "4", suffix: "", label: "Предмета: информатика, математика, английский, китайский" },
  { value: "100", suffix: "%", label: "Онлайн — занимайтесь из любой точки мира" },
];

export function Stats() {
  return (
    <section className="bg-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              {stat.value}<span className="text-orange-300">{stat.suffix}</span>
            </div>
            <p className="text-slate-400 text-sm leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
