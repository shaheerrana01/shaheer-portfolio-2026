import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio.js";
import { fadeUp, stagger } from "../utils/motion.js";
import SectionHeading from "./SectionHeading.jsx";

const accentClasses = {
  cyan: "from-cyan/25 to-blue-500/10 text-cyan",
  violet: "from-violet/25 to-fuchsia-500/10 text-violet",
  mint: "from-mint/25 to-emerald-500/10 text-mint",
  coral: "from-coral/25 to-orange-400/10 text-coral",
};

export default function Projects() {
  const [active, setActive] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(projects.map((project) => project.category))], []);
  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work with polished interaction and real structure."
        description="Project cards are content-safe, filterable, and ready for live links. Update the projects list in the data file as the portfolio grows."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                active === category
                  ? "bg-slate-950 text-white shadow-glow dark:bg-white dark:text-ink"
                  : "border border-slate-200 bg-white/70 text-slate-600 hover:border-cyan hover:text-cyan dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((project, index) => {
            const hasLive = Boolean(project.live);

            return (
              <motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group flex min-h-[390px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white/75 shadow-lg shadow-slate-900/5 backdrop-blur transition dark:border-white/10 dark:bg-white/[0.08]"
              >
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${accentClasses[project.accent]} p-5`}>
                  <div className="absolute inset-0 opacity-50 grid-pattern" />
                  {project.previewImages ? (
                    <div className="absolute inset-x-5 bottom-0 flex items-end justify-end gap-3">
                      {project.previewImages.map((image, imageIndex) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${project.title} screen ${imageIndex + 1}`}
                          className="h-32 w-16 rounded-t-lg border border-white/60 object-cover object-top shadow-xl shadow-slate-950/20 dark:border-white/20"
                        />
                      ))}
                    </div>
                  ) : null}
                  <div className="relative flex h-full flex-col justify-between">
                    <span className="w-fit rounded-lg border border-current/20 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] dark:bg-ink/50">
                      {project.category}
                    </span>
                    <p className="font-display text-5xl font-black text-slate-950/10 dark:text-white/10">
                      0{index + 1}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    {hasLive ? (
                      <a href={project.live} target={project.live.startsWith("#") ? undefined : "_blank"} rel={project.live.startsWith("#") ? undefined : "noreferrer"} className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-cyan">
                        <FiExternalLink /> Preview
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-400 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-500">
                        <FiExternalLink /> Live soon
                      </span>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-cyan hover:text-cyan dark:border-white/10 dark:text-slate-200">
                      <FiGithub />
                    </a>
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