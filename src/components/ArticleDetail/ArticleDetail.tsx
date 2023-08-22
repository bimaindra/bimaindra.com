import { useEffect, useState } from "react";
import Head from "next/head";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";
import { ArticleDetailPropsType } from "@/types";
import { IconCalendar, IconPencil } from "../Icon";

const ArticleDetail = ({
  title,
  description,
  content,
  date,
  author,
  image,
  tags,
}: ArticleDetailPropsType) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <>
      <Head>
        {/*<!--Basic meta info -->*/}
        <meta name="description" content={description} key="bs-description" />
        <meta
          name="keywords"
          content={
            tags ? tags.map((item: string) => item) : title.toLowerCase()
          }
          key="bs-keywords"
        />
        <meta name="author" content={author} key="bs-author" />
        {/*<!--OpenGraph meta -->*/}
        <meta property="og:title" content={title} key="og-title" />
        <meta
          property="og:description"
          content={description}
          key="og-description"
        />
        <meta property="og:image" content={image} key="og-image" />
        <meta property="og:url" content={currentUrl} key="og-url" />
        <meta property="og:type" content="article" key="og-type" />
        {/*<!--meta for twitter -->*/}
        <meta name="twitter:title" content={title} key="tw-title" />
        <meta
          name="twitter:description"
          content={description}
          key="tw-description"
        />
        <meta
          name="twitter:image"
          content={image ? image : "https://bimaindra.com/logo.jpg"}
          key="tw-image"
        />
        <title>{`${title} | bimaindra.com`}</title>
      </Head>
      <section className="u-safe-area">
        <div className="container">
          <div className="prose mx-auto dark:prose-invert md:prose-base md:max-w-screen-sm lg:max-w-screen-md">
            {image && (
              <div className="relative mb-6 md:mb-8">
                <Image
                  as={NextImage}
                  isBlurred
                  className="!m-0 h-full w-full rounded-lg object-cover"
                  src={image}
                  alt={title}
                  width={1600}
                  height={900}
                  priority
                />
              </div>
            )}
            <h1>{title}</h1>
            <div className="mb-6 flex border-spacing-2 justify-between border-b border-t border-dashed border-slate-500 py-2 dark:border-slate-200">
              <span className="flex items-center gap-1 text-sm">
                <IconPencil />
                {author}
              </span>
              <span className="flex items-center gap-1 text-sm">
                <IconCalendar />
                {date}
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}></div>
            {tags && (
              <div className="mt-8 flex gap-4 border-t border-b border-dashed border-slate-500 py-2 dark:border-slate-200 md:mt-12">
                <span>
                  <b>Tags:</b>
                </span>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {tags.map((item: string, index: number) => {
                    return <span key={index}>#{item}</span>;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetail;
