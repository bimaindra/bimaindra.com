import { isDev } from "@/lib/config";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = isDev
  ? process.env.NEXT_DUMMY_GRAPH_API
  : process.env.NEXT_HYGRAPH_API;

export const graphql = new GraphQLClient(`${endpoint}`);

export const getAllPosts = isDev
  ? gql`
      query QueryPosts {
        posts {
          data {
            id
            title
            body
          }
        }
      }
    `
  : gql`
      query QueryPosts {
        posts(stage: PUBLISHED, orderBy: publishedAt_ASC) {
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

export const getAllSlugs = isDev
  ? gql`
      query QuerySlugs {
        posts {
          data {
            id
          }
        }
      }
    `
  : gql`
      query QuerySlugs {
        posts(stage: PUBLISHED) {
          slug
        }
      }
    `;

export const getPost = isDev
  ? gql`
      query ($slug: ID!) {
        post(id: $slug) {
          id
          title
          body
        }
      }
    `
  : gql`
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
        }
      }
    `;
