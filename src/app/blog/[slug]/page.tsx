import type { Metadata } from 'next';
import type { GetAllSlugsResponse, GetPostResponse } from '@/types/api';
import { formatDate } from '@/utils/format-date';
import { getClient } from '@/config/apollo/client';
import { GET_ALL_SLUGS, GET_POST } from '@/config/graphql/query';
import ArticleDetail from '@/components/article-detail';

export async function generateStaticParams() {
  const client = getClient();
  const { data } = await client.query<GetAllSlugsResponse>({
    query: GET_ALL_SLUGS,
  });
  const { posts } = data;
  const slugs = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient();
  const { data } = await client.query<GetPostResponse>({
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

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = getClient();
  const { data } = await client.query<GetPostResponse>({
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
