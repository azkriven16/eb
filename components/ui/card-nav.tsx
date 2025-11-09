"use client";

import { cn } from "@/lib/utils";
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { gsap } from "gsap";
import { BoxIcon, DotIcon, Loader2Icon, SquareDotIcon } from "lucide-react";
import React, { useLayoutEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { ModeToggle } from "../shared/mode-toggle";
import { Button } from "./button";
import Link from "next/link";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  // Now uses theme tokens instead of raw colors
  variant?: "primary" | "secondary" | "accent" | "destructive" | "card";
  links: CardNavLink[];
};

export interface CardNavProps {
  className?: string;
  ease?: string;
  items?: CardNavItem[];
}

const variantClasses = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  card: "bg-card text-card-foreground",
};

const CardNav: React.FC<CardNavProps> = ({
  className = "",
  ease = "power3.out",
  items = defaultItems,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        Object.assign(contentEl.style, {
          visibility: wasVisible,
          pointerEvents: wasPointerEvents,
          position: wasPosition,
          height: wasHeight,
        });

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.2,
      ease,
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.2, ease, stagger: 0.08 },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current || !navRef.current) return;

      tlRef.current.kill();
      const newTl = createTimeline();
      if (newTl) {
        if (isExpanded) newTl.progress(1);
        tlRef.current = newTl;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded, items]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={cn(
        "card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 top-[1em]",
        className
      )}
    >
      <nav
        ref={navRef}
        className={cn(
          "card-nav block h-[60px] p-0 relative overflow-hidden will-change-[height] bg-none",
          isExpanded && "open"
        )}
      >
        {/* Top Bar */}
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex flex-row-reverse md:flex-row items-center justify-between p-2 pl-[1.1rem] z-2">
          {/* Hamburger */}
          <div
            className={cn(
              "hamburger-menu group h-full flex flex-col items-center justify-center cursor-pointer gap-1.5 order-2 md:order-0 transition-colors",
              isHamburgerOpen ? "open" : ""
            )}
            onClick={toggleMenu}
            onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
          >
            <div
              className={cn(
                "hamburger-line w-[30px] h-0.5 bg-foreground transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] group-hover:opacity-75",
                isHamburgerOpen && "translate-y-1 rotate-45"
              )}
            />
            <div
              className={cn(
                "hamburger-line w-[30px] h-0.5 bg-foreground transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] group-hover:opacity-75",
                isHamburgerOpen && "-translate-y-1 -rotate-45"
              )}
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-5">
            <Button variant="ghost" className="hidden md:inline-block">
              Contact
            </Button>
            <ClerkLoading>
              <Button>
                <Loader2Icon className="animate-spin mr-2" /> Loading
              </Button>
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button>
                    <span>Ask AI</span>
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9",
                    },
                  }}
                />
              </SignedIn>
            </ClerkLoaded>
            <ModeToggle />
          </div>
        </div>

        {/* Expandable Content */}
        <div
          className={cn(
            "card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-1 md:flex-row md:items-end md:gap-3",
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          )}
          aria-hidden={!isExpanded}
        >
          {items.slice(0, 3).map((item, idx) => {
            const variant = item.variant || "primary";
            return (
              <div
                key={`${item.label}-${idx}`}
                className={cn(
                  "nav-card select-none relative flex flex-col gap-2 p-4 rounded-lg min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%] transition-all duration-300",
                  variantClasses[variant]
                )}
                ref={setCardRef(idx)}
              >
                <div className="nav-card-label font-normal tracking-tight text-lg md:text-xl">
                  {item.label}
                </div>
                <div className="nav-card-links mt-auto flex flex-col gap-1">
                  {item.links?.map((lnk, i) => (
                    <Link
                      key={`${lnk.label}-${i}`}
                      className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer text-sm md:text-base transition-opacity hover:opacity-80"
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                      onClick={() => toggleMenu()}
                    >
                      <GoArrowUpRight
                        className="w-4 h-4 shrink-0"
                        aria-hidden="true"
                      />
                      {lnk.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;

const defaultItems: CardNavItem[] = [
  {
    label: "About",
    variant: "primary",
    links: [
      { label: "Company", ariaLabel: "About Company", href: "#about" },
      { label: "Careers", ariaLabel: "About Careers", href: "#about" },
    ],
  },
  {
    label: "Projects",
    variant: "secondary",
    links: [
      { label: "Featured", ariaLabel: "Featured Projects", href: "#projects" },
      {
        label: "Case Studies",
        ariaLabel: "Project Case Studies",
        href: "#projects",
      },
    ],
  },
  {
    label: "Contact",
    variant: "accent",
    links: [
      { label: "Email", ariaLabel: "Email us", href: "#contact" },
      { label: "Twitter", ariaLabel: "Twitter", href: "#contact" },
      { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#contact" },
    ],
  },
];
