import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { NavItems } from "../common/Constants";
import { assets } from "../assets/assets";
import {X} from "lucide-react"

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current <= 10) setVisible(true);
      else if (current > lastScrollY) setVisible(false);
      else setVisible(true);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scroll lock
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showMenu);
    return () => document.body.classList.remove("overflow-hidden");
  }, [showMenu]);

  // ESC to close
  useEffect(() => {
    const close = (e) => e.key === "Escape" && setShowMenu(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <div className={`fixed top-4 left-0 z-50 w-full px-4 md:px-7 lg:px-10 transition-all duration-500 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95 pointer-events-none"}`}>
        <nav className="relative mx-auto max-w-7xl rounded-full px-6 md:px-7 lg:px-8 py-2.5
            flex items-center border border-white/10 backdrop-blur-xl bg-transparent
            shadow-[0_8px_40px_rgba(0,0,0,0.75)]
            dark:shadow-[0_0_25px_rgba(255,255,255,0.07)]"
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img src={assets.logoDark} className="hidden dark:block h-7 md:h-8 lg:h-9 w-auto aspect-square" />
            <img src={assets.logoLight} className="block dark:hidden h-7 md:h-8 lg:h-9 w-auto aspect-square" />
          </Link>

          {/* CENTER NAV */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-10">
            {NavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm transition-colors duration-300
                  ${isActive ? "text-red-500 font-bold" :
                  "font-medium text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    <span className={`absolute -bottom-1 left-1/2 h-[3px] w-8 rounded-full transition-all duration-300
                      ${isActive ? "-translate-x-1/2 scale-100 bg-red-500" : "scale-0"}`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* TOGGLE */}
          <div className="ml-auto hidden lg:block">
            <ThemeToggle />
          </div>

          {/* HAMBURGER */}
          <div onClick={() => setShowMenu(true)} className="cursor-pointer lg:hidden ml-auto">
            <img src={assets.menuLight} className="hidden dark:block h-7" />
            <img src={assets.menuDark} className="block dark:hidden h-7" />
          </div>
        </nav>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setShowMenu(false)}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-md transition-opacity duration-300
        ${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* SLIDE PANEL */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-50 h-screen w-[75%] max-w-sm rounded-l-4xl
        bg-gradient-to-b from-[#d0d0d0] via-[#c4c4c4] to-white
        dark:from-[#0d0d0d] dark:via-[#121212] dark:to-black
        shadow-xl border-l border-white/10
        transform transition-transform duration-300 ease-in-out
        ${showMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" onClick={() => setShowMenu(false)} className="flex items-center gap-2">
              <img src={assets.logoDark} className="hidden dark:block h-8 md:h-10 w-auto aspect-square" />
              <img src={assets.logoLight} className="block dark:hidden h-8 md:h-10 w-auto aspect-square" />
            </Link>

            <button onClick={() => setShowMenu(false)} className="text-[#0D0D0D] dark:text-white h-7 md:h-8 w-auto aspect-square cursor-pointer hover:opacity-80 transition-opacity">
              <X/>
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-3">
            {NavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `w-full rounded-xl px-5 py-3 text-lg transition-all
                  ${isActive
                    ? "bg-red-500/80 text-white"
                    : "text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* TOGGLE */}
          <div className="mt-8">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
