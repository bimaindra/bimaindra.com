import Link from "next/link";
import { IconGithub, IconTwitter } from "../Icon";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-4 shadow-slate-200 dark:bg-slate-800">
      <div className="container">
        <div className="flex justify-between text-xs xl:text-sm">
          <div className="flex items-center divide-x">
            <Link
              href="/about"
              className="px-2 leading-none hover:text-slate-500 dark:text-white">
              About
            </Link>
            <Link
              href="/blog"
              className="px-2 leading-none hover:text-slate-500 dark:text-white">
              Blog
            </Link>
            <Link
              href="/work"
              className="px-2 leading-none hover:text-slate-500 dark:text-white">
              Work
            </Link>
            <Link
              href="/site"
              className="px-2 leading-none hover:text-slate-500 dark:text-white">
              Disclaimer
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <Link
              href="http://github.com/wongdarjo"
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
        <p className="text-center text-xs dark:text-white md:text-right">
          <span>&copy; 2019 - now | Bima Indra Mulya.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
