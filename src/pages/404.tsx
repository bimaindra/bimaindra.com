import Head from "next/head";
import dynamic from "next/dynamic";

const UnderDevPage = dynamic(() => import("@/components/UnderDev"));

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | bimaindra.com</title>
      </Head>
      <UnderDevPage status="notfound" />
    </>
  );
};

export default NotFound;
