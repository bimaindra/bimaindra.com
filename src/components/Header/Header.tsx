import { useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "@/context/ThemeContext";
import Profpic from "@/static/images/profpic.jpg";
import useSound from "use-sound";
import soundUrl from "@/static/sounds/lamp.mp3";

const Header = () => {
  const ctxTheme = useContext(ThemeContext);
  const [playSwitchTheme] = useSound(soundUrl);

  const handleThemeOnLoad = () => {
    const root = window.document.documentElement;
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      ctxTheme?.setTheme("dark");
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      ctxTheme?.setTheme("light");
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  const handleToogleTheme = () => {
    const root = window.document.documentElement;
    const toggle = ctxTheme?.theme === "dark" ? "light" : "dark";

    ctxTheme?.setTheme(toggle);

    if (ctxTheme?.theme === "light") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    handleThemeOnLoad();
  }, []);

  const router = useRouter();

  const linkItems = [
    {
      name: "Home",
      href: "/",
      active: router.pathname === "/",
    },
    {
      name: "About",
      href: "/about/",
      active: router.pathname === "/about",
    },
    {
      name: "Work",
      href: "/work/",
      active: router.pathname === "/work",
    },
    {
      name: "Blog",
      href: "/blog/",
      active: router.pathname.includes("/blog"),
    },
  ];

  return (
    <header className="c-header fixed left-0 right-0 top-0 z-50 lg:pt-4">
      <div className="mx-auto w-full rounded-sm bg-slate-50 bg-opacity-40 py-3 pl-3 pr-4 shadow-lg backdrop-blur-sm dark:bg-slate-800 sm:max-w-screen-sm md:rounded-md md:border lg:max-w-screen-md xl:rounded-xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group relative text-gray-700 dark:text-white">
            <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-sky-600 transition-colors group-hover:border-sky-600 md:h-10 md:w-10 lg:border-slate-400 lg:group-hover:border-dashed">
              <Image
                src={Profpic}
                alt="Bima Indra Mulya"
                width={40}
                height={40}
                className="object-cover transition-transform group-hover:scale-125 group-hover:grayscale-0 lg:grayscale"
              />
            </div>
          </Link>
          <ul className="flex items-center gap-x-6">
            {linkItems.map((linkItem, index) => {
              return (
                <li key={index}>
                  <Link
                    href={linkItem.href}
                    className={`u-link-underline u-link-underline-black block rounded text-sm font-medium text-gray-700 transition-colors dark:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-gray-400 ${
                      linkItem.active ? "active text-blue-700" : ""
                    }`}>
                    {linkItem.name}
                  </Link>
                </li>
              );
            })}
            <li className="mx-1 cursor-pointer" onClick={() => playSwitchTheme}>
              <DarkModeSwitch
                checked={ctxTheme?.theme === "dark" ? true : false}
                onChange={handleToogleTheme}
                moonColor="rgb(245, 158, 11)"
                sunColor="#001219"
                size={22}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
