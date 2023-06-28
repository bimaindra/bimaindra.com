import Link from "next/link";
import { IconGithub, IconTwitter } from "../Icon";

const Footer = () => {
  return (
    <footer className="py-6 shadow-slate-200 dark:bg-slate-800 md:pt-8">
      <div className="container lg:max-w-screen-md">
        <div className="flex justify-between text-sm">
          <div className="flex items-center divide-x">
            <Link
              href="/about"
              className="px-2 leading-none first:pl-0 dark:text-white">
              About
            </Link>
            <Link href="/blog" className="px-2 leading-none dark:text-white">
              Blog
            </Link>
            <Link href="/work" className="px-2 leading-none dark:text-white">
              Work
            </Link>
            <Link
              href="/resources"
              className="px-2 leading-none dark:text-white">
              Resources
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <Link
              href="http://github.com/bimaindra"
              target="_blank"
              className="dark:text-white">
              <IconGithub />
            </Link>
            <Link
              href="http://twitter.com/bimaindraa"
              target="_blank"
              className="dark:text-white">
              <IconTwitter />
            </Link>
          </div>
        </div>
        <hr className="my-4 h-px border-0 bg-gray-200" />
        <p className="text-center text-xs dark:text-white">
          <span>&copy; 2019 - present | Bima Indra Mulya.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
