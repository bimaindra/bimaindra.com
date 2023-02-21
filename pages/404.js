import Head from "next/head";
import UnderDev from "../components/UnderDev";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | bimaindra.com</title>
      </Head>
      <UnderDev status="notfound" />
    </>
  );
};

export default NotFound;
