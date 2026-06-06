import { motion } from "framer-motion";
import { FiCpu, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";

export default function ChatbotPreview() {
  return (
    <section className="section-shell section-band">
      <SectionHeading
        eyebrow="AI Assistant"
        title="A portfolio assistant concept for recruiters and clients."
        description="This UI section is ready to connect with an AI backend later. For now it gives the portfolio a forward-looking, interactive product feel."
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="grid overflow-hidden rounded-lg border border-slate-200 bg-white/75 shadow-2xl shadow-slate-900/[0.08] backdrop-blur dark:border-white/10 dark:bg-white/[0.08] md:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="bg-slate-950 p-6 text-white">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan/10 text-cyan shadow-glow">
              <FiCpu />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold">Ask about Shaheer</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Recruiters can quickly explore projects, availability, skills, certifications, and contact details through a guided assistant experience.
            </p>
          </div>

          <div className="p-6">
            <div className="grid gap-4">
              <div className="max-w-[78%] rounded-lg bg-slate-100 p-4 text-sm leading-7 text-slate-700 dark:bg-white/10 dark:text-slate-200">
                What type of work does Shaheer focus on?
              </div>
              <div className="ml-auto max-w-[82%] rounded-lg bg-slate-950 p-4 text-sm leading-7 text-white shadow-glow dark:bg-cyan dark:text-ink">
                Responsive frontend websites, polished UI systems, JavaScript interactions, and modern portfolio-ready user experiences.
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-2 dark:border-white/10 dark:bg-white/[0.08]">
              <input
                type="text"
                disabled
                value="AI connection can be added here"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-500 outline-none dark:text-slate-400"
                aria-label="AI chatbot preview input"
              />
              <button type="button" disabled className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-white dark:bg-white dark:text-ink">
                <FiSend />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
