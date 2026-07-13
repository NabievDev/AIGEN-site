import { useState } from "react";
import { submitLead } from "@/lib/submitLead";

const subjects = ["Информатика", "Математика", "Английский язык", "Китайский язык"];
const programs = ["Общеобразовательная программа", "Подготовка к ОГЭ", "Подготовка к ЕГЭ"];

export function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "", program: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await submitLead(form);
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить заявку. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-bg section-pattern py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Онлайн-школа подготовки к экзаменам
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Подготовим к ОГЭ и ЕГЭ{" "}
            <span className="gradient-text">с результатом</span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Преподаватели с 4-летним опытом помогут освоить программу, подготовиться к ОГЭ или ЕГЭ по информатике, математике, английскому и китайскому языкам.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Индивидуальный подход к каждому ученику",
              "Занятия в удобное время из любой точки мира",
              "Более 600 учеников прошли подготовку",
              "4 года успешной работы",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <div className="flex -space-x-2">
              {["🎓", "📚", "✏️", "🏆"].map((em, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-base">
                  {em}
                </div>
              ))}
            </div>
            <span>Присоединяйтесь к сотням успешных учеников</span>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Заявка принята!</h3>
              <p className="text-slate-600">Мы свяжемся с вами в ближайшее время и расскажем о программе обучения.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-slate-900 mb-1">Оставить заявку</h2>
              <p className="text-slate-500 text-sm mb-6">Мы свяжемся и ответим на все вопросы</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Телефон *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Предмет</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Выберите предмет</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Программа обучения</label>
                  <select
                    value={form.program}
                    onChange={(e) => setForm({ ...form, program: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Выберите программу</option>
                    {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-70"
                >
                  {loading ? "Отправляем..." : "Записаться на бесплатную консультацию →"}
                </button>

                <p className="text-center text-xs text-slate-400">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
