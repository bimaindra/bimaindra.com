import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isDev } from "@/lib/config";
import { graphql, getAllSlugs, getPost } from "@/lib/query";
import { formatDate } from "@/lib/helpers";
import ArticleDetail from "@/components/ArticleDetail";

const QUERY_SLUG = getAllSlugs;
const QUERY_POST = getPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphql.request(QUERY_SLUG);
  const paths = isDev
    ? posts.data.map((post: any) => ({
        params: { slug: post.id },
      }))
    : posts.map((post: any) => ({
        params: { slug: post.slug },
      }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const slug = params.slug;
  const data = await graphql.request(QUERY_POST, { slug });
  const post = data.post;

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 1800,
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
