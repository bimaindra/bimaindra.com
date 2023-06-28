import Head from "next/head";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getPage } from "@/api/query";
import {
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconTwitter,
} from "@/components/Icon";

const QUERY_PAGE = getPage;
const SLUG = "about";

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await new GraphQLClient(
    `${process.env.NEXT_HYGRAPH_API}`
  ).request(QUERY_PAGE, { slug: SLUG });

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

const About = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content } = props.page;
  return (
    <>
      <Head>
        <title>About | bimaindra.com</title>
      </Head>
      <section className="u-safe-area">
        <div className="container">
          <div className="prose mx-auto dark:prose-invert md:prose-base md:max-w-screen-sm lg:max-w-screen-md">
            <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
            <h2 className="decoration-slice underline decoration-dashed underline-offset-4">
              Ping me
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href="mailto:bimaindramulya@gmail.com"
                className="transition-transform hover:-translate-y-1">
                <IconMail />
              </Link>
              <Link
                href="http://github.com/bimaindra"
                target="_blank"
                className="transition-transform hover:-translate-y-1">
                <IconGithub />
              </Link>
              <Link
                href="http://linkedin.com/in/bimaindra"
                target="_blank"
                className="transition-transform hover:-translate-y-1">
                <IconLinkedin />
              </Link>
              <Link
                href="http://twitter.com/bimaindraa"
                target="_blank"
                className="transition-transform hover:-translate-y-1">
                <IconTwitter />
              </Link>
              <Link
                href="http://instagram.com/bimaindraa"
                target="_blank"
                className="transition-transform hover:-translate-y-1">
                <IconInstagram />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
