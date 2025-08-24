"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

export const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // show after scrolling 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="shell mb-10 md:mb-20 border-t relative">
      <p className="subheading mt-10 md:mt-20">
        © 2025 Euger Bonete Jr. All rights reserved.
      </p>

      {showButton && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full transition animate-wiggle"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </Button>
      )}
    </footer>
  );
};
