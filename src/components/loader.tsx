import { motion } from "motion/react";
import { ASSETS } from "../App";
import { NumberTicker } from "./magicui/number-ticker";

interface Props {
  progress: number;
  loadedCount: number;
  onComplete: () => void;
}

export function Loader({ loadedCount, onComplete, progress }: Props) {
  const allImagesLoaded = loadedCount >= ASSETS.length;

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: -100,
          transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <NumberTicker
          value={allImagesLoaded ? 100 : progress}
          className="text-white font-black text-[8rem] md:text-[12rem] tracking-tighter leading-none"
        />
      </motion.div>
      {/* Hidden images for preloading */}
      <div className="fixed -top-full opacity-0 pointer-events-none">
        {ASSETS.map((url) => (
          <img
            key={url}
            src={url}
            alt=""
            onLoad={onComplete}
            onError={onComplete} // Handle errors gracefully
            className="w-1 h-1"
          />
        ))}
      </div>
    </>
  );
}
