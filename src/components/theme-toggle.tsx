import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
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