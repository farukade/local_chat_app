import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useToggler } from "../Hooks/useToggler";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useToggler();

  return (
    <div className="fixed duration-100 dark:bg-slate-700 bg-gray-100 rounded">
      <button
        key={"light"}
        className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === "light" && "text-sky-600"}`}
        onClick={() => toggleTheme("light")}
      >
        <SunIcon className="h-6 w-6" />
      </button>
      <button
        key={"dark"}
        className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === "dark" && "text-sky-600"}`}
        onClick={() => toggleTheme("dark")}
      >
        <MoonIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ThemeToggler;
