import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
