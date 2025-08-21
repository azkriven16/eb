"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextItem {
  text: string;
  image: string;
}

interface CircularRevealHeadingProps {
  items: TextItem[];
  centerText: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: {
    container: "h-[300px] w-[300px]",
    fontSize: "text-xs",
    tracking: "tracking-[0.25em]",
    radius: 160,
    gap: 40,
    imageSize: "w-[75%] h-[75%]",
    textStyle: "font-medium",
  },
  md: {
    container: "h-[400px] w-[400px]",
    fontSize: "text-sm",
    tracking: "tracking-[0.3em]",
    radius: 160,
    gap: 30,
    imageSize: "w-[75%] h-[75%]",
    textStyle: "font-medium",
  },
  lg: {
    container: "h-[500px] w-[500px]",
    fontSize: "text-base",
    tracking: "tracking-[0.35em]",
    radius: 160,
    gap: 20,
    imageSize: "w-[75%] h-[75%]",
    textStyle: "font-medium",
  },
};

const usePreloadImages = (images: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (url: string): Promise<void> =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = reject;
      });

    Promise.all(images.map(loadImage))
      .then(() => setLoaded(true))
      .catch((err) => console.error("Error preloading images:", err));
  }, [images]);

  return loaded;
};

const ImagePreloader = ({ images }: { images: string[] }) => (
  <div className="hidden" aria-hidden="true">
    {images.map((src, index) => (
      <img key={index} src={src} alt="" />
    ))}
  </div>
);

const ImageOverlay = ({
  image,
  size = "md",
}: {
  image: string;
  size?: "sm" | "md" | "lg";
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
  >
    <motion.img
      src={image}
      alt=""
      className={cn(sizeConfig[size].imageSize, "object-cover rounded-full")}
      style={{ filter: "brightness(0.9)" }}
    />
  </motion.div>
);
export const CircularRevealHeading = ({
  items,
  centerText,
  className,
  size = "md",
}: CircularRevealHeadingProps) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const config = sizeConfig[size];
  const imagesLoaded = usePreloadImages(items.map((item) => item.image));

  const createTextSegments = () => {
    const totalItems = items.length;
    const totalGapDegrees = config.gap * totalItems; // Total space for gaps
    const availableDegrees = 360 - totalGapDegrees; // Remaining space for text
    const segmentDegrees = availableDegrees / totalItems; // Space per text segment
    return items.map((item, index) => {
      const startPosition = index * (segmentDegrees + config.gap);
      const startOffset = `${(startPosition / 360) * 100}%`;
      return (
        <g key={index}>
          <text
            className={cn(
              config.fontSize,
              config.tracking,
              config.textStyle,
              "uppercase cursor-pointer transition-all duration-300"
            )}
            onMouseEnter={() => imagesLoaded && setActiveImage(item.image)}
            onMouseLeave={() => setActiveImage(null)}
            style={{
              filter: "url(#textShadow)",
              transition: "all 0.3s ease",
            }}
          >
            <textPath
              href="#curve"
              className="fill-[url(#textGradient)] hover:fill-[#2d3436]"
              startOffset={startOffset}
              textLength={`${segmentDegrees * 1.8}`}
              lengthAdjust="spacingAndGlyphs"
            >
              {item.text}
            </textPath>
          </text>
        </g>
      );
    });
  };

  return (
    <>
      <ImagePreloader images={items.map((item) => item.image)} />
      <motion.div
        whileHover={{
          boxShadow: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff",
        }}
        whileTap={{ scale: 0.98 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "relative overflow-hidden",
          config.container,
          "rounded-full bg-[#e6e6e6]",
          "shadow-[16px_16px_32px_#bebebe,-16px_-16px_32px_#ffffff]",
          "transition-all duration-500 ease-out",
          className
        )}
      >
        <AnimatePresence>
          {activeImage && imagesLoaded && (
            <ImageOverlay image={activeImage} size={size} />
          )}
        </AnimatePresence>

        <motion.div
          className="absolute inset-[2px] rounded-full bg-[#e6e6e6]"
          style={{
            boxShadow:
              "inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff",
          }}
        />

        <motion.div
          className="absolute inset-[12px] rounded-full bg-[#e6e6e6]"
          style={{
            boxShadow: "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
          }}
        />

        <motion.div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence>
            {!activeImage && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 p-6 rounded-3xl bg-[#e6e6e6]"
                whileHover={{
                  boxShadow:
                    "inset 3px 3px 6px #d1d1d1, inset -3px -3px 6px #ffffff",
                }}
              >
                {centerText}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient
                id="textGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#666666" />
                <stop offset="100%" stopColor="#444444" />
              </linearGradient>
            </defs>
            <path
              id="curve"
              fill="none"
              d={`M 200,200 m -${config.radius},0 a ${config.radius},${
                config.radius
              } 0 1,1 ${config.radius * 2},0 a ${config.radius},${
                config.radius
              } 0 1,1 -${config.radius * 2},0`}
            />
            {createTextSegments()}
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
};
