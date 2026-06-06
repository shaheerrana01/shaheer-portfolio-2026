import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { certifications } from "../data/portfolio.js";
import { fadeUp, stagger } from "../utils/motion.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Learning credentials with career impact."
        description="Certificates are presented as premium achievement cards and can be expanded as Shaheer earns more credentials."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid max-w-5xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8"
      >
        {certifications.map((certificate) => (
          <motion.article key={certificate.title} variants={fadeUp} className="relative overflow-hidden rounded-lg border border-slate-200 bg-white/75 p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.08]">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-cyan/10" />
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-slate-950 text-cyan shadow-glow dark:bg-white/10">
              <FiAward />
            </div>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-cyan">{certificate.issuer}</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-white">
              {certificate.title}
            </h3>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{certificate.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
