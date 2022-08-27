import Link from "next/link";
import Image from "next/image";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

export const Hero = () => (
  <div className="hero bg-gray-100 pt-8">
    <div className="hero-content flex-col lg:flex-row items-justify-center">
      <Image
        alt=""
        layout="intrinsic"
        width={520}
        height={500}
        src="/hero-picture.webp"
        className="rounded-lg shadow-2xl"
      />
      <div className="">
        <h1 className="text-black text-5xl font-bold">Management zrobiony </h1>
        <h1 className="text-5xl font-bold text-rose-600">dobrze.</h1>
        <p className="text-black py-5 max-w-2xl">
          Fusce sed lacus ut dolor consequat euismod. Quisque non eros mollis,
          condimentum purus vitae, bibendum quam. In urna leo, facilisis quis
          ipsum quis, finibus viverra massa. Maecenas mi neque, bibendum non
          metus fringilla, cursus tincidunt sem. Pellentesque imperdiet enim
          quis lacus varius, sit amet cursus purus ullamcorper. Duis eleifend
          diam ut bibendum fringilla. Aliquam ac blandit sem. Nullam nisl massa,
          interdum at sollicitudin at, vestibulum at odio.
        </p>
        <div className="flex">
          <Link href="/kontakt" passHref>
            <button className="main-contact-btn">kontakt</button>
          </Link>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.instagram.com/agencjagizmo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare
                target="_blank"
                className="w-10 h-10 hover:text-gray-600 text-gray-800 ease-linear transition-all duration-150"
              />
            </a>
            <a
              href="https://www.facebook.com/agencjagizmo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                target="_blank"
                className="w-10 h-10 hover:text-gray-600 text-gray-800 ease-linear transition-all duration-150"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
