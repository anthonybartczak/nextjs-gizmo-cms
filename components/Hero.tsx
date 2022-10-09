import Link from "next/link";
import Image from "next/image";

export const Hero = () => (
  <div className="hero grid xl:grid-cols-2 pb-8 relative">
    <Image
      alt="Hero background image"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      src="https://res.cloudinary.com/dkcnvrvbi/image/upload/v1665301274/hero-background_owmmuf.webp"
      priority
    />
    <div className="text-justify hero-content px-4 xl:col-start-2 grid xl:px-16 py-10 md:py-20 2xl:py-40 xl:bg-transparent bg-black bg-opacity-50">
      <div className="">
        <h1 className="text-gray-100 text-5xl font-extrabold">
          Management zrobiony
        </h1>
        <h1 className="text-5xl font-bold text-rose-600">dobrze.</h1>
        <p className="text-gray-200 py-5 max-w-2xl">
          Fusce sed lacus ut dolor consequat euismod. Quisque non eros mollis,
          condimentum purus vitae, bibendum quam. In urna leo, facilisis quis
          ipsum quis, finibus viverra massa. Maecenas mi neque, bibendum non
          metus fringilla, cursus tincidunt sem. Pellentesque imperdiet enim
          quis lacus varius, sit amet cursus purus ullamcorper.
        </p>
        <div className="flex">
          <Link href="/kontakt" passHref>
            <button className="relative p-3 group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 group-hover:bg-rose-600 bg-gray-100 group-hover:-translate-x-0 group-hover:-translate-y-0" />
              <span className="absolute inset-0 w-full h-full bg-black border-2 border-gray-100 group-hover:bg-black group-hover:border-rose-600" />
              <span className="relative text-gray-100 text-xl uppercase ">
                Skontaktuj się z nami!
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
