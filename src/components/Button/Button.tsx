import Link from "next/link";
import { Button } from "@nextui-org/react";
import { ButtonPropsType } from "@/types";

const ButtonComp = ({ type = "button", href, text, gtm }: ButtonPropsType) => {
  return (
    <>
      {type === "button" ? (
        <Button
          type="button"
          className="bg-gradient-to-tr from-sky-500 to-sky-700 text-white shadow-lg"
          data-gtm={gtm ? gtm : ""}>
          {text}
        </Button>
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

export default ButtonComp;
