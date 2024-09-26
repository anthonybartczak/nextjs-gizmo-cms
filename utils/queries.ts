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
  query GetSlugsByCategoryName($categoryName: String) {
    posts(first: 1000, where: { categoryName: $categoryName }) {
      nodes {
        slug
      }
    }
  }
`;

export const GetFeaturedArtistPosts = gql`
  query GetFeaturedArtistPosts {
    posts(
      where: {
        categoryName: "Artyści"
        tag: "Promowany"
        orderby: { field: MODIFIED, order: DESC }
      }
      first: 3
    ) {
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
    posts(
      first: 1000
      where: {
        categoryName: $categoryName
        orderby: { field: TITLE, order: ASC }
      }
    ) {
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
  query GetAllEvents($amount: Int, $day: Int, $month: Int, $year: Int) {
    events(
      first: $amount
      where: {
        startDateQuery: { after: { day: $day, month: $month, year: $year } }
      }
    ) {
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
        ticketURL
      }
    }
  }
`;

export const GetAllEventSlugs = gql`
  query GetAllEventSlugs($amount: Int) {
    events(first: $amount) {
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
      ticketURL
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
  query GetEventsForUpcoming($amount: Int, $day: Int, $month: Int, $year: Int) {
    events(
      last: $amount
      where: {
        startDateQuery: { after: { day: $day, month: $month, year: $year } }
      }
    ) {
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

export const GetEventsForArchive = gql`
  query GetAllEvents($day: Int, $month: Int, $year: Int) {
    events(
      where: {
        startDateQuery: { before: { day: $day, month: $month, year: $year } }
      }
    ) {
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
