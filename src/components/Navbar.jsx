import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navItems, personal } from "../data/portfolio.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrolled
    ? "border-slate-200/80 bg-white/78 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-ink/72"
    : "border-transparent bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur-xl transition-all ${navClass}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Shaheer Iqbal home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-sm font-black text-white shadow-glow dark:bg-white dark:text-ink">
            SI
          </span>
          <span className="hidden font-display text-sm font-bold uppercase tracking-[0.22em] text-slate-950 dark:text-white sm:block">
            Shaheer
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.resume}
            download
            className="hidden items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-cyan sm:inline-flex"
          >
            <FiDownload />
            Resume
          </a>
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white/80 text-slate-900 lg:hidden dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-xl dark:border-white/10 dark:bg-ink/95 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-950/5 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={personal.resume}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink"
              >
                <FiDownload />
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
