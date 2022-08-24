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
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {buttonItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} passHref>
                <a className="uppercase">{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);
