import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import IntroAnimation from "@/components/IntroAnimation";
import IntroBootstrap from "@/components/IntroBootstrap";

export const metadata: Metadata = {
  title: {
    default: "MEG Electrical Solutions",
    template: "%s | MEG Electrical Solutions",
  },

  description:
    "Explore lighting, switches, wires, protection and industrial electrical products from established brands through MEG Electrical Solutions.",

  openGraph: {
    type: "website",
    siteName: "MEG Electrical Solutions",
  },

  twitter: {
    card: "summary_large_image",
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Decides whether the intro should play before the first paint */}
        <IntroBootstrap />

        {/* 10-second MEG intro animation */}
        <IntroAnimation />

        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}