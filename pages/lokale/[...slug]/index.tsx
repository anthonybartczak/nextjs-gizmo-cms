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
import SocialLinks from "../../../components/SocialLinks";
import {
  MdPerson,
  MdEmail,
  MdLocalPhone,
  MdLocationCity,
  MdLocationPin,
} from "react-icons/md";

const ArtistPage = ({ post }: any) => (
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
                className="text-5xl text-black"
                dangerouslySetInnerHTML={{
                  __html: sanitize(post.title ?? {}),
                }}
              />
            </header>
            <div className="flex mt-2 text-gray-800">
              <div className="flex mr-4">
                <MdLocationCity className="mt-1 mr-1" />
                <span>{post.venueCity}</span>
              </div>
              <div className="flex">
                <MdLocationPin className="mt-1 mr-1" />
                <span>{post.venueAddress}</span>
              </div>
            </div>
            <div className="divider before:bg-rose-600 after:bg-rose-600 my-2 h-3"></div>
            <figure className="drop-shadow-xl">
              <Image
                alt=""
                width={1280}
                height={720}
                src={post.featuredImage.node.mediaItemUrl}
                className=""
                priority
              />
            </figure>
            <SocialLinks post={post} />
            <div className="flex flex-col mt-4 ">
              <span>{post.contactFunction}:</span>
              <div className="flex">
                <MdPerson className="mt-1 mr-1" />
                <span>{post.contactName}</span>
              </div>
              <div className="flex">
                <MdEmail className="mt-1 mr-1" />
                <span>{post.contactEmail}</span>
              </div>
              <div className="flex">
                <MdLocalPhone className="mt-1 mr-1" />
                <span>{post.contactPhone}</span>
              </div>
            </div>

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

export default ArtistPage;

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
