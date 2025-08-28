"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

// UI
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

// Icons
import { navItems } from "@/constants/nav-items";
import { socialLinks } from "@/constants/socials";
import { useTheme } from "next-themes";
import Link from "next/link";
export const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const [open, setOpen] = useState(false);

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
    <footer className="shell mb-24 md:mb-20 border-t relative">
      <div className="flex items-center flex-col-reverse md:flex-row justify-between">
        <p className="text-sm md:text-base text-muted-foreground mt-5 md:mt-20">
          © 2025 Euger Bonete Jr. All rights reserved.
        </p>
        <div className="text-sm md:text-base text-muted-foreground mt-10 md:mt-20 space-x-5">
          <button
            className="cursor-pointer hover:text-foreground"
            onClick={() => setOpen(true)}
          >
            Quick Links
          </button>
          <Link
            target="_blank"
            href="/guestbook"
            className="cursor-pointer hover:text-foreground"
          >
            Leave a note
          </Link>
          <Link
            target="_blank"
            href="/chat"
            className="cursor-pointer hover:text-foreground"
          >
            Chatbot
          </Link>
        </div>
      </div>

      {showButton && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-28 md:bottom-8 right-8 p-5 rounded-full transition animate-wiggle z-[9999]"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </Button>
      )}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Navigation */}
          <CommandGroup heading="Navigation">
            {navItems.map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => {
                  window.location.href = item.href;
                  setOpen(false);
                }}
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          {/* Actions */}
          <CommandGroup heading="Actions">
            {/* Chatbot Action */}
            <CommandItem
              onSelect={() => {
                window.location.href = "/chat";
                setOpen(false);
              }}
            >
              <span className="mr-2 text-base grayscale">🤖</span>
              Chatbot
            </CommandItem>

            {/* Resume Action */}
            <CommandItem
              onSelect={() => {
                window.open("/EUGER-C.-BONETE-JR-RESUME-CV.pdf", "_blank");
                setOpen(false);
              }}
            >
              <span className="mr-2 text-base grayscale">📄</span>
              Resume
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {/* Socials */}
          <CommandGroup heading="Socials">
            {socialLinks.map((social) => (
              <CommandItem
                key={social.href}
                onSelect={() => {
                  window.open(social.href, "_blank");
                  setOpen(false);
                }}
              >
                <span className="mr-2 text-lg">{social.icon}</span>
                {social.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </footer>
  );
};
