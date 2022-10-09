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
      postInstagram
      postSpotify
      postYoutube
      postAppleMusic
      postTidal
      venueAddress
      venueCity
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphSiteName
        opengraphType
        opengraphUrl
        opengraphImage {
          mediaItemUrl
        }
      }
    }
  }
`;

export const GetSlugsByCategoryName = gql`
  query GetSlugsByCategoryNam($categoryName: String) {
    posts(where: { categoryName: $categoryName }) {
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
        venueAddress
        venueCity
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
  query GetAllEvents($amount: Int) {
    events(first: $amount) {
      nodes {
        id
        slug
        title
        excerpt
        startDate
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
      startDate
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphSiteName
        opengraphType
        opengraphUrl
        opengraphImage {
          mediaItemUrl
        }
      }
    }
  }
`;

export const GetAllEventsCalendar = gql`
  query GetAllEventsCalendar {
    events {
      nodes {
        id
        title
        startDate
        slug
      }
    }
  }
`;

export const GetEventsForUpcoming = gql`
  query GetEventsForUpcoming($amount: Int) {
    events(first: $amount) {
      nodes {
        id
        slug
        title
        startDate
        venue {
          city
          address
        }
      }
    }
  }
`;
