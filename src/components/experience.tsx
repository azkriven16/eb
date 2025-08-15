import { motion } from "motion/react";

import { Hero } from "./hero";

export const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: 0.2,
          ease: [0.4, 0, 0.2, 1],
        },
      }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center"
    >
      <Hero />
    </motion.div>
  );
};
