import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
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

export const Footer = () => (
  <>
    <footer className="footer footer-center pt-28 pb-8 bg-gray-100 rounded text-gray-600">
      <div className="grid grid-flow-col gap-4">
        {buttonItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <a className="link link-hover">{item.label}</a>
          </Link>
        ))}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/agencjagizmo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/agencjagizmo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex">
        <p>Copyright © 2022 - </p>
        <a href="https://www.anteriam.live/">Anteriam</a>
      </div>
    </footer>
  </>
);
