import client from "../../../lib/apollo";
import { gql } from "@apollo/client";
import Head from "next/head";
import { GetStaticPaths } from "next";
import { Navbar } from "../../../components/Navbar";
import { Drawer } from "../../../components/Drawer";
import { Footer } from "../../../components/Footer";

const Page = ({ post }: any) => (
  <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <article>
      <Navbar />
      <header>
        <div
          dangerouslySetInnerHTML={{
            __html: post.title ?? {},
          }}
        />
      </header>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content ?? {},
        }}
      />
    </article>
    <Footer />
    <Drawer />
  </>
);

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  // Returns a list of { slug: string } objects, uses getPages underneath
  const { data }: any = await client.query({
    query: GetAllSlugs,
  });

  return {
    paths: data.posts.nodes.map(({ slug }: any) => ({
      params: { slug: slug.split("/") },
    })),
    fallback: false,
  };
};

export async function getStaticProps(context: { params: { slug: any[] } }) {
  const { data }: any = await client.query({
    query: GetPostBySlug,
    variables: { slug: context.params.slug.join(" / ") },
  });
  const post = data.post;

  return {
    props: { post },
  };
}

const GetPostBySlug = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
    }
  }
`;

const GetAllSlugs = gql`
  query GetAllSlugs {
    posts {
      nodes {
        slug
      }
    }
  }
`;
