import { motion } from "motion/react";

// import { Hero } from "./hero";
import { Hero2 } from "./hero2";

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
      className="bg-black text-white"
    >
      <Hero2 />
      {/* <Hero /> */}
    </motion.div>
  );
};
