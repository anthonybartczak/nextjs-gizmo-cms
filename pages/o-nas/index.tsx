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
        <title>Gizmo Management - O nas</title>
        <meta
          name="description"
          content="Agencja Gizmo to firma, która od 2016 r. świadczy usługi m.in. z szeroko pojętego managementu dla artystów (m.in. general management, booking management, tour/road management, PR management itd.) i lokali rozrywkowych (general management, management artystyczny, event management itd.) oraz obsługi technicznej."
        ></meta>
        <meta property="og:title" content="Gizmo Management - O nas" />
        <meta
          property="og:description"
          content="Agencja Gizmo to firma, która od 2016 r. świadczy usługi m.in. z szeroko pojętego managementu dla artystów (m.in. general management, booking management, tour/road management, PR management itd.) i lokali rozrywkowych (general management, management artystyczny, event management itd.) oraz obsługi technicznej."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gizmo.com.pl/o-nas" />
        <meta
          property="og:image"
          content="https://wp.gizmo.com.pl/wp-content/uploads/2022/10/AnyConv.com__O-nas-profi-1.webp"
        />
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

export async function getStaticProps() {
  const { data }: any = await apolloClient.query({
    query: GetPostBySlug,
    variables: { slug: "o-nas" },
  });
  const post = data.post;
  return {
    props: { post },
    revalidate: 7200,
  };
}
