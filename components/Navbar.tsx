import Link from "next/link";
import Image from "next/image";

const buttonItems = [
  {
    label: "O nas",
    href: "/o-nas",
  },
  {
    label: "Artyści",
    href: "/artysci",
  },
  {
    label: "Lokale",
    href: "/lokale",
  },
  {
    label: "Wydarzenia",
    href: "/wydarzenia",
  },
];

export const Navbar = () => (
  <>
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
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
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <li>
            <a>Navbar Item 1</a>
          </li>
          <li>
            <a>Navbar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  </>
);
