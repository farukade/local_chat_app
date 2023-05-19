import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useToggler } from "../Hooks/useToggler";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useToggler();

  return (
    <div className="flex flex-row gap-4 px-2 justify-self-center justify-center duration-100 rounded ">
      <SunIcon
        key={"light"}
        className={`w-5 h-5 leading-9 text-xl rounded-full ${theme === "light" && "text-sky-600"} Top-Icon`}
        onClick={() => toggleTheme("light")}
      />

      <MoonIcon
        key={"dark"}
        className={`w-5 h-5 leading-9 text-xl rounded-full ${theme === "dark" && "text-sky-600"} Top-Icon`}
        onClick={() => toggleTheme("dark")}
      />
    </div>
  );
};

//  bg-white dark:bg-slate-800

export default ThemeToggler;
