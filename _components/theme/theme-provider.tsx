"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemeProvider
    // enableSystem
    // enableColorScheme
    // defaultTheme="dark"
    // attribute="class"

    /* ISSUE: flickering when manually setting themes */
    // value={{ dark: "business" }}
    >
      {children}
    </NextThemeProvider>
  );
}
