import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Profpic from "@/assets/images/profpic.jpg";

const Header = () => {
  const router = useRouter();

  const linkItems = [
    //{
    //  name: "Home",
    //  href: "/",
    //  active: router.pathname === "/",
    //},
    {
      name: "About",
      href: "/about/",
      active: router.pathname === "/about",
    },
    //{
    //	name: 'Works',
    //	href: '/works',
    //	active: router.pathname === '/works',
    //},
    {
      name: "Blog",
      href: "/blog/",
      active: router.pathname.includes("/blog"),
    },
  ];

  return (
    <header className="c-header fixed left-0 right-0 top-0 z-50 mx-auto w-full rounded-sm border bg-slate-50 bg-opacity-40 py-3 pl-3 pr-4 shadow-lg backdrop-blur-sm dark:bg-slate-800 md:top-2 md:max-w-screen-sm md:rounded-md lg:max-w-screen-md lg:bg-opacity-10 xl:rounded-xl">
      <div className="flex items-center justify-between">
        <Link href="/" className="group relative text-gray-700 dark:text-white">
          {/*<span className="flex items-center gap-x-2">
            <span className="font-title tracking-[2px] md:text-lg">
              <span className="decoration-blue-700 decoration-wavy decoration-2 underline-offset-1 transition-all group-hover:underline">
                BIM
              </span>
            </span>
            <span className="emoji-logo transform transition-transform">
              &#128526;
            </span>
          </span>*/}
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
        <ul className="flex items-center gap-x-2 md:gap-x-4">
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
