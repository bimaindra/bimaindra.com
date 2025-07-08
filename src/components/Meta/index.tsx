import Head from 'next/head';
import { meta } from '@/constants/seo';

const Meta = () => {
  return (
    <Head>
      <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,height=device-height, initial-scale=1, shrink-to-fit=yes"
      />
      <meta name="theme-color" content="#f8fafc" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      {/*<!--Basic meta info -->*/}
      <meta
        name="description"
        content={meta.description}
        key="bs-description"
      />
      <meta name="keywords" content={meta.keywords} key="bs-keywords" />
      <meta name="author" content={meta.title} key="bs-author" />
      {/*<!--OpenGraph meta -->*/}
      <meta property="og:title" content={meta.title} key="og-title" />
      <meta
        property="og:description"
        content={meta.description}
        key="og-description"
      />
      <meta property="og:url" content={meta.url} key="og-url" />
      <meta property="og:image" content={meta.image} key="og-image" />
      <meta
        property="og:site_name"
        content={meta.site_name}
        key="og-site-name"
      />
      <meta property="og:locale" content={meta.locale} key="og-locale" />
      <meta property="og:type" content="website" key="og-type" />
      {/*<!--meta for twitter -->*/}
      <meta name="twitter:card" content="summary_large_image" key="tw-card" />
      <meta name="twitter:title" content={meta.title} key="tw-title" />
      <meta
        name="twitter:description"
        content={meta.description}
        key="tw-description"
      />
      <meta name="twitter:site" content={meta.creator} key="tw-site" />
      <meta name="twitter:site:id" content={meta.creator} key="tw-site-id" />
      <meta name="twitter:image" content={meta.image} key="tw-image" />
      <meta name="twitter:creator" content={meta.creator} key="tw-creator" />
      {/*<!--Favicon-->*/}
      <link rel="icon" href="/favicon.ico" />
      {/*<!--Title-->*/}
      <title>{meta.title}</title>
    </Head>
  );
};

export default Meta;
