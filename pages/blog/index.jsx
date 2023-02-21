import Head from "next/head";
import { isDev } from "../../config";
import { graphql, getAllPosts } from "../../lib/query";
import { formatDate } from "../../lib/constant";
import BlogCard from "../../components/BlogCard";

const QUERY_POSTS = getAllPosts;

export async function getStaticProps() {
  const { posts } = await graphql.request(QUERY_POSTS);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 30,
  };
}

const Blog = (posts) => {
  const articles = isDev ? posts.posts.data : posts.posts;

  return (
    <>
      <Head>
        <title>Blog | bimaindra.com</title>
      </Head>
      <section className="u-safe-area">
        <div className="container">
          <div className="mx-auto md:w-3/4 lg:w-1/2">
            <div className="prose  dark:prose-invert  md:prose-base ">
              <h1>Blog</h1>
              <p>Mostly I used to write in Bahasa 🇮🇩.</p>
            </div>
            <div className="mt-12 grid gap-6 md:gap-10">
              {articles.map((article) => {
                return (
                  <BlogCard
                    key={article.id}
                    title={article.title}
                    author={article.author ? article.author.name : "Bima Indra"}
                    date={
                      article.date
                        ? formatDate(article.date)
                        : formatDate("2018-08-17")
                    }
                    description={
                      article.excerpt ? article.excerpt : article.body
                    }
                    image={article.coverImage ? article.coverImage.url : ""}
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
