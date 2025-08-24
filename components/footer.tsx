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
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <p className="subheading mt-10 md:mt-20">
          © 2025 Euger Bonete Jr. All rights reserved.
        </p>
        <div className="subheading mt-10 md:mt-20 space-x-5">
          <a href="">Guestbook</a>
          <a href="">Sitemap</a>
          <a href="">Github</a>
        </div>
      </div>

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
