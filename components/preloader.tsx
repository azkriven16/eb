"use client";

import type React from "react";
import { useState, useEffect } from "react";

interface PreloaderProps {
  assets: string[];
  children?: React.ReactNode;
}

export default function Preloader({ assets, children }: PreloaderProps) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (assets.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;

    const preloadAsset = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        if (
          src.endsWith(".png") ||
          src.endsWith(".jpg") ||
          src.endsWith(".jpeg") ||
          src.endsWith(".gif") ||
          src.endsWith(".svg")
        ) {
          const img = new Image();
          img.crossOrigin = "anonymous";

          img.onload = () => {
            loadedCount++;
            setLoadedAssets(loadedCount);
            resolve();
          };

          img.onerror = () => {
            console.warn(`Failed to preload asset: ${src}`);
            loadedCount++;
            setLoadedAssets(loadedCount);
            resolve();
          };

          img.src = src;
        } else {
          // non-image assets
          fetch(src)
            .then(() => {
              loadedCount++;
              setLoadedAssets(loadedCount);
              resolve();
            })
            .catch(() => {
              console.warn(`Failed to preload asset: ${src}`);
              loadedCount++;
              setLoadedAssets(loadedCount);
              resolve();
            });
        }
      });
    };

    // Preload all assets
    Promise.all(assets.map(preloadAsset)).then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  }, [assets, mounted]);

  const progress =
    assets.length > 0 ? (loadedAssets / assets.length) * 100 : 100;

  if (!mounted || isLoading) {
    return (
      <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black overflow-hidden">
        <div className="flex flex-col items-center space-y-6 text-white">
          {/* Spinner */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage text */}
          <div className="text-center space-y-1">
            <p className="text-sm text-white">
              Loading... {Math.round(progress)}%
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
