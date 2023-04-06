import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import { FontDefault } from "@/lib/config";
import Layout from "@/components/Layout";
import { GTM_ID, pageview } from "@/lib/gtm";
import "@/assets/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height, initial-scale=1, shrink-to-fit=yes"
        />
        {/*<!--theme colors -->*/}
        <meta name="theme-color" content="#219EBC" />
        <meta name="apple-mobile-web-app-status-bar-style" content="" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/*<!--Basic meta info -->*/}
        <meta
          name="description"
          content="Web Front End Engineer with 5+ years of experience leveraging CSS and JavaScript to build interactive websites that drive business growth and improve UX."
        />
        <meta
          name="keywords"
          content="web development, front end developer, front end engineer, programming, web front end engineer, webdev"
        />
        <meta name="author" content="Bima Indra Mulya" />

        {/*<!--OpenGraph meta -->*/}
        <meta
          property="og:description"
          content="Web Front End Engineer with 5+ years of experience leveraging CSS and JavaScript to build interactive websites that drive business growth and improve UX."
        />
        <meta property="og:title" content="Bima Indra Mulya" />
        <meta property="og:image" content="https://bimaindra.com/logo.jpg" />
        <meta property="og:url" content="" />

        {/*<!--meta for twitter -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@bimaindraa" />
        <meta name="twitter:title" content="Bima Indra Mulya" />
        <meta name="twitter:image" content="https://bimaindra.com/logo.jpg" />
        <meta name="twitter:site" content="@bimaindraa" />
        <meta
          name="twitter:description"
          content="Web Front End Engineer based in Surabaya, Indonesia."
        />

        {/*<!--Favicon-->*/}
        <link rel="icon" href="/favicon.ico" />

        <title>Bima Indra Mulya | Web Front End Engineer</title>
      </Head>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <div
        className={`${FontDefault.className} bg-slate-50 text-wd-dark dark:bg-slate-600 dark:text-wd-light`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
