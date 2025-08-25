"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export default function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) throw new Error("useDarkMode must be used inside DarkModeProvider");

  return context;
}
