"use client";

import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

export function useThemeTransition() {
  const { setTheme } = useTheme();

  const changeTheme = async (
    newTheme: "light" | "dark" | "system",
    button?: HTMLButtonElement | null
  ) => {
    if (!button) {
      setTheme(newTheme);
      return;
    }

    // Start the fancy transition
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        // force class change for animation
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else if (newTheme === "light") {
          document.documentElement.classList.remove("dark");
        } else {
          // system: check prefers-color-scheme
          const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;
          document.documentElement.classList.toggle("dark", prefersDark);
        }

        // sync with next-themes
        setTheme(newTheme);
      });
    });

    await transition.ready;

    // Circle reveal animation
    const { top, left, width, height } = button.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return { changeTheme };
}
