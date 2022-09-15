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
import SocialLinks from "../../../components/SocialLinks";
import { MdPerson, MdEmail, MdLocalPhone } from "react-icons/md";

const EventPage = ({ event }: any) => (
  <>
    <Head>
      <title>{event.title}</title>
    </Head>
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
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
            <div className="divider before:bg-rose-600 after:bg-rose-600 my-2 h-3"></div>
            <figure className="drop-shadow-xl">
              <Image
                alt=""
                width={1280}
                height={720}
                src={event.featuredImage.node.mediaItemUrl}
                className=""
              />
            </figure>
            <div className="flex flex-col mt-4 text-gray-800">
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
  console.log(data);
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
  console.log(event);
  return {
    props: { event },
    revalidate: 30,
  };
}