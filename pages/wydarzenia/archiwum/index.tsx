import type { NextPage } from "next";
import apolloClient from "../../../lib/apollo";
import Head from "next/head";
import { Navbar } from "../../../components/Navbar";
import { Drawer } from "../../../components/Drawer";
import { Footer } from "../../../components/Footer";
import { GetEventsForArchive } from "../../../utils/queries";
import Link from "next/link";
import {
  MdLocationPin,
  MdAccessTime,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import _ from "lodash";
import { formatDate, getCurrentDate } from "../../../utils/misc";

const EventsArchive: NextPage = ({ events }: any) => {
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
            {events.map((event: any) => (
              <div key={event.id} className="event-listing-card">
                <div className="card-body">
                  <Link href={"/wydarzenia/" + event.slug} passHref>
                    <a>
                      <h1 className="card-title text-black hover:text-rose-600 transition ease-linear">
                        {event.title}
                      </h1>
                    </a>
                  </Link>
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

export default EventsArchive;

export async function getStaticProps() {
  const dateArray = getCurrentDate();

  const { data }: any = await apolloClient.query({
    query: GetEventsForArchive,
    variables: {
      year: dateArray[0],
      month: dateArray[1],
      day: dateArray[2],
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
