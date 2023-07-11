import { graphql, getPost } from "@/graphql/query";
import { isDev } from "@/constants/config";
import fakePosts from "@/data/posts.json";

const useFetchPostDetail = async (slug: string) => {
  let fakePost = {};
  fakePosts.posts.filter((post) => {
    if (post.slug === slug) {
      fakePost = {
        post: post,
      };
    }
  });
  const res = isDev ? fakePost : await graphql.request(getPost, { slug });

  return res;
};

export default useFetchPostDetail;
