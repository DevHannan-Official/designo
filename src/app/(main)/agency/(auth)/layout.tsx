import React from "react";

export default function AgencyAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-accent">
      {children}
    </div>
  );
}
