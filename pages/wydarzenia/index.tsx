import type { NextPage } from "next";
import apolloClient from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Drawer } from "../../components/Drawer";
import { Footer } from "../../components/Footer";
import { GetAllEvents } from "../../utils/queries";
import Link from "next/link";
import {
  MdLocationCity,
  MdLocationPin,
  MdAccessTime,
  MdOutlineCalendarToday,
} from "react-icons/md";

const Events: NextPage = ({ events }: any) => {
  return (
    <>
      <Head>
        <title>Gizmo Management</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar />
          <ul className="pt-4">
            {events.map((event: any) => (
              <li key={event.id} className="event-listing-card">
                <figure>
                  <Image
                    alt=""
                    layout="fixed"
                    width={450}
                    height={253}
                    src={event.featuredImage.node.mediaItemUrl}
                    className="shadow-xl object-cover"
                    priority
                  />
                </figure>
                <div className="card-body gap-0.5">
                  <h1 className="card-title text-black">{event.title}</h1>
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
                    <div className="flex">
                      <MdOutlineCalendarToday className="mt-1 mr-1" />
                      <span>{event.date.split("T")[0]}</span>
                    </div>
                    <div className="flex">
                      <MdAccessTime className="mt-1 mr-1" />
                      <span>{event.date.split("T")[1]}</span>
                    </div>
                  </div>
                  <div className="card-actions xl:absolute justify-end bottom-8 right-4">
                    <Link href={"/wydarzenia/" + event.slug} passHref>
                      <button className="main-card-btn">więcej</button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Footer />
        </div>
        <Drawer />
      </div>
    </>
  );
};

export default Events;

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
