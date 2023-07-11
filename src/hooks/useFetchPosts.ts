import { graphql, getAllPosts } from "@/graphql/query";
import { isDev } from "@/constants/config";
import dummyPosts from "@/data/posts.json";

const useFetchPosts = async () => {
  const res = isDev ? dummyPosts : await graphql.request(getAllPosts);

  return res;
};

export default useFetchPosts;
