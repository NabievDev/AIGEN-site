import { useState } from "react";

const subjects = ["Информатика", "Математика", "Английский язык", "Китайский язык"];
const programs = ["Общеобразовательная программа", "Подготовка к ОГЭ", "Подготовка к ЕГЭ"];

export function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    program: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="lead-form" className="py-20 bg-slate-900 section-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Запись</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Оставьте заявку
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Заполните форму — мы перезвоним, ответим на все вопросы и подберём оптимальную программу
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {submitted ? (
            <div className="text-center py-16 px-8">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Заявка отправлена!</h3>
              <p className="text-slate-500 text-lg max-w-sm mx-auto">
                Спасибо! Мы свяжемся с вами в ближайшее время и расскажем о возможностях обучения.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left decorative panel */}
              <div className="md:col-span-2 orange-gradient p-8 hidden md:flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl mb-4">ФениксУм</h3>
                  <p className="text-orange-100 text-sm leading-relaxed mb-8">
                    Онлайн школа подготовки к экзаменам. Индивидуальный подход, опытные преподаватели, реальный результат.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Бесплатная первая консультация",
                      "Подбор программы под ваши цели",
                      "Ответим в течение одного дня",
                      "Без скрытых условий",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white text-sm">
                        <svg className="w-4 h-4 text-orange-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-orange-200 text-xs mt-8">
                  4 года опыта · 600+ учеников
                </div>
              </div>

              {/* Right form */}
              <div className="md:col-span-3 p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
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

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Комментарий <span className="text-slate-400 font-normal">(необязательно)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Напишите, что вас интересует или какой у вас текущий уровень..."
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full disabled:opacity-70 text-sm py-3"
                  >
                    {loading ? "Отправляем заявку..." : "Отправить заявку →"}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
