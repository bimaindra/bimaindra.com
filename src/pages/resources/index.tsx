import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import useFetchPage from "@/hooks/useFetchPage";

export const getStaticProps: GetStaticProps = async () => {
  const slug = "resources";
  const { page } = await useFetchPage(slug);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: { page },
    revalidate: 60,
  };
};

const Resources = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content } = props.page;

  return (
    <>
      <Head>
        <title>Resources | bimaindra.com</title>
      </Head>
      <section className="u-safe-area">
        <div className="container">
          <div
            className="prose mx-auto dark:prose-invert md:prose-base md:max-w-screen-sm lg:max-w-screen-md"
            dangerouslySetInnerHTML={{ __html: content.html }}></div>
        </div>
      </section>
    </>
  );
};

export default Resources;
