import { gql } from "@apollo/client";

export const GetPostBySlug = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      contactName
      contactEmail
      contactPhone
      contactFunction
      postFacebook
      postSpotify
      postYoutube
      postAppleMusic
      postTidal
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
  query GetFeaturedArtistPosts {
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

export const GetPostListingByCategory = gql`
  query GetPostListingByCategory($categoryName: String) {
    posts(where: { categoryName: $categoryName }) {
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

export const GetAllEvents = gql`
  query GetAllEvents {
    events {
      nodes {
        id
        slug
        title
        excerpt
        date
        venue {
          city
          address
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const GetAllEventSlugs = gql`
  query GetAllEventSlugs {
    events {
      nodes {
        slug
      }
    }
  }
`;

export const GetEventBySlug = gql`
  query GetEventBySlug($slug: ID!) {
    event(id: $slug, idType: SLUG) {
      title
      content
      contactName
      contactEmail
      contactPhone
      contactFunction
      venue {
        city
        address
      }
      date
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;
