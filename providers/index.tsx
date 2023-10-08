"use client";

import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <Nav />
          {children}
          <Toaster />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </NextUIProvider>
  );
}
