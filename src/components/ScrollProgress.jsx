import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan via-mint to-coral"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}
