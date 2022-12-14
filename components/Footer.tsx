import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import { footerItems } from "../utils/structures";

export const Footer = () => (
  <>
    <footer className="footer footer-center pt-16 pb-8 bg-gray-100 rounded text-gray-600">
      <div className="grid grid-flow-col gap-4">
        {footerItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <a className="link link-hover">{item.label}</a>
          </Link>
        ))}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/agencjagizmo/"
            aria-label="Instagram page link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/agencjagizmo"
            aria-label="Facebook page link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex">
        <p>Built by</p>
        <a href="https://www.anteriam.live/">Anteriam</a>
      </div>
    </footer>
  </>
);
