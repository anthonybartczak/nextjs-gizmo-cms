import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-48 text-center lg:text-left items-center bg-gray-100 text-gray-600">
        <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid content-center grid-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="mx-auto">
                    <h6 className="
            uppercase
            font-semibold
            mb-4
            mt-10
            xl:mt-2
            flex
            items-center
            justify-center
            md:justify-start
          ">
                        Wrocław-Serwis 4x4 Sp. z o.o.
                    </h6>
                    <p className="mb-1 font-light">NIP: 894-295-89-31</p>
                    <p className="mb-1 font-light">KRS: 0000315866</p>
                    <p className="mb-1 font-light">REGON: 020833641</p>
                </div>
                <div className="mx-auto lg:mx-auto mt-10 xl:mt-2">
                    <h6 className="uppercase font-semibold mb-4 flex md:justify-start items-center justify-center">
                        Godziny otwarcia
                    </h6>
                    <h6 className="font-light mb-1 underline">Warsztat</h6>
                    <ul className="mb-4">
                        <li className="flex columns gap-4 font-light">
                            <span className="min-w-24">Pon. - Pt.</span>
                            <span>7:00 - 18:00</span>
                        </li>
                        <li className="flex columns gap-4 font-light">
                            <span className="min-w-24">Sobota</span>
                            <span>8:00 - 15:00</span>
                        </li>
                    </ul>
                    <h6 className="font-light mb-1 underline">Stacja kontroli pojazdów</h6>
                    <ul className="">
                        <li className="flex columns gap-4 font-light">
                            <span className="min-w-24">Pon. - Pt.</span>
                            <span>7:00 - 20:00</span>
                        </li>
                        <li className="flex columns gap-4 font-light">
                            <span className="min-w-24">Sobota</span>
                            <span>8:00 - 15:00</span>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto mt-10 xl:mt-2">
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                        Kontakt
                    </h6>
                    <p className="flex items-center justify-center md:justify-start mb-2 font-light">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                            className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                            </path>
                        </svg>
                        Armii Krajowej 55A, Wrocław 53-041
                    </p>
                    <p className="flex items-center justify-center md:justify-start mb-2 font-light">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                            className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                            </path>
                        </svg>
                        biuro@cum-wroclaw.pl
                    </p>
                    <p className="flex items-center justify-center md:justify-start mb-2 font-light">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                            className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                            </path>
                        </svg>
                        +48 509 96 94 91
                    </p>
                </div>
                <div className="mx-auto justify-center xl:justify-start mt-10 xl:mt-2">
                    <Link href="/contact">
                        <a className="p-1 text-md font-medium text-white transition bg-gray-400 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring">
                            Skontaktuj się z nami!
                        </a>
                    </Link>
                    <a href="https://www.facebook.com/Wroc%C5%82aw-Serwis-4x4-228347537335333/" className="flex items-center justify-center md:justify-start font-light mt-4 mb-2">
                        <AiFillFacebook className="w-4 h-4 mr-3"/>
                        Wrocław Serwis 4x4
                    </a>
                </div>
            </div>
        </div>
        <div className="text-center p-6 bg-gray-200">
            <span>© 2022 Copyright: </span>
            <a className="text-gray-600" href="https://www.anteriam.live/">Anteriam</a>
        </div>
    </footer>
  )
}