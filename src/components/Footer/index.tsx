'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 shadow-slate-200 dark:bg-slate-600 md:pt-8">
      <div className="container sm:max-w-screen-sm lg:max-w-screen-md">
        <hr className="my-4 h-px border-0 bg-gray-200" />
        <div className="flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:justify-between">
          <div className="flex items-center divide-x">
            <Link
              href="/about"
              className="px-2 leading-none first:pl-0 dark:text-white"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="px-2 leading-none dark:text-white"
            >
              Projects
            </Link>
            <Link href="/blog" className="px-2 leading-none dark:text-white">
              Blog
            </Link>
            <Link
              href="/resources"
              className="px-2 leading-none dark:text-white"
            >
              Resources
            </Link>
            <Link href="#" className="px-2 leading-none dark:text-white">
              Analytics
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <Link
              href="http://github.com/bimaindra"
              target="_blank"
              className="dark:text-white"
            >
              <span className="hidden">GitHub</span>
              <FaGithub size={20} />
            </Link>
            <Link
              href="http://twitter.com/bimaindraa"
              target="_blank"
              className="dark:text-white"
            >
              <span className="hidden">X</span>
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="http://linkedin.com/in/bimaindra"
              target="_blank"
              className="dark:text-white"
            >
              <span className="hidden">LinkedIn</span>
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
        <hr className="my-4 h-px border-0 bg-gray-200" />
        <p className="text-center text-xs dark:text-white">
          <span>&copy; 2017-{currentYear} | Bima Indra Mulya</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
