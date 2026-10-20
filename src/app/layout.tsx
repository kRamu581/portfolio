import Navbar from "@/components/navbar";
import { SchemaMarkup } from "@/components/schema-markup";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap', // Improve font loading performance
  preload: true, // Preload the font
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Kanam Ramu | ServiceNow Developer | AI & Full-Stack Enthusiast",
    template: `%s | ${DATA.name}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.jpg",
  },
  description:
    "Kanam Ramu – ServiceNow Developer and AI & Full-Stack Enthusiast. Specializing in ServiceNow Development, AI-powered automation, and full-stack technologies.",
  keywords: [
    "Kanam Ramu",
    "ServiceNow Developer",
    "AI Automation",
    "Full-Stack Developer",
    "CSA",
    "CAD",
    "NowScripts",
    "React",
    "Spring Boot",
    "Portfolio",
  ],
  alternates: {
    canonical: DATA.url,
  },
  authors: [{ name: "Kanam Ramu" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add your Google Search Console verification code here
    yandex: "",
  },
  other: {
    "google-site-verification": "", // Add verification meta tag here when ready
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
        {/* Preload critical resources for better performance */}
        <link rel="preload" href="/ramu.png" as="image" type="image/png" />
        <link rel="preload" href="/favicon.ico" as="icon" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Google Analytics - Disabled until valid tracking ID is provided */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={300}> {/* Reduced immediate processing */}
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}