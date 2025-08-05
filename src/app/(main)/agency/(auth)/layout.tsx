import { ThemeButton } from "@/components/utils/theme-btn";
import Link from "next/link";
import React from "react";

export default function AgencyAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-accent dark:bg-background">
      <div>
        <Link href="/site">
          <h1 className="text-5xl font-special text-primary dark:text-indigo-500 mb-8 text-center">
            Designo
          </h1>
        </Link>
        {children}
      </div>
      <div className="absolute bottom-4 right-4 z-30">
        <ThemeButton />
      </div>
    </div>
  );
}
