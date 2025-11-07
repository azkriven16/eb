"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const ModeToggle = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  // === Wait until mounted to avoid hydration mismatch ===
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  // === Stable setTheme ===
  const stableSetTheme = useRef(setTheme);
  useEffect(() => {
    stableSetTheme.current = setTheme;
  }, [setTheme]);

  const memoizedToggle = useCallback(async () => {
    if (!buttonRef.current || !mounted) return;

    const currentIsDark = resolvedTheme === "dark";
    const newTheme = currentIsDark ? "light" : "dark";

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        stableSetTheme.current(newTheme);
      });
    });

    await transition.ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [resolvedTheme, duration, mounted]);

  // === Render nothing or a placeholder until mounted ===
  if (!mounted) {
    return (
      <button
        ref={buttonRef}
        className={cn(
          "relative flex items-center justify-center rounded-full p-2 transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          className
        )}
        aria-label="Toggle theme"
        {...props}
      >
        <div className="size-5" /> {/* Placeholder */}
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={memoizedToggle}
      className={cn(
        "relative flex items-center justify-center rounded-full p-2 transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      aria-label="Toggle theme"
      {...props}
    >
      {isDark ? (
        <Sun className="size-5 transition-transform duration-500" />
      ) : (
        <Moon className="size-5 transition-transform duration-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};