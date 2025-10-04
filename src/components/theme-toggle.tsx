import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>("dark");

  // Initialize from localStorage or system preference; apply without flash
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = stored ? (stored === "dark" ? "dark" : "light") : (prefersDark ? "dark" : "light");
      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
    } catch {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  // Persist and apply when theme changes
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch {}
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden hover:bg-secondary/20 border border-border/20 hover:border-neon-blue/30 transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-neon-blue" />
      ) : (
        <Moon className="h-4 w-4 text-neon-purple" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};