import {
  graphql,
  queryGetPage,
  queryGetAllPosts,
  queryGetPost,
  queryGetAllSlugs,
} from "@/graphql/query";
import { isDev } from "@/constants/config";
import fakePosts from "@/data/posts.json";

export const useFetchPage = async (slug: string) => {
  const res = await graphql.request(queryGetPage, { slug: slug });

  return res;
};

export const useFetchPosts = async () => {
  const res = isDev ? fakePosts : await graphql.request(queryGetAllPosts);

  return res;
};

export const useFetchPostDetail = async (slug: string) => {
  let fakePost = {};
  fakePosts.posts.filter((post) => {
    if (post.slug === slug) {
      fakePost = {
        post: post,
      };
    }
  });
  const res = isDev ? fakePost : await graphql.request(queryGetPost, { slug });

  return res;
};

export const useFetchPostSlug = async () => {
  const { posts } = await graphql.request(queryGetAllSlugs);
  const slugs = isDev
    ? fakePosts.posts.map((post) => ({
        params: { slug: post.slug },
      }))
    : posts.map((post: any) => ({
        params: { slug: post.slug },
      }));

  return slugs;
};
