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
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// Icons
import { cn } from "@/lib/utils";
import { MessageCircle, Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import {
  FaBriefcase,
  FaEnvelope,
  FaFolderOpen,
  FaHome,
  FaPhone,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

export const TopNav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "All", href: "/", icon: <FaHome /> },
    { name: "Experience", href: "/experience", icon: <FaBriefcase /> },
    { name: "About", href: "/about", icon: <FaUser /> },
    { name: "Projects", href: "/projects", icon: <FaFolderOpen /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
    // { name: "Chatbot", href: "/chat", icon: <FiMessageCircle /> },
  ];
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
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl px-4 transition-all duration-200",
          scrolled
            ? "bg-secondary/90 backdrop-blur-md rounded-full shadow-md py-2"
            : "bg-transparent py-2"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Avatar */}
          <Avatar className="w-10 h-10">
            <AvatarImage
              draggable={false}
              src="https://pbs.twimg.com/profile_images/1897311929028255744/otxpL-ke_400x400.jpg"
            />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>

          <nav className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
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
                "hidden sm:flex items-center gap-2 text-sm text-muted-foreground px-3 py-1.5 rounded-lg hover:bg-accent transition"
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
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around bg-secondary/90 backdrop-blur-md border-t border-border p-2 sm:hidden">
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

      {/* Command Palette */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
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
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <span className="mr-2 text-lg">
                {theme === "dark" ? <SunDim /> : <Moon />}
              </span>
              Toggle Theme
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
