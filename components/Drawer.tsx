import Link from "next/link";
import { buttonItems } from "../utils/structures";

export const Drawer = () => (
  <>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-black">
        {buttonItems.map((item) => (
          <li key={item.label} className="py-2 pr-2">
            <Link href={item.href} passHref>
              <button className="relative p-3 group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 group-hover:bg-rose-600 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0" />
                <span className="absolute inset-0 w-full h-full bg-black border-2 border-white group-hover:bg-black group-hover:border-rose-600" />
                <span className="relative text-white text-xl uppercase group-hover:text-rose-600">
                  {item.label}
                </span>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);
