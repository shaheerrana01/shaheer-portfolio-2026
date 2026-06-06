import { personal } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-8 text-center text-sm text-slate-500 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
      <p>
        Designed and built by {personal.name} -portfolio, 2026.
      </p>
    </footer>
  );
}
