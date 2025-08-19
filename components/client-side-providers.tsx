"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { BottomNav } from "./bottom-nav";
import { TopNav } from "./top-nav";
import ClickSpark from "./ui/click-spark";
import Noise from "./ui/noise";
import { ScrollProgress } from "./ui/scroll-progress";
import TargetCursor from "./ui/target-cursor";
import { ThemeProvider } from "./ui/theme-provider";

export const ClientSideProviders = ({ children }: PropsWithChildren) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ClickSpark
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <TopNav />
          {children}
          <BottomNav />
        </ClickSpark>
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <ScrollProgress />
      </ThemeProvider>
    </>
  );
};
