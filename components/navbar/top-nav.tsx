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
  FaFolderOpen,
  FaHome,
  FaPhone,
  FaSearch,
  FaUser,
} from "react-icons/fa";

export const TopNav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "All", href: "/", icon: <FaHome /> },
    { name: "Projects", href: "/projects", icon: <FaFolderOpen /> },
    { name: "About", href: "/about", icon: <FaUser /> },
    { name: "Contact", href: "/contact", icon: <FaPhone /> },
  ];

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Open Command Palette with Ctrl+K / ⌘+K
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
      <header
        className={clsx(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-200 w-[95%] max-w-6xl px-4",
          scrolled
            ? "bg-secondary/90 backdrop-blur-md rounded-full shadow-md px-4 py-2"
            : "bg-transparent px-4 py-2"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Left Side: Avatar + Nav */}
          <div className="flex items-center gap-4">
            <Avatar className="size-10">
              <AvatarImage
                draggable={false}
                src="https://pbs.twimg.com/profile_images/1897311929028255744/otxpL-ke_400x400.jpg"
              />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>

            {/* Nav (always visible, icons only on mobile) */}
            <nav className="flex gap-4 sm:gap-6">
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
                  <span className="text-lg">{item.icon}</span>
                  {/* Hide labels on mobile */}
                  <span className="hidden md:inline">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side: Actions */}
          <div className="flex items-center gap-3">
            {/* Fake search button (desktop only) */}
            <button
              onClick={() => setOpen(true)}
              className={cn(
                open ? "" : "border",
                "hidden sm:flex items-center gap-2 text-sm text-muted-foreground px-3 py-1.5 rounded-lg hover:bg-accent transition"
              )}
            >
              <FaSearch className="text-muted-foreground" />
              <span className="text-sm">Search…</span>
              <kbd className="ml-20 rounded bg-none px-1.5 py-0.5 text-sm">
                ⌘ K
              </kbd>
            </button>

            {/* Mobile: just show search icon */}
            <button
              onClick={() => setOpen(true)}
              className="sm:hidden p-2 rounded-lg hover:bg-accent transition"
            >
              <FaSearch className="text-lg" />
            </button>
            {/* 
            <Link href="/chat">
              <Button variant="ghost" size="sm">
                <MessageCircle className="size-5" />
                <span className="sr-only">Open Chat</span>
              </Button>
            </Link> */}

            <ModeToggle />
          </div>
        </div>
      </header>

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
                {theme === "dark" ? (
                  <SunDim className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </span>
              Toggle Theme
            </CommandItem>
            <CommandItem onSelect={() => setChatOpen(true)}>
              <MessageCircle className="mr-2 size-5" />
              Open Chat
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
