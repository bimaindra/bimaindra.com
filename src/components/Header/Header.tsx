import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Profpic from "@/static/images/profpic.jpg";
import useSound from "use-sound";
import soundUrl from "@/static/sounds/lamp.mp3";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [playSwitchTheme] = useSound(soundUrl);

  const handleDarkMode = () => {
    const root = window.document.documentElement;
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      root.classList.add("dark");
    } else {
      setDarkMode(false);
      root.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    //localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    //localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    //localStorage.removeItem("theme");
  };

  const toggleDarkMode = (checked: boolean) => {
    const root = window.document.documentElement;
    setDarkMode(checked);
    if (!isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    handleDarkMode();
  }, []);

  const router = useRouter();

  const linkItems = [
    {
      name: "About",
      href: "/about/",
      active: router.pathname === "/about",
    },
    {
      name: "Blog",
      href: "/blog/",
      active: router.pathname.includes("/blog"),
    },
  ];

  return (
    <header className="c-header fixed left-0 right-0 top-0 z-50 lg:pt-4">
      <div className="mx-auto w-full rounded-sm bg-slate-50 bg-opacity-40 py-3 pl-3 pr-4 shadow-lg backdrop-blur-sm dark:bg-slate-800 md:max-w-screen-sm md:rounded-md md:border lg:max-w-screen-md xl:rounded-xl">
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
                    className={`u-link-underline u-link-underline-black block rounded text-sm font-medium text-gray-700 transition-colors dark:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-gray-400 ${
                      linkItem.active ? "active text-blue-700" : ""
                    }`}>
                    {linkItem.name}
                  </Link>
                </li>
              );
            })}
            <li className="mx-1 cursor-pointer" onClick={() => playSwitchTheme}>
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
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
