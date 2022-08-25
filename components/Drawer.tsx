import Link from "next/link";
import Image from "next/image";

const buttonItems = [
  {
    label: "O nas",
    href: "/",
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

export const Drawer = () => (
  <>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100">
        {buttonItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} passHref>
              <a className="uppercase text-black">{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);
