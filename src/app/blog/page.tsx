import type { Metadata } from 'next';
import { formatDate } from '@/utils/format-date';
import CardBlog from '@/components/card-blog';
import { getClient } from '@/config/apollo/client';
import { GET_ALL_POSTS } from '@/config/graphql/query';
import type { GetAllPostsResponse } from '@/types/api';

export const metadata: Metadata = {
  title: 'Blog | bimaindra.com',
};

export default async function Blog() {
  const client = getClient();
  const { data } = await client.query<GetAllPostsResponse>({
    query: GET_ALL_POSTS,
  });
  const posts = data.posts;

  if (!posts) {
    return <div>No posts found</div>;
  }

  return (
    <section className="u-safe-area">
      <div className="container">
        <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md">
          <div className="prose dark:prose-invert md:prose-base">
            <h1>✍🏼 Blog</h1>
            <p>Mostly I used to write in Bahasa 🇮🇩.</p>
          </div>
          <div className="mt-8 grid gap-6 md:gap-10 lg:mt-12">
            {posts.map(
              (post: {
                id: string;
                title: string;
                date: string;
                excerpt: string;
                coverImage: { url: string };
                slug: string;
                author?: { name: string };
              }) => {
                return (
                  <CardBlog
                    key={post.id}
                    title={post.title}
                    author={post.author ? post.author.name : 'Bima Indra'}
                    date={formatDate(post.date)}
                    description={post.excerpt}
                    image={post.coverImage.url}
                    slug={`/blog/${post.slug}`}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
