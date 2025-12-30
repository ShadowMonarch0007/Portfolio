import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer relative w-16 h-9 flex items-center rounded-full px-1 transition-colors duration-300
                 ${isDark ? "bg-[#797B80]" : "bg-yellow-100"}`}
      aria-label="Toggle theme"
    >
      <div
        className={`w-7 h-7 rounded-full shadow-md transform transition-transform duration-300
                    flex items-center justify-center
                    ${isDark ? "translate-x-7 bg-[#0D0D0D]" : "translate-x-0 bg-white"}`}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  );
}


function SunIcon() {
    return (
        <svg
            className="w-4 h-4 text-yellow-500"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <circle cx="12" cy="12" r="5" />
            <g stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="23" />
                <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
                <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
                <line x1="1" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="23" y2="12" />
                <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
                <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
            </g>
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg
            className="w-4 h-4 text-yellow-300"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
        </svg>
    );
}
