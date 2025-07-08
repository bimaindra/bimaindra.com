import type { Metadata } from 'next';
import { formatDate } from '@/utils/format-date';
import { getClient } from '@/config/apollo/client';
import ArticleDetail from '@/components/article-detail';
import { GET_ALL_SLUGS, GET_POST } from '@/config/graphql/query';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_ALL_SLUGS,
  });
  const { posts } = data;
  const slugs = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const client = getClient();
  const { data } = await client.query({
    query: GET_POST,
    variables: {
      slug,
    },
  });
  const { post } = data;

  return {
    title: post?.title
      ? `${post.title} | bimaindra.com`
      : 'Blog Post | bimaindra.com',
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params;
  const client = getClient();
  const { data } = await client.query({
    query: GET_POST,
    variables: {
      slug,
    },
  });
  const { post } = data;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <ArticleDetail
      title={post.title}
      description={post.excerpt}
      content={post.content.html}
      date={formatDate(post.date)}
      author={post.author ? post.author.name : 'Bima Indra'}
      image={post.coverImage.url}
      tags={post.tags}
    />
  );
}
