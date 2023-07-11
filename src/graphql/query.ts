import { GraphQLClient, gql } from "graphql-request";
import { endpointGraphql } from "@/constants/config";

export const graphql = new GraphQLClient(`${endpointGraphql}`);

export const getAllPosts = gql`
  query QueryPosts {
    posts(stage: PUBLISHED, orderBy: publishedAt_DESC) {
      id
      title
      slug
      date
      excerpt
      coverImage {
        url
      }
      author {
        name
      }
    }
  }
`;

export const getAllSlugs = gql`
  query QuerySlugs {
    posts(stage: PUBLISHED) {
      slug
    }
  }
`;

export const getPost = gql`
  query QueryPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      date
      excerpt
      author {
        name
      }
      content {
        html
      }
      coverImage {
        url
      }
      seo {
        description
      }
      tags
    }
  }
`;

export const getPage = gql`
  query QueryPage($slug: String!) {
    page(where: { slug: $slug }) {
      content {
        html
      }
    }
  }
`;
