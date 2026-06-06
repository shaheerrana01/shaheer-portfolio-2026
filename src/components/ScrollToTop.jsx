import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 700);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-lg bg-slate-950 text-white shadow-glow transition hover:-translate-y-1 hover:bg-cyan hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-cyan"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FiArrowUp />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
