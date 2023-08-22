import { useEffect, useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "@/context/ThemeContext";
import Profpic from "@/assets/images/profpic.jpg";
import useSound from "use-sound";
import soundUrl from "@/assets/sounds/lamp.mp3";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
  const ctxTheme = useContext(ThemeContext);
  const router = useRouter();
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
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="c-navbar fixed left-0 right-0 top-0 z-50 mx-auto rounded-sm shadow-lg sm:max-w-screen-sm sm:rounded-xl md:mt-4 lg:max-w-screen-md">
      <NavbarContent>
        <NavbarBrand>
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
        </NavbarBrand>
      </NavbarContent>
      <div className="flex items-center gap-6">
        <NavbarContent className="hidden gap-4 sm:flex" justify="end">
          {linkItems.map((item, index) => (
            <NavbarItem key={`desktop-${index}`}>
              <Link
                href={item.href}
                className={`u-link-underline u-link-underline-black block rounded text-sm font-medium text-gray-700 transition-colors dark:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-gray-400 ${
                  item.active ? "active text-sky-600" : ""
                }`}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent>
          <NavbarItem className="ml-2">
            <DarkModeSwitch
              checked={ctxTheme?.theme === "dark" ? true : false}
              onChange={handleToogleTheme}
              moonColor="rgb(245, 158, 11)"
              sunColor="#001219"
              size={22}
            />
          </NavbarItem>
          <NavbarItem className="sm:hidden">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="h-5"
            />
          </NavbarItem>
        </NavbarContent>
      </div>
      <NavbarMenu className="pt-4">
        {linkItems.map((item, index) => (
          <NavbarMenuItem key={`mobile-${index}`}>
            <Link
              href={item.href}
              className={`u-link-underline u-link-underline-black rounded text-sm font-medium text-gray-700 transition-colors dark:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-gray-400 ${
                item.active ? "active text-sky-600" : ""
              }`}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
