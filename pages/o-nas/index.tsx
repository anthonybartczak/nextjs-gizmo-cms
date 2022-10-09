import type { NextPage } from "next";
import apolloClient from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Drawer } from "../../components/Drawer";
import { Footer } from "../../components/Footer";
import { sanitize } from "../../utils/misc";
import { GetPostBySlug } from "../../utils/queries";
import styles from "../post-styles/posts-body.module.css";
import Link from "next/link";

const AboutUs: NextPage = ({ post }: any) => {
  return (
    <>
      <Head>
        <title>Gizmo Management</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer-3" />
        <div className="flex flex-col drawer-content">
          <Navbar />
          <div className="flex flex-col max-w-2xl mx-4 xl:mx-auto mt-5">
            <div className="divider before:bg-rose-600 after:bg-rose-600 text-black font-bold w-full my-0.5 h-3 text-xl md:text-4xl">
              Nasz zespół
            </div>
            <article>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: sanitize(post.content ?? {}),
                }}
              />
            </article>
          </div>
          <Footer />
        </div>
        <Drawer />
      </div>
    </>
  );
};

export default AboutUs;

export async function getStaticProps(context: { params: { slug: any[] } }) {
  const { data }: any = await apolloClient.query({
    query: GetPostBySlug,
    variables: { slug: "o-nas" },
  });
  const post = data.post;
  return {
    props: { post },
    revalidate: 30,
  };
}
