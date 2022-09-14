import type { NextPage } from "next";
import apolloClient from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Drawer } from "../../components/Drawer";
import { Footer } from "../../components/Footer";
import { sanitize } from "../../utils/misc";
import { GetAllEvents } from "../../utils/queries";
import Link from "next/link";
import { MdLocationCity, MdLocationPin } from "react-icons/md";

const Wydarzenia: NextPage = ({ events }: any) => {
  return (
    <>
      <Head>
        <title>Gizmo Management</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar />
          <div className="grid grid-cols-3 gap-x-2 grid-flow-row">
            {events.map((event: any) => (
              <div key={event.id} className="event-listing-card">
                <figure>
                  <Image
                    alt=""
                    layout="fixed"
                    width={250}
                    height={130}
                    src={event.featuredImage.node.mediaItemUrl}
                    className="shadow-xl"
                  />
                </figure>
                <div className="card-body gap-0.5">
                  <h2 className="card-title text-black">{event.title}</h2>
                  <div className="divider before:bg-rose-600 after:bg-rose-600 my-0.5 h-3"></div>
                  <div className="text-gray-600">
                    <div className="flex">
                      <MdLocationCity className="mt-1 mr-1" />
                      <span>{event.venue.city}</span>
                    </div>
                    <div className="flex">
                      <MdLocationPin className="mt-1 mr-1" />
                      <span>{event.venue.address}</span>
                    </div>
                  </div>
                  <div className="card-actions xl:absolute justify-end bottom-8 right-4">
                    <Link href={"/artysci/" + event.slug} passHref>
                      <button className="main-card-btn">więcej</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
        <Drawer />
      </div>
    </>
  );
};

export default Wydarzenia;

export async function getStaticProps() {
  const { data }: any = await apolloClient.query({
    query: GetAllEvents,
  });

  const events = data.events.nodes;

  return {
    props: { events },
    revalidate: 30,
  };
}
