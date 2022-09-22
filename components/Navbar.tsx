import Link from "next/link";
import Image from "next/image";
import { buttonItems } from "../utils/structures";

export const Navbar = () => {
  return (
    <>
      <nav
        id="navbar"
        className="navbar bg-black sticky top-0 z-50 justify-center"
      >
        <Link href="/" passHref>
          <a className="mr-auto ml-1">
            <Image
              alt="Navbar logo"
              width={99}
              height={33}
              src="/navbar-logo.webp"
            />
          </a>
        </Link>
        <div className="flex-none lg:hidden ">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            {buttonItems.map((item) => (
              <Link href={item.href} passHref key={item.label}>
                <a>
                  <li className="">
                    <button className="full-nav-btn">{item.label}</button>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
