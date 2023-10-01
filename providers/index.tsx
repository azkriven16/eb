"use client";

import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Nav />
      {children}
      <Footer />
    </NextUIProvider>
  );
}
