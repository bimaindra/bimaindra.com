import Head from "next/head";
import UnderDev from "@/components/UnderDev";

const Disclaimer = () => {
  return (
    <>
      <Head>
        <title>About This Site | bimaindra.com</title>
      </Head>
      <div className="container">
        <UnderDev />
      </div>
    </>
  );
};

export default Disclaimer;
