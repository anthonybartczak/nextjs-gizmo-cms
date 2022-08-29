import { gql } from "@apollo/client";

export const GetPostBySlug = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;

export const GetAllSlugs = gql`
  query GetAllSlugs {
    posts {
      nodes {
        slug
      }
    }
  }
`;

export const GetFeaturedArtistPosts = gql`
  query FeaturedPosts {
    posts(where: { categoryName: "Artyści", tag: "Promowany" }, first: 3) {
      nodes {
        id
        title
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        slug
      }
    }
  }
`;

export const GetArtistsListing = gql`
  query FeaturedPosts {
    posts(where: { categoryName: "Artyści" }) {
      nodes {
        id
        title
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        slug
      }
    }
  }
`;
