import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { experience } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section-shell section-band">
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience shaped by leadership and communication."
        description="A compact timeline that highlights client handling, team coordination, branding, and creative communication experience."
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid gap-6 before:absolute before:left-4 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200 dark:before:bg-white/10 sm:before:block">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative rounded-lg border border-slate-200 bg-white/75 p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.08] sm:ml-12"
            >
              <span className="absolute -left-[3.25rem] top-7 hidden h-8 w-8 rounded-lg border border-cyan/30 bg-cyan/10 shadow-glow sm:block" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan">{item.period}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-semibold text-slate-500 dark:text-slate-400">{item.company}</p>
                </div>
              </div>
              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{item.summary}</p>
              <div className="mt-5 grid gap-3">
                {item.points.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    <FiCheckCircle className="mt-1 shrink-0 text-mint" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
