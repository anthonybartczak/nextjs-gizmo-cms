import Link from "next/link";

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
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav
        id="navbar"
        className="navbar bg-black justify-center sticky top-0 z-50"
      >
        <div className="flex-none lg:hidden">
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
              <li className="" key={item.label}>
                <Link href={item.href} passHref>
                  <button className="full-nav-btn">{item.label}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
