import type { Metadata } from "next";
import Script from "next/script";

import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "../_components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        {/* update theme for tailwind */}
        <Script id="theme-detector">{`
          const theme = document.documentElement.style.colorScheme
          document.documentElement.classList.add(theme)
        `}</Script>
        <ThemeProvider>
          <main className="">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | YD Kim",
    default: "YD Kim",
  },
  description:
    "Posts on things no one cares about and answers to questions no one asked.",
  keywords:
    "Tech Blog, Machine Learning, Recommendation Algorithms, Web Development, Language Models, Blockchain",
  openGraph: {
    title: "YD Kim",
    url: "https://kimyoonduk.com",
    siteName: "YD Kim's Blog",
    locale: "en_US",
    type: "website",
    description: "Mostly tech stuff",
    // images: [
    //   {
    //     url: "",
    //     width: 1000,
    //     height: 600,
    //     alt: "YD Kim's Blog",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kimyoonduk",
    creator: "@kimyoonduk",
    title: "YD Kim",
    description: "Mostly tech stuff",
    // images: [],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
