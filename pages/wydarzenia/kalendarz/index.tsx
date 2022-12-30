import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../../../components/Navbar";
import { Drawer } from "../../../components/Drawer";
import { Footer } from "../../../components/Footer";
import apolloClient from "../../../lib/apollo";
import {
  GetFeaturedArtistPosts,
  GetAllEventsCalendar,
} from "../../../utils/queries";
import { EventCalendar } from "../../../components/EventCalendar";

const Calendar: NextPage = ({ events }: any) => {
  return (
    <>
      <Head>
        <title>Gizmo Management</title>
      </Head>
      <main>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <label htmlFor="my-drawer-3" />
          <div className="flex flex-col drawer-content relative overflow-hidden">
            <Navbar />
            <EventCalendar events={events} />
            <Footer />
          </div>
          <Drawer />
        </div>
      </main>
    </>
  );
};

export default Calendar;

export async function getStaticProps() {
  const { data: calendarEvents }: any = await apolloClient.query({
    query: GetAllEventsCalendar,
  });

  const events = calendarEvents.events.nodes;

  return {
    props: { events },
    revalidate: 86400,
  };
}
