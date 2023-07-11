import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { formatDate } from "@/utils/formatDate";
import ArticleDetail from "@/components/ArticleDetail";
import useFetchPostSlug from "@/hooks/useFetchPostSlug";
import useFetchPostDetail from "@/hooks/useFetchPostDetail";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await useFetchPostSlug();

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { slug } = params;
  const response = await useFetchPostDetail(slug);
  const { post } = response;

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 60,
  };
};

const BlogDetail = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{post.title} | bimaindra.com</title>
      </Head>
      <ArticleDetail
        title={post.title}
        description={post.excerpt ? post.excerpt : post.body}
        content={post.content ? post.content.html : post.body}
        date={post.date ? formatDate(post.date) : formatDate("2018-08-17")}
        author={post.author ? post.author.name : "Bima Indra"}
        image={post.coverImage && post.coverImage.url}
        tags={post.tags}
      />
    </>
  );
};

export default BlogDetail;
