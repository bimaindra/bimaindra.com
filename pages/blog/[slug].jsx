import Head from "next/head";
import { isDev } from "../../config";
import { graphql, getAllSlugs, getPost } from "../../lib/query";
import { formatDate } from "../../lib/constant";
import ArticleDetail from "../../components/ArticleDetail";

const QUERY_SLUG = getAllSlugs;
const QUERY_POST = getPost;

export async function getStaticPaths() {
  const { posts } = await graphql.request(QUERY_SLUG);
  const paths = isDev
    ? posts.data.map((post) => ({
        params: { slug: post.id },
      }))
    : posts.map((post) => ({
        params: { slug: post.slug },
      }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
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
    revalidate: 3600,
  };
}

const BlogDetail = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | bimaindra.com</title>
      </Head>
      <ArticleDetail
        title={post.title}
        content={post.content ? post.content.html : post.body}
        date={post.date ? formatDate(post.date) : formatDate("2018-08-17")}
        author={post.author ? post.author.name : "Admin"}
        image={post.coverImage}
      />
    </>
  );
};

export default BlogDetail;
