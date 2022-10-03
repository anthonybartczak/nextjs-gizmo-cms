import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Drawer } from "../components/Drawer";
import { Footer } from "../components/Footer";
import { FeaturedArtists } from "../components/FeaturedArtists";
import apolloClient from "../lib/apollo";
import { GetFeaturedArtistPosts, GetEventsForUpcoming } from "../utils/queries";
import { UpcomingEvents } from "../components/UpcomingEvents";

const Home: NextPage = ({ posts, events }: any) => {
  return (
    <>
      <Head>
        <title>Gizmo Management</title>
        <meta name="description" content="Agencja Gizmo Management" />
        <meta property="og:title" content="Agencja Gizmo Management" />
        <meta property="og:description" content="Agencja Gizmo Management" />
        <meta property="og:url" content="http://www.gizmo.com.pl/" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="flex flex-col drawer-content relative overflow-hidden">
            <Navbar />
            <Hero />
            <UpcomingEvents events={events} />
            <FeaturedArtists posts={posts} />
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
  const { data: featuredPosts }: any = await apolloClient.query({
    query: GetFeaturedArtistPosts,
  });

  const { data: upcomingEvents }: any = await apolloClient.query({
    query: GetEventsForUpcoming,
    variables: { amount: 3 },
  });

  const posts = featuredPosts.posts.nodes;
  const events = upcomingEvents.events.nodes;

  return {
    props: { posts, events },
    revalidate: 30,
  };
}
