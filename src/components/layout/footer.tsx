import {
  ArrowUpRight,
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/site" },
    { name: "About", href: "/site#about" },
    { name: "Why Choose Us", href: "/site#whycu" },
    { name: "Pricing", href: "/site#pricing" },
    { name: "Faqs", href: "/site#faqs" },
  ];
  return (
    <footer className="bg-accent py-6 px-4 sm:px-6 lg:px-8 border-t border-zinc-400/20 dark:border-t-zinc-700/20">
      <h1 className="text-4xl text-primary dark:text-indigo-500 font-special w-full">
        Designo
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 w-full ">
        <p>
          Copyright &copy; {new Date().getFullYear()} Designo. All rights
          reserved.
        </p>
        <ul className="flex flex-col sm:ml-48">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className=" hover:text-foreground/80 transition-colors"
              >
                <ArrowUpRight className="inline-block mr-1" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex  items-center justify-end gap-4 mt-4 sm:mt-0">
          <li>
            <Link
              href={"https://facebook.com"}
              className=" hover:text-foreground/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="size-6" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://instagram.com"}
              className=" hover:text-foreground/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="size-6" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://linkedin.com"}
              className=" hover:text-foreground/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-6" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://x.com"}
              className=" hover:text-foreground/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="size-6" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://dribble.com"}
              className=" hover:text-foreground/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Dribbble className="size-6" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
