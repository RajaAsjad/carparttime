"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit">("loading");

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, (elapsed / duration) * 100);
      setProgress(next);

      if (next < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("exit"), 300);
        setTimeout(onComplete, 900);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" || progress < 100 ? (
        <motion.div
          key="loader"
          className="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-grid" aria-hidden />
          <div className="loader-content">
            <motion.div
              className="loader-logo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="" className="h-8 w-auto text-cream md:h-10" />
            </motion.div>

            <div className="loader-track" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
              <motion.div
                className="loader-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <motion.p
              className="loader-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="tabular-nums">{String(Math.round(progress)).padStart(3, "0")}</span>
              <span className="text-sage"> / 100</span>
            </motion.p>
          </div>

          <motion.div
            className="loader-scanline"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
            aria-hidden
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
