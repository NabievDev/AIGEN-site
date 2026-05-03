import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "О курсе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Цена", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3"
            : "bg-transparent py-5"
        }`}
      >
        {scrolled && (
          <>
            {/* Layered background: deep gradient + saturated blur + subtle glow line */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A0A0F]/90 via-[#13091F]/90 to-[#0A0A0F]/90 backdrop-blur-[24px] backdrop-saturate-150" />
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />
            <div className="pointer-events-none absolute -bottom-6 left-1/2 -z-10 h-12 w-3/5 -translate-x-1/2 rounded-full bg-[#7C3AED]/20 blur-2xl" />
          </>
        )}
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => scrollTo("#hero")}>
              <span className="font-display font-bold text-2xl tracking-tight text-white">AIGEN</span>
              <div className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full mb-0.5" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#7C3AED] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a 
                href="https://forms.yandex.ru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:inline-flex"
              >
                <Button className="glow-button bg-[#7C3AED] text-white hover:bg-[#7C3AED]/90 border-transparent rounded-full px-6">
                  Записаться →
                </Button>
              </a>
              
              <button 
                className="md:hidden text-white/80 p-2"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[#0A0A0F] border-l border-white/10 z-50 p-6 flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/60 hover:text-white p-2"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6">
                {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-lg font-medium text-left text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-auto pt-8">
                <a 
                  href="https://forms.yandex.ru/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full glow-button bg-[#7C3AED] text-white hover:bg-[#7C3AED]/90 border-transparent rounded-full py-6 text-lg">
                    Записаться →
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
