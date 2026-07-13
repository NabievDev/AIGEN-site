import logoNobg from "@/assets/logo-nobg.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={logoNobg}
              alt="ФениксУм"
              className="h-10 w-auto mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Онлайн школа подготовки к ОГЭ и ЕГЭ. 4 года опыта, более 600 учеников.
              Информатика, математика, английский и китайский языки.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Направления</h4>
            <ul className="space-y-2 text-sm">
              {["Информатика", "Математика", "Английский язык", "Китайский язык"].map((s) => (
                <li key={s}>
                  <a href="#subjects" className="hover:text-orange-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Программы</h4>
            <ul className="space-y-2 text-sm">
              {["Общеобразовательная", "Подготовка к ОГЭ", "Подготовка к ЕГЭ"].map((p) => (
                <li key={p}>
                  <a href="#programs" className="hover:text-orange-400 transition-colors">{p}</a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  Оставить заявку →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} ФениксУм. Все права защищены.</p>
          <p className="text-slate-500">Онлайн школа подготовки к экзаменам</p>
        </div>
      </div>
    </footer>
  );
}
