import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { personal, socialLinks } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    // UPDATE EMAILJS KEYS HERE in your .env file:
    // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitting(false);
      setStatus({
        type: "info",
        message: "Form UI is ready. Add EmailJS keys in .env to enable live sending.",
      });
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, form, publicKey);
      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent successfully. Shaheer will reply soon." });
    } catch (error) {
      setStatus({ type: "error", message: "Message failed to send. Please use email or WhatsApp." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Ready for recruiter calls, client work, and collaborations."
        description="Direct contact links are wired for email, WhatsApp, GitHub, LinkedIn, and Instagram. The form is EmailJS-ready."
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.08]"
        >
          <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">Contact details</h3>
          <div className="mt-6 grid gap-4">
            <a href={`mailto:${personal.email}`} className="contact-link">
              <FiMail />
              <span>{personal.email}</span>
            </a>
            <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="contact-link">
              <FiPhone />
              <span>{personal.phone} on WhatsApp</span>
            </a>
            <div className="contact-link">
              <FiMapPin />
              <span>{personal.location}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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
                  className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:-translate-y-1 hover:border-cyan hover:text-cyan dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.08]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
              <input name="name" value={form.name} onChange={updateField} required className="form-field" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input name="email" type="email" value={form.email} onChange={updateField} required className="form-field" placeholder="you@email.com" />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Message
            <textarea name="message" value={form.message} onChange={updateField} required rows="6" className="form-field resize-none" placeholder="Tell me about your project or opportunity..." />
          </label>

          {status.message ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 rounded-lg px-4 py-3 text-sm font-semibold ${
                status.type === "success"
                  ? "bg-mint/12 text-emerald-600 dark:text-mint"
                  : status.type === "error"
                    ? "bg-coral/12 text-rose-600 dark:text-coral"
                    : "bg-cyan/12 text-cyan"
              }`}
            >
              {status.message}
            </motion.p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-cyan hover:text-ink disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-ink dark:hover:bg-cyan"
          >
            <FiSend />
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
