import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "../utils/theme-btn";

const Navbar = () => {
  const navItems = [
    { name: "Pricing", href: "/" },
    { name: "About", href: "/about" },
    { name: "Documentation", href: "/docs" },
    { name: "Features", href: "/features" },
  ];
  return (
    <nav className="flex items-center justify-between py-4 px-4 sm:px-6 bg-background/80 backdrop-blur-md border-b border-zinc-400/20 dark:border-b-zinc-700/20 sticky top-0 z-20">
      <Link href={"/"} className="flex items-center gap-2">
        <span className="text-3xl font-special text-primary dark:text-indigo-400">
          Designo
        </span>
      </Link>
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
      <section className="flex items-center gap-2">
        <ThemeButton />
        <Link href="/agency/sign-in">
          <Button>Get Started</Button>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
