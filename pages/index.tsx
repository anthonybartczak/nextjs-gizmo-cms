import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Drawer } from "../components/Drawer";
import { Footer } from "../components/Footer";
import Featured from "../components/Featured";
import client from "../lib/apollo";
import { GetFeaturedArtistPosts } from "../utils/queries";

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Gizmo Management</title>
      </Head>
      <main>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="flex flex-col drawer-content relative overflow-hidden">
            <Navbar />
            <Hero />
            <Featured posts={posts} />
            <Footer />
          </div>
          <Drawer />
        </div>
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { data }: any = await client.query({
    query: GetFeaturedArtistPosts,
  });

  const posts = data.posts.nodes;

  return {
    props: { posts },
    revalidate: 30,
  };
}
