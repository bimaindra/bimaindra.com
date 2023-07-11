import { graphql, getAllSlugs } from "@/graphql/query";
import { isDev } from "@/constants/config";
import fakePosts from "@/data/posts.json";

const useFetchPostSlug = async () => {
  const { posts } = await graphql.request(getAllSlugs);
  const slugs = isDev
    ? fakePosts.posts.map((post) => ({
        params: { slug: post.slug },
      }))
    : posts.map((post: any) => ({
        params: { slug: post.slug },
      }));

  return slugs;
};

export default useFetchPostSlug;
