import Link from "next/link";

type ButtonProps = {
  type: string;
  href: string;
  text: string;
  gtm?: string;
  theme?: string;
};

const Button = ({ type = "button", href, text, gtm, theme }: ButtonProps) => {
  return (
    <>
      {type === "button" ? (
        <button
          type="button"
          className="rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 transition hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 active:shadow-sm dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
          data-gtm={gtm ? gtm : ""}
        >
          {text}
        </button>
      ) : (
        <Link
          href={href}
          className="rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 transition hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 active:shadow-sm dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
          data-gtm={gtm ? gtm : ""}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
