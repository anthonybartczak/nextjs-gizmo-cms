import Link from "next/link";
import Image from "next/image";

export const Hero = () => (
  <div className="hero bg-gray-100">
    <div className="hero-content flex-col lg:flex-row">
      <Image
        alt=""
        layout="intrinsic"
        width={520}
        height={500}
        src="/hero-picture.webp"
        className="rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">Management zrobiony </h1>
        <h1 className="text-5xl font-bold text-rose-600">dobrze.</h1>
        <p className="py-5 max-w-2xl">
          Fusce sed lacus ut dolor consequat euismod. Quisque non eros mollis,
          condimentum purus vitae, bibendum quam. In urna leo, facilisis quis
          ipsum quis, finibus viverra massa. Maecenas mi neque, bibendum non
          metus fringilla, cursus tincidunt sem. Pellentesque imperdiet enim
          quis lacus varius, sit amet cursus purus ullamcorper. Duis eleifend
          diam ut bibendum fringilla. Aliquam ac blandit sem. Nullam nisl massa,
          interdum at sollicitudin at, vestibulum at odio.
        </p>
        <div className="">
          <Link href="/kontakt" passHref>
            <button className="main-contact-btn">KONTAKT</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
