"use client";

// import FadeIn from "@components/fade-in";
import { Sun, Moon } from "../icons";
// import socialStyles from "@components/socials/socials.module.css";
// import Tooltip from "@components/tooltip";
import { useTheme } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

const ThemeSwitcher = ({
  className = "",
  iconSize = 24,
  strokeWidth,
}: {
  className?: string;
  iconSize?: number;
  strokeWidth?: number;
}) => {
  const { theme: activeTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // set daisyUI theme
    setTheme(activeTheme === "light" ? "dark" : "light");

    // set tailwind class on html element as backup
    document.documentElement.classList.remove(
      activeTheme === "light" ? "light" : "dark"
    );
    document.documentElement.classList.add(
      activeTheme === "light" ? "dark" : "light"
    );
  };

  return (
    // <Wrapper>
    <button
      onClick={toggleTheme}
      aria-label="Change the theme"
      // className={`${socialStyles.icon} ${className}`}
    >
      {mounted ? (
        // <FadeIn>
        <>
          {activeTheme === "dark" ? (
            <Sun size={30} strokeWidth={strokeWidth || 2} />
          ) : (
            <Sun size={30} strokeWidth={strokeWidth || 2} />
          )}
        </>
      ) : (
        // </FadeIn>
        <span style={{ opacity: 0 }} aria-hidden>
          <Sun size={30} strokeWidth={strokeWidth || 2} />
        </span>
      )}
    </button>
    // </Wrapper>
  );
};

export default ThemeSwitcher;
