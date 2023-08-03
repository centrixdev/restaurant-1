"use client";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: `0.5em`,
  },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.25,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const variants2: Variants = {
  hidden: {},
  visible: {},
};

export default function AnimatedLogo() {
  const text = "MAMMA MIA";

  return (
    <h1 className="text-white text-8xl" aria-label={text} role="heading">
      {text.split(" ").map((word, index) => {
        return (
          <motion.div
            key={index}
            aria-hidden="true"
            initial="hidden"
            animate="visible"
            variants={variants2}
            className="inline-block mr-[0.125em] last:mr-0 whitespace-nowrap"
            transition={{
              staggerChildren: 0.025,
              delayChildren: index * 0.25,
            }}
          >
            {word.split("").map((char, index) => {
              return (
                <motion.span
                  className="inline-block mr-[-0.025em]"
                  aria-hidden="true"
                  key={index}
                  variants={variants}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        );
      })}
    </h1>
  );
}
