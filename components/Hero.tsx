import Link from "next/link";
import Image from "next/image";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

export const Hero = () => (
  <div className="hero grid xl:grid-cols-2 pb-8 relative">
    <Image
      alt="Hero background image"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      src="/hero-background.webp"
      priority
    />
    <div className="text-justify hero-content px-4 xl:col-start-2 grid xl:px-16 pt-10 2xl:py-12 xl:bg-transparent bg-black bg-opacity-50">
      <div className="">
        <h1 className="text-gray-100 text-5xl font-extrabold">
          Management zrobiony
        </h1>
        <h1 className="text-5xl font-extrabold text-rose-600">dobrze.</h1>
        <p className="text-gray-200 py-5 max-w-2xl">
          Fusce sed lacus ut dolor consequat euismod. Quisque non eros mollis,
          condimentum purus vitae, bibendum quam. In urna leo, facilisis quis
          ipsum quis, finibus viverra massa. Maecenas mi neque, bibendum non
          metus fringilla, cursus tincidunt sem. Pellentesque imperdiet enim
          quis lacus varius, sit amet cursus purus ullamcorper.
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
                className="w-10 h-10 hover:text-gray-300 text-gray-200 ease-linear transition-all duration-150"
              />
            </a>
            <a
              href="https://www.facebook.com/agencjagizmo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                target="_blank"
                className="w-10 h-10 hover:text-gray-300 text-gray-200 ease-linear transition-all duration-150"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
