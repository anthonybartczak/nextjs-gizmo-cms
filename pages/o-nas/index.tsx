import type { NextPage } from "next";
import apolloClient from "../../lib/apollo";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Drawer } from "../../components/Drawer";
import { Footer } from "../../components/Footer";
import { sanitize } from "../../utils/misc";
import { GetPostListingByCategory } from "../../utils/queries";
import { MdLocationCity, MdLocationPin } from "react-icons/md";
import Link from "next/link";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gizmo Management</title>
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar />
          <div className="flex pt-4">
            <div className="divider before:bg-rose-600 after:bg-rose-600 text-black font-bold w-full my-0.5 h-3 text-xl md:text-4xl">
              Nasz zespół
            </div>
          </div>
          <Footer />
        </div>
        <Drawer />
      </div>
    </>
  );
};

export default AboutUs;
