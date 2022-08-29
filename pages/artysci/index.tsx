import type { NextPage } from "next";
import client from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Drawer } from "../../components/Drawer";
import { Footer } from "../../components/Footer";
import { sanitize } from "../../utils/misc";
import { GetArtistsListing } from "../../utils/queries";
import Link from "next/link";

const Artysci: NextPage = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Gizmo Management</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar />
          <ul className="xl:pt-6 2xl:pt-12">
            {posts.map((post: any) => (
              <li
                key={post.id}
                className="card lg:card-side bg-base-100 shadow-xl my-6 mx-2 xl:mx-48 2xl:mx-96"
              >
                <figure>
                  <Image
                    alt=""
                    layout="fixed"
                    width={400}
                    height={300}
                    src={post.featuredImage.node.mediaItemUrl}
                    className="rounded-lg shadow-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitize(post.excerpt ?? {}),
                    }}
                  />
                  <div className="card-actions xl:absolute justify-end bottom-8 right-4">
                    <Link href={"/artysci/" + post.slug} passHref>
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

export default Artysci;

export async function getStaticProps() {
  const { data }: any = await client.query({
    query: GetArtistsListing,
  });

  const posts = data.posts.nodes;

  return {
    props: { posts },
  };
}
