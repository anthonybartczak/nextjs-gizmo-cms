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
  MdLocationPin,
  MdAccessTime,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import _ from "lodash";
import { formatDate } from "../../utils/misc";

const Events: NextPage = ({ events }: any) => {
  return (
    <>
      <Head>
        <title>Gizmo Management</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer-3" />
        <div className="flex flex-col drawer-content ">
          <Navbar />
          <div className="pt-4">
            <Link href="/wydarzenia/kalendarz/" passHref>
              <a>
                <div className="flex flex-row flex-wrap event-listing-card justify-center p-2 bg-gray-100 text-black hover:bg-rose-600 hover:text-gray-100 ease-linear transition-all duration-150">
                  <h1 className="text-xl uppercase">Kalendarz wydarzeń</h1>
                  <MdOutlineCalendarToday className="text-2xl mt ml-2" />
                </div>
              </a>
            </Link>
            {events.map((event: any) => (
              <div key={event.id} className="event-listing-card">
                <figure>
                  <Image
                    alt=""
                    layout="fixed"
                    width={450}
                    height={253}
                    src={event.featuredImage?.node.mediaItemUrl}
                    className="shadow-xl object-cover"
                    priority
                  />
                </figure>
                <div className="card-body">
                  <Link href={"/wydarzenia/" + event.slug} passHref>
                    <a>
                      <h1 className="card-title text-black">{event.title}</h1>
                    </a>
                  </Link>
                  <div className="divider before:bg-rose-600 after:bg-rose-600 h-1"></div>
                  <div className="text-gray-600">
                    <div className="flex">
                      <MdLocationPin className="mt-1 mr-1" />
                      <span>
                        {event.venue.address + ", " + event.venue.city}
                      </span>
                    </div>
                    <div className="flex">
                      <MdOutlineCalendarToday className="mt-1 mr-1" />
                      <span>{event.startDate.split(" ")[0]}</span>
                    </div>
                    <div className="flex">
                      <MdAccessTime className="mt-1 mr-1" />
                      <span>
                        {formatDate(event.startDate)[3] +
                          ":" +
                          formatDate(event.startDate)[4]}
                      </span>
                    </div>
                    {event.ticketURL ? (
                      <div className="flex hover:text-rose-600 transition ease-linear">
                        <HiOutlineTicket className="mt-1 mr-1" />
                        <a
                          href={event.ticketURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Kup bilety
                        </a>
                      </div>
                    ) : null}
                  </div>
                  <div className="card-actions xl:absolute justify-end bottom-8 right-4">
                    <Link href={"/wydarzenia/" + event.slug} passHref>
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

export default Events;

export async function getStaticProps() {
  const { data }: any = await apolloClient.query({
    query: GetAllEvents,
    variables: { amount: 20 },
  });

  const events = _.orderBy(
    data.events.nodes,
    [(obj) => new Date(obj.startDate)],
    ["asc"]
  );

  return {
    props: { events },
    revalidate: 7200,
  };
}
