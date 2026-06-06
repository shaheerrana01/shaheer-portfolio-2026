import { motion } from "framer-motion";
import { softSkills, technicalSkills } from "../data/portfolio.js";
import { fadeUp, stagger } from "../utils/motion.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-band">
      <SectionHeading
        eyebrow="Skills"
        title="Technical foundations with communication strength."
        description="The stack is intentionally practical: core web technologies, React, UI design, and the soft skills needed to work with people as well as pixels."
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-4"
        >
          {technicalSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.name} variants={fadeUp} className="rounded-lg border border-slate-200 bg-white/75 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.08]">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br ${skill.tone} text-white shadow-glow`}>
                      <Icon />
                    </div>
                    <div>
                      <p className="font-display font-bold text-slate-950 dark:text-white">{skill.name}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Skill depth</p>
                    </div>
                  </div>
                  <span className="font-display text-lg font-black text-cyan">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.tone}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="rounded-lg border border-slate-200 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.08]"
        >
          <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
            Soft skills that make the work smoother
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/[0.08]">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-mint dark:bg-white/10">
                    <Icon />
                  </span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
