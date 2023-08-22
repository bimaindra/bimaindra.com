import { GraphQLClient, gql } from "graphql-request";
import { endpointGraphql } from "@/constants/config";

export const graphql = new GraphQLClient(`${endpointGraphql}`);

export const queryGetAllPosts = gql`
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

export const queryGetAllSlugs = gql`
  query QuerySlugs {
    posts(stage: PUBLISHED) {
      slug
    }
  }
`;

export const queryGetPost = gql`
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

export const queryGetPage = gql`
  query QueryPage($slug: String!) {
    page(where: { slug: $slug }) {
      content {
        html
      }
    }
  }
`;

export const queryGetTimeline = gql`
  query QueryTimeline {
    timelines {
      id
      title
      description
      location
      date
      type
    }
  }
`;

export const queryPortfolios = gql`
  query QueryPortfolios {
    portfolios(orderBy: date_DESC) {
      id
      description {
        html
      }
      slug
      title
      url
      date
      category {
        title
      }
      excerpt
      techStack
      image {
        url
      }
    }
  }
`;
