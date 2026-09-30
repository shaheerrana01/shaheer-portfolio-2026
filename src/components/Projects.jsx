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
        title="Explore my projects."
        description="A selection of my main projects. Open each live website or explore the JazzWorld design gallery."
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
          {filtered.map((project) => {
            const hasLive = Boolean(project.live);

            return (
              <motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group flex min-h-[390px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white/75 shadow-lg shadow-slate-900/5 backdrop-blur transition dark:border-white/10 dark:bg-white/[0.08]"
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Preview ${project.title}`} className={`relative block h-52 overflow-hidden bg-gradient-to-br ${accentClasses[project.accent]}`}>
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} website preview`} width="1440" height="900" loading="lazy" className="h-full w-full bg-slate-950 object-contain transition duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-start justify-center gap-5 px-5 pt-4">
                      {project.previewImages.map((image, imageIndex) => (
                        <img key={image} src={image} alt={`${project.title} screen ${imageIndex + 1}`} loading="lazy" className="w-28 rounded-t-xl border border-white/30 shadow-xl" />
                      ))}
                    </div>
                  )}
                  <span className="absolute bottom-3 left-3 rounded-lg bg-slate-950/90 px-3 py-1 text-xs font-bold tracking-wide text-white">{project.category}</span>
                </a>

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
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-cyan">
                        <FiExternalLink /> {project.category === "UI/UX" ? "View Design" : "Live Preview"}
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-400 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-500">
                        <FiExternalLink /> Repository only
                      </span>
                    )}
                    <a aria-label={project.category === "UI/UX" ? "View Figma profile" : `View ${project.title} repository${project.privateSource ? " (private)" : ""}`} title={project.privateSource ? "Private repository — owner access required" : "View source on GitHub"} href={project.github} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-cyan hover:text-cyan dark:border-white/10 dark:text-slate-200">
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