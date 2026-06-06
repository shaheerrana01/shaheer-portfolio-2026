import { motion } from "framer-motion";
import { aboutCards } from "../data/portfolio.js";
import { fadeUp, stagger } from "../utils/motion.js";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="A developer brand built on clarity, craft, and momentum."
        description="Shaheer blends frontend curiosity with communication and leadership experience, creating a practical foundation for modern web projects and client-focused delivery."
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.08]"
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan">Career mission</p>
          <h3 className="mt-4 font-display text-2xl font-bold text-slate-950 dark:text-white">
            Creating fast, responsive, and memorable web experiences.
          </h3>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            I am growing as a frontend developer with a strong interest in modern UI/UX,
            clean layouts, and user-friendly digital products. My goal is to build work that
            feels professional, performs well, and helps people move through an experience
            with confidence.
          </p>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            Alongside development, my background in team leadership, client handling, and
            social communication gives me the confidence to collaborate, explain ideas clearly,
            and keep improving with each project.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-4"
        >
          {aboutCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article key={card.title} variants={fadeUp} className="group rounded-lg border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyan/60 dark:border-white/10 dark:bg-white/[0.08]">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-slate-950 text-cyan shadow-glow dark:bg-white/10">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{card.text}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
