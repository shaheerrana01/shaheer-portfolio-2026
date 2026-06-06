import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-ink text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto mb-5 h-14 w-14 rounded-lg border border-cyan/40 bg-cyan/10 shadow-glow"
              animate={{ rotate: 360, scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            />
            <p className="font-display text-sm font-bold uppercase tracking-[0.35em] text-cyan">
              Shaheer Iqbal
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
