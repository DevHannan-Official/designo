"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "../utils/theme-btn";
import { motion } from "motion/react";
import {
  CircleQuestionMark,
  Home,
  Info,
  LetterText,
  Menu,
  X,
} from "lucide-react";

type PropTypes = {
  user?: object;
};
const navItems = [
  { name: "Home", href: "/site", icon: Home },
  { name: "About", href: "/site#about", icon: Info },
  { name: "Pricing", href: "/site#pricing", icon: LetterText },
  { name: "Faqs", href: "/site#faqs", icon: CircleQuestionMark },
];

const MobileNav = ({
  showMobileNav,
  setShowMobileNav,
}: {
  showMobileNav: boolean;
  setShowMobileNav: (show: boolean) => void;
}) => {
  return (
    <motion.aside
      className="fixed h-fit inset-0 p-4 bg-base/80 backdrop-blur-md z-30 rounded-b-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-2 flex items-center justify-end w-full">
        <Button
          variant="outline"
          size={"icon"}
          className="md:hidden"
          onClick={() => setShowMobileNav(false)}
        >
          <X />
        </Button>
      </div>
      <ul className="flex flex-col items-start gap-3 mt-5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="active:text-foreground/80 active:bg-base transition-colors flex-1 flex w-full p-3 rounded-md text-lg"
          >
            <item.icon className="inline-block mr-3" />
            {item.name}
          </Link>
        ))}
      </ul>
    </motion.aside>
  );
};

const Navbar = ({}: PropTypes) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav className="flex items-center justify-between py-4 px-4 sm:px-6 bg-background/80 backdrop-blur-md border-b border-zinc-400/20 dark:border-b-zinc-700/20 sticky top-0 z-20">
      <aside className="flex items-center gap-2.5">
        <Button
          variant="outline"
          size={"icon"}
          className="md:hidden"
          onClick={() => setShowMobileNav(true)}
        >
          <Menu />
        </Button>
        {showMobileNav && (
          <MobileNav
            showMobileNav={showMobileNav}
            setShowMobileNav={setShowMobileNav}
          />
        )}
        <Link href={"/"} className="flex items-center gap-2">
          <span className="text-3xl font-special text-primary dark:text-indigo-400">
            Designo
          </span>
        </Link>
      </aside>
      <ul className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.name} className="inline-block">
            <Link
              href={item.href}
              className=" hover:text-foreground/80 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <aside className="flex items-center gap-2">
        <ThemeButton />
        <Link href="/agency/sign-in">
          <Button>Get Started</Button>
        </Link>
      </aside>
    </nav>
  );
};

export default Navbar;
