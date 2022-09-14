import apolloClient from "../../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths } from "next";
import { Navbar } from "../../../components/Navbar";
import { Drawer } from "../../../components/Drawer";
import { Footer } from "../../../components/Footer";
import { sanitize } from "../../../utils/misc";
import { GetAllSlugs, GetPostBySlug } from "../../../utils/queries";
import styles from "../../post-styles/posts-body.module.css";

const Page = ({ post }: any) => (
  <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        <article>
          <Navbar />
          <div className="flex flex-col max-w-2xl mx-4 xl:mx-auto mt-5">
            <header>
              <h1
                className="text-5xl py-5 text-black"
                dangerouslySetInnerHTML={{
                  __html: sanitize(post.title ?? {}),
                }}
              />
            </header>
            <figure className="">
              <Image
                alt=""
                width={1500}
                height={900}
                src={post.featuredImage.node.mediaItemUrl}
                className="rounded-lg shadow-xl"
              />
            </figure>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: sanitize(post.content ?? {}),
              }}
            />
          </div>
        </article>
        <Footer />
      </div>
      <Drawer />
    </div>
  </>
);

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: any = await apolloClient.query({
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
  const { data }: any = await apolloClient.query({
    query: GetPostBySlug,
    variables: { slug: context.params.slug.join(" / ") },
  });
  const post = data.post;
  return {
    props: { post },
    revalidate: 30,
  };
}
