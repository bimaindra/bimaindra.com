import { graphql, getPage } from "@/graphql/query";

const useFetchPage = async (slug: string) => {
  const res = await graphql.request(getPage, { slug: slug });

  return res;
};

export default useFetchPage;
