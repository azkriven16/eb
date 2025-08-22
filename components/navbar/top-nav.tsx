"use client";

import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";

// Icons
import { FaHome, FaUser, FaBriefcase, FaFolderOpen } from "react-icons/fa";

export const TopNav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "All", href: "/", icon: <FaHome /> },
    { name: "Experience", href: "/experience", icon: <FaBriefcase /> },
    { name: "Projects", href: "/projects", icon: <FaFolderOpen /> },
    { name: "About", href: "/about", icon: <FaUser /> },
  ];

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY < 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-200",
        scrolled
          ? "bg-secondary/90 backdrop-blur-md rounded-full shadow-md px-6 py-2"
          : "bg-transparent px-2 py-2"
      )}
    >
      <div className="flex items-center gap-6">
        {/* Avatar (always visible) */}
        <Avatar className="size-10">
          <AvatarImage
            draggable={false}
            src="https://pbs.twimg.com/profile_images/1897311929028255744/otxpL-ke_400x400.jpg"
          />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>

        {/* Nav */}
        <nav className="flex gap-6">
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
              {/* Hide text on mobile */}
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          ))}
        </nav>

        <ModeToggle />
      </div>
    </header>
  );
};
