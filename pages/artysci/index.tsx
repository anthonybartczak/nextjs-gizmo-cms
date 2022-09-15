import type { NextPage } from "next";
import apolloClient from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Drawer } from "../../components/Drawer";
import { Footer } from "../../components/Footer";
import { sanitize } from "../../utils/misc";
import { GetPostListingByCategory } from "../../utils/queries";
import Link from "next/link";

const Artists: NextPage = ({ posts }: any) => {
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
              <li key={post.id} className="artist-listing-card">
                <figure>
                  <Image
                    alt=""
                    layout="fixed"
                    width={450}
                    height={253}
                    src={post.featuredImage.node.mediaItemUrl}
                    className="shadow-xl object-cover"
                  />
                </figure>
                <div className="card-body gap-0.5">
                  <h2 className="card-title text-black">{post.title}</h2>
                  <div className="divider before:bg-rose-600 after:bg-rose-600 my-0.5 h-3"></div>
                  <div
                    className="text-gray-600"
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

export default Artists;

export async function getStaticProps() {
  const { data }: any = await apolloClient.query({
    query: GetPostListingByCategory,
    variables: { categoryName: "Artyści" },
  });

  const posts = data.posts.nodes;

  return {
    props: { posts },
    revalidate: 30,
  };
}
