"use client";

import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Nav />
      {children}
      <Toaster />
      <Footer />
    </NextUIProvider>
  );
}
