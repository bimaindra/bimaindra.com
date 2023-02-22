import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import localFont from "@next/font/local";
import Layout from "@/components/Layout";
import { GTM_ID, pageview } from "@/lib/gtm";
import "@/assets/styles/globals.css";

const defaultFont = localFont({
  src: [
    {
      path: "../assets/fonts/wotfard-regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/wotfard-medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/wotfard-semibold.woff2",
      weight: "600",
    },
  ],
});

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
        <title>Bima Indra Mulya | Web Front End Engineer</title>
        <meta
          name="description"
          content="Web Front End Engineer with 5+ years experience leveraging CSS and JavaScript to build responsive websites and interactive features that drive business growth and improve UX."
        />
        <meta
          name="keyword"
          content="web development, front end developer, front end engineer, programming"
        />
        <link rel="icon" href="/favicon.ico" />
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
        className={`${defaultFont.className} bg-slate-50 text-wd-dark dark:bg-slate-600 dark:text-wd-light`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
