"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// Icons
import { socialLinks } from "@/constants/socials";
import { cn } from "@/lib/utils";
import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems } from "@/constants/nav-items";
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Command Palette shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* Top Header */}
      <header
        className={clsx(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full py-2 mx-auto max-w-6xl px-4 transition-all duration-200",
          scrolled
            ? "bg-secondary/90 backdrop-blur-md rounded-full shadow-md mx-10"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <Avatar className="w-10 h-10">
              <AvatarImage draggable={false} src="/assets/logo.png" />
              <AvatarFallback>Eu</AvatarFallback>
            </Avatar>
          </Link>

          <nav className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                target={item.href === "/chat" ? "_blank" : "_self"}
                href={item.href}
                className={clsx(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right side: Search + Mode Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop: search with label */}
            <button
              onClick={() => setOpen(true)}
              className={cn(
                "hidden sm:flex items-center gap-2 text-sm text-muted-foreground px-3 py-1.5 rounded-lg hover:bg-accent transition hover:border"
              )}
            >
              <FaSearch />
              <span>Search…</span>
              <kbd className="ml-2 rounded bg-none px-1.5 py-0.5 text-sm">
                ⌘ K
              </kbd>
            </button>

            {/* Mobile: just search icon */}
            <button
              onClick={() => setOpen(true)}
              className="sm:hidden p-2 rounded-lg hover:bg-accent transition"
            >
              <FaSearch className="text-lg" />
            </button>

            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Bottom Nav for Mobile */}
      <nav className="fixed bottom-5 w-[95vw] mx-auto left-0 right-0 z-50 flex justify-around bg-secondary/90 backdrop-blur-md border-t border-border p-2 sm:hidden rounded-full">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              "flex flex-col items-center justify-center text-muted-foreground transition-colors",
              pathname === item.href && "text-primary"
            )}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs mt-1">{item.name}</span> {/* Add label */}
          </Link>
        ))}
      </nav>
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
    </>
  );
};
