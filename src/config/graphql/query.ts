import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
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

export const GET_ALL_SLUGS = gql`
  query QuerySlugs {
    posts(stage: PUBLISHED) {
      slug
    }
  }
`;

export const GET_POST = gql`
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

export const GET_PAGE = gql`
  query QueryPage($slug: String!) {
    page(where: { slug: $slug }) {
      content {
        html
      }
    }
  }
`;

export const GET_TIMELINES = gql`
  query QueryTimeline {
    timelines(orderBy: endDate_DESC) {
      id
      title
      description
      location
      date
      endDate
      type
    }
  }
`;

export const GET_PORTFOLIOS = gql`
  query queryGetPortfolios {
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

export const GET_PORTFOLIOS_PAGINATED = gql`
  query queryGetPortfoliosPaginated($first: Int!, $skip: Int!) {
    portfoliosConnection {
      aggregate {
        count
      }
    }
    portfolios(orderBy: date_DESC, skip: $skip, first: $first) {
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
