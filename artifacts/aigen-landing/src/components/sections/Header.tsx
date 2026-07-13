import { useState } from "react";
import logoNobg from "@/assets/logo-nobg.png";

const navLinks = [
  { label: "О школе", href: "#why-us" },
  { label: "Направления", href: "#subjects" },
  { label: "Форматы", href: "#programs" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logoNobg}
            alt="ФениксУм"
            className="h-10 w-auto"
            style={{ mixBlendMode: "multiply" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#lead-form"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Записаться
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-orange-100 bg-white px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700 py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#lead-form" className="btn-primary mt-2 text-sm" onClick={() => setOpen(false)}>
            Записаться
          </a>
        </div>
      )}
    </header>
  );
}
