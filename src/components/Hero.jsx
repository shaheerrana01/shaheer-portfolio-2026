import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowDownRight, FiDownload, FiMail, FiSend } from "react-icons/fi";
import { heroStats, personal, socialLinks } from "../data/portfolio.js";
import { fadeUp, stagger } from "../utils/motion.js";

const typedWords = ["modern websites", "responsive UI", "frontend systems", "digital reality"];

function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typedWords[wordIndex];
    const delay = deleting ? 44 : 82;
    const timer = window.setTimeout(() => {
      if (!deleting && letterCount === word.length) {
        window.setTimeout(() => setDeleting(true), 850);
        return;
      }
      if (deleting && letterCount === 0) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % typedWords.length);
        return;
      }
      setLetterCount((current) => current + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, letterCount, wordIndex]);

  return (
    <span className="text-gradient">
      {typedWords[wordIndex].slice(0, letterCount)}
      <span className="ml-1 inline-block h-9 w-0.5 translate-y-1 bg-cyan" />
    </span>
  );
}

function ProfileVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto aspect-[0.86] w-full max-w-[420px]"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan/25 via-violet/20 to-coral/25 blur-3xl" />
      <div className="relative h-full overflow-hidden rounded-lg border border-slate-200/80 bg-white/70 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/[0.12] dark:bg-white/[0.08] dark:shadow-black/30">
        <div className="relative h-full rounded-lg bg-slate-950 p-5 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(56,213,255,0.28),transparent_28%),radial-gradient(circle_at_78%_68%,rgba(255,111,145,0.18),transparent_28%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                Portfolio OS
              </span>
              <span className="h-3 w-3 rounded-full bg-mint shadow-[0_0_18px_rgba(62,230,181,0.8)]" />
            </div>

            <div className="grid place-items-center">
              {personal.profileImage ? (
                <img
                  src={personal.profileImage}
                  alt="Shaheer Iqbal"
                  className="h-48 w-48 rounded-lg object-cover"
                />
              ) : (
                <div className="grid h-48 w-48 place-items-center rounded-lg border border-white/[0.12] bg-white/10 text-6xl font-black text-white shadow-glow">
                  SI
                </div>
              )}
            </div>

            <div className="grid gap-3">
              {["React interfaces", "Premium UI systems", "Client-ready delivery"].map((item, index) => (
                <motion.div
                  key={item}
                  animate={{ x: [0, index % 2 ? -5 : 5, 0] }}
                  transition={{ repeat: Infinity, duration: 5 + index, ease: "easeInOut" }}
                  className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-200 backdrop-blur"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-grid relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_18px_rgba(62,230,181,0.9)]" />
            Available for frontend opportunities
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display text-4xl font-black leading-tight tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {personal.name}
            <span className="block text-2xl font-semibold text-slate-500 dark:text-slate-300 sm:text-4xl">
              builds <Typewriter />
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {personal.intro}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-cyan hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-cyan">
              View Projects <FiArrowDownRight />
            </a>
            <a href={personal.resume} download className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:border-cyan hover:text-cyan dark:border-white/10 dark:bg-white/[0.08] dark:text-white">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:-translate-y-1 hover:bg-slate-950/5 dark:text-slate-200 dark:hover:bg-white/10">
              <FiMail /> Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:border-cyan hover:text-cyan dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200"
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-slate-200 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.08]">
                <p className="font-display text-2xl font-black text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <ProfileVisual />
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-lg text-sm font-semibold text-slate-500 transition hover:text-cyan md:inline-flex"
      >
        Scroll <FiSend className="rotate-45" />
      </a>
    </section>
  );
}
