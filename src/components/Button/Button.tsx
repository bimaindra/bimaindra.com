import Link from "next/link";
import { ButtonProps } from "@/types";

const Button = ({ type = "button", href, text, gtm, theme }: ButtonProps) => {
  return (
    <>
      {type === "button" ? (
        <button
          type="button"
          className="rounded-lg bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-sky-500/50 transition hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-sky-300 active:shadow-sm dark:shadow-lg dark:shadow-sky-800/80 dark:focus:ring-sky-800"
          data-gtm={gtm ? gtm : ""}>
          {text}
        </button>
      ) : (
        <Link
          href={href}
          className="rounded-lg bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-sky-500/50 transition hover:bg-gradient-to-br hover:text-white focus:outline-none focus:ring-4 focus:ring-sky-300 active:shadow-sm dark:shadow-lg dark:shadow-sky-800/80 dark:focus:ring-sky-800"
          data-gtm={gtm ? gtm : ""}>
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
