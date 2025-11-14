"use client";
import { ContactModal } from "@/components/contact-modal";
import { HeroSection } from "@/components/sections/hero-section";
// import WorkSection from "@/components/sections/work-section";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useTabStore } from "@/store/use-tab-store";
import { AnimatePresence, motion, Variants } from "framer-motion";

const listVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

export default function IndexPage() {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="container mx-auto max-w-2xl p-4 flex flex-col"
    >
      <TabsContent value="home">
        <AnimatePresence mode="wait">
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listVariants}
            key="home"
          >
            <HeroSection />
          </motion.div>
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="works">
        <AnimatePresence mode="wait">
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listVariants}
            key="works"
          >
            <HeroSection />
            <section className="mt-10 flex flex-col">
              <ContactModal />
            </section>
          </motion.div>
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
}
