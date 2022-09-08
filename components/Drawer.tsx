import Link from "next/link";
import { buttonItems } from "../utils/structures";

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
