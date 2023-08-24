import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useFetchPosts } from "@/hooks/useFetch";
import { formatDate } from "@/utils/formatDate";
import CardBlog from "@/components/CardBlog";

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await useFetchPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 60,
  };
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Blog | bimaindra.com</title>
      </Head>
      <section className="u-safe-area">
        <div className="container">
          <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md">
            <div className="prose dark:prose-invert md:prose-base">
              <h1>✍🏼 Blog</h1>
              <p>Mostly I used to write in Bahasa 🇮🇩.</p>
            </div>
            <div className="mt-8 grid gap-6 md:gap-10 lg:mt-12">
              {posts.map((post: any) => {
                return (
                  <CardBlog
                    key={post.id}
                    title={post.title}
                    author={post.author ? post.author.name : "Bima Indra"}
                    date={formatDate(post.date)}
                    description={post.excerpt}
                    image={post.coverImage.url}
                    slug={`/blog/${post.slug}`}
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
