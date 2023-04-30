import { useEffect, useState } from "react";

export const useToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("chat_theme") ? localStorage.getItem("chat_theme") : "dark");

  const element = document.documentElement;

  const toggleTheme = (value: string): void => setTheme(value);

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("chat_theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("chat_theme", "light");
        break;
      default:
        localStorage.setItem("chat_theme", "dark");
        break;
    }
  }, [theme, element]);

  return { theme, toggleTheme };
};
