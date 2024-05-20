"use client";

import * as React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-3xl cursor-pointer"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-3xl cursor-pointer"
        />
      )}
    </div>
  );
}
