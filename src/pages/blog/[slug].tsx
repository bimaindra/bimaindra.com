import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { useFetchPostSlugs, useFetchPostDetail } from "@/hooks/useFetch";
import { formatDate } from "@/utils/formatDate";
import ArticleDetail from "@/components/ArticleDetail";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await useFetchPostSlugs();

  return {
    paths,
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
      <ArticleDetail
        title={post.title}
        description={post.excerpt}
        content={post.content.html}
        date={post.date ? formatDate(post.date) : formatDate("2018-08-17")}
        author={post.author ? post.author.name : "Bima Indra"}
        image={post.coverImage.url}
        tags={post.tags}
      />
    </>
  );
};

export default BlogDetail;
