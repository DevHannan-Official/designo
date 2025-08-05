import type { Metadata, Viewport } from "next";
import { Righteous, Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designo - Online Website Builder",
  description:
    "The online website builder for agencies and individuals, offering a wide range of templates and customization options to create stunning websites effortlessly and a comprehensive dashboard for managing agencies, sub-accounts and their projects and clients.",
  keywords: [
    "Website",
    "Builder",
    "Creator",
    "Online",
    "Designo",
    "Agency",
    "Freelancer",
    "Web-Builder",
    "Templates",
    "Customization",
    "Dashboard",
    "Management",
    "Projects",
    "Clients",
    "Sub-accounts",
    "Web Design",
    "Web Development",
  ],
  authors: [
    {
      name: "Developer Hannan",
      url: "https://designo-builder.vercel.app/",
    },
  ],
  creator: "Developer Hannan",
  openGraph: {
    title: "Designo",
    description: "The online website builder for agencies and individuals.",
    url: "https://designo-builder.vercel.app/",
    siteName: "Designo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://designo-builder.vercel.app/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Designo OG Image",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designo",
    description: "The online website builder for agencies and individuals.",
    images: ["https://designo-builder.vercel.app/seo/og-image.png"],
    // creator: "@devhannan",
  },
  icons: {
    icon: "/seo/favicon.ico",
    apple: "/seo/apple-touch-icon.png",
    shortcut: "/seo/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification-code",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Designo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={`${righteous.variable} ${inter.variable}  antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
