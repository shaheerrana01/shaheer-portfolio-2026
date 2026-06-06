import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white/80 text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan hover:text-cyan dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
