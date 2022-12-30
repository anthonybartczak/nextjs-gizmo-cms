import apolloClient from "../../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths } from "next";
import { Navbar } from "../../../components/Navbar";
import { Drawer } from "../../../components/Drawer";
import { Footer } from "../../../components/Footer";
import { sanitize } from "../../../utils/misc";
import { GetAllEventSlugs, GetEventBySlug } from "../../../utils/queries";
import styles from "../../post-styles/posts-body.module.css";
import {
  MdPerson,
  MdEmail,
  MdLocalPhone,
  MdLocationPin,
  MdAccessTime,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import { formatDate } from "../../../utils/misc";
import Link from "next/link";

const EventPage = ({ event }: any) => (
  <>
    <Head>
      <title>{event.seo.title}</title>
      <meta name="description" content={event.seo.metaDesc}></meta>
      <meta property="og:title" content={event.seo.opengraphTitle} />
      <meta
        property="og:description"
        content={event.seo.opengraphDescription}
      />
      <meta property="og:type" content={event.seo.opengraphType} />
      <meta property="og:url" content={event.seo.opengraphUrl} />
      <meta property="og:site_name" content={event.seo.opengraphSiteName} />
      <meta
        property="og:image"
        content={event.seo.opengraphImage.mediaItemUrl}
      />
    </Head>
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer-3" />
      <div className="flex flex-col drawer-content">
        <article>
          <Navbar />
          <div className="flex flex-col max-w-2xl mx-4 xl:mx-auto mt-5">
            <header>
              <h1
                className="text-5xl text-black"
                dangerouslySetInnerHTML={{
                  __html: sanitize(event.title ?? {}),
                }}
              />
            </header>
            <div className="mt-2 grid grid-cols-1 grid-rows-2 text-gray-800">
              <div className="flex">
                <MdLocationPin className="mt-1 mr-1" />
                <span>{event.venue.address + ", " + event.venue.city}</span>
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
                  <Link href={event.ticketURL} passHref>
                    <a>Kup bilety</a>
                  </Link>
                </div>
              ) : null}
            </div>
            <div className="divider before:bg-rose-600 after:bg-rose-600 my-2 h-3"></div>
            <figure className="drop-shadow-xl">
              <Image
                alt=""
                width={1280}
                height={720}
                src={event.featuredImage.node.mediaItemUrl}
                className=""
                priority
              />
            </figure>
            <div className="flex justify-start gap-4 md:flex-row flex-col">
              <div className="text-gray-800 mt-4">
                <span>{event.contactFunction}:</span>
                <div className="flex">
                  <MdPerson className="mt-1 mr-1" />
                  <span>{event.contactName}</span>
                </div>
                <div className="flex">
                  <MdEmail className="mt-1 mr-1" />
                  <span>{event.contactEmail}</span>
                </div>
                <div className="flex">
                  <MdLocalPhone className="mt-1 mr-1" />
                  <span>{event.contactPhone}</span>
                </div>
              </div>
            </div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: sanitize(event.content ?? {}),
              }}
            />
          </div>
        </article>
        <Footer />
      </div>
      <Drawer />
    </div>
  </>
);

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: any = await apolloClient.query({
    query: GetAllEventSlugs,
  });

  return {
    paths: data.events.nodes.map(({ slug }: any) => ({
      params: { slug: slug.split("/") },
    })),
    fallback: false,
  };
};

export async function getStaticProps(context: { params: { slug: any[] } }) {
  const { data }: any = await apolloClient.query({
    query: GetEventBySlug,
    variables: { slug: context.params.slug.join(" / ") },
  });

  const event = data.event;

  return {
    props: { event },
    revalidate: 86400,
  };
}
