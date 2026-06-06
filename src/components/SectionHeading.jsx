import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-lg border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan dark:border-cyan/30">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
