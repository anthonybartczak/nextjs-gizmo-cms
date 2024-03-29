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
import { IoCalendarNumberSharp, IoArchiveSharp } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi";
import _ from "lodash";
import { formatDate, getCurrentDate } from "../../utils/misc";

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
          <div className="pt-6">
            <div className="flex flex-row mb-8 mx-2 xl:mx-48 2xl:mx-96 gap-2 justify-center md:justify-start">
              <Link href="/wydarzenia/kalendarz/" passHref>
                <a>
                  <div className="event-listing-buttons">
                    <div className="flex flex-row flex-wrap">
                      <h1 className="text-xl">Kalendarz</h1>
                      <IoCalendarNumberSharp className="text-2xl mt ml-2" />
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/wydarzenia/archiwum/" passHref>
                <a>
                  <div className="event-listing-buttons">
                    <div className="flex flex-row flex-wrap">
                      <h1 className="text-xl">Archiwum</h1>
                      <IoArchiveSharp className="text-2xl mt ml-2" />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
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
                  <div className="divider before:bg-rose-600 after:bg-rose-600 h-1 !my-1"></div>
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
  const dateArray = getCurrentDate();

  const { data }: any = await apolloClient.query({
    query: GetAllEvents,
    variables: {
      amount: 40,
      year: dateArray[0],
      month: dateArray[1],
      day: dateArray[2] - 1,
    },
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
