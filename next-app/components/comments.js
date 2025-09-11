"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Comments({ isReadme = false }) {
  const { theme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Map your custom themes to Giscus themes
  const getGiscusTheme = () => {
    console.log(isReadme);
    if (!mounted) return "dark"; // fallback during SSR

    const currentTheme = theme === "system" ? resolvedTheme : theme;

    switch (currentTheme) {
      case "sanctum":
        return "light";
      case "catppuccin":
        return "dark";
      case "gruvbox":
        return "noborder_dark";
      case "light":
        return "light";
      case "dark":
        return "dark";
      default:
        return "dark";
    }
  };

  if (!mounted) {
    return <div style={{ minHeight: "200px" }} />; // placeholder during hydration
  }

  return (
    <>
      <blockquote className="mt-8 p-4 bg-blockquote border-2 border-border-subtle rounded-lg">
        <Giscus
          key={theme} // Force re-render when theme changes
          id="comments"
          repo="dnzc/theorem-town"
          repoId="R_kgDOJ1IJ5A"
          category="General"
          categoryId="DIC_kwDOJ1IJ5M4CvRJn"
          mapping="specific"
          term={(isReadme ? "readme:" : "article:") + pathname}
          strict="0"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="topDIC_kwDOJ1IJ5M4CvRJn"
          theme={getGiscusTheme()}
          lang="en"
          loading="lazyDIC_kwDOJ1IJ5M4CvRJn"
        />
      </blockquote>
    </>
  );
}
