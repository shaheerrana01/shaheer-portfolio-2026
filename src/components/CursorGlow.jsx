import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const springX = useSpring(x, { stiffness: 80, damping: 24 });
  const springY = useSpring(y, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const update = (event) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-10 hidden h-80 w-80 rounded-full bg-cyan/12 blur-3xl dark:bg-cyan/18 lg:block"
      style={{ x: springX, y: springY }}
    />
  );
}
