import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

let tabs = [
  { id: "home", label: "Home" },
  { id: "works", label: "Works" },
  { id: "bio", label: "Bio" },
  { id: "certs", label: "Certs" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <a
          href={`#${tab.id}`}
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "text-white" : "hover:text-black/50"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-black mix-blend-difference rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </a>
      ))}
    </div>
  );
}
