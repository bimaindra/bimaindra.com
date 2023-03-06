import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isDev } from "@/lib/config";
import { graphql, getAllPosts } from "@/lib/query";
import { formatDate } from "@/lib/helpers";
import BlogCard from "@/components/BlogCard";

const QUERY_POSTS = getAllPosts;

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await graphql.request(QUERY_POSTS);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 3600,
  };
};

const Blog = (posts: InferGetStaticPropsType<typeof getStaticProps>) => {
  const articles = isDev ? posts.posts.data : posts.posts;

  return (
    <>
      <Head>
        <title>Blog | bimaindra.com</title>
      </Head>
      <section className="u-safe-area">
        <div className="container">
          <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md">
            <div className="prose dark:prose-invert md:prose-base">
              <h1>Blog</h1>
              <p>Mostly I used to write in Bahasa 🇮🇩.</p>
            </div>
            <div className="mt-8 grid gap-6 md:gap-10 lg:mt-12">
              {articles.map((article: any) => {
                return (
                  <BlogCard
                    key={article.id}
                    title={article.title}
                    author={article.author ? article.author.name : "Bima Indra"}
                    date={article.date}
                    description={
                      article.excerpt ? article.excerpt : article.body
                    }
                    image={article.coverImage && article.coverImage.url}
                    slug={`/blog/${article.slug ? article.slug : article.id}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;