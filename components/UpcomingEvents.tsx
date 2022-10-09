import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../utils/misc";
import { MdLocationPin, MdAccessTime } from "react-icons/md";

export const UpcomingEvents = ({ events }: any) => (
  <>
    <div className="flex flex-col bg-gray-100">
      <div className="flex py-6 px-8">
        <div className="divider before:bg-rose-600 after:bg-rose-600 text-black font-bold w-full my-0.5 h-3 text-xl md:text-4xl">
          Nadchodzące wydarzenia
        </div>
      </div>
      <div className="grid grid-flow-row xl:grid-cols-3">
        {events.map((event: any) => (
          <div key={event.id} className="flex bg-gray-50 m-1 card shadow-xl">
            <div className="card-body gap-1">
              <span className="text-rose-600 text-8xl">
                {formatDate(event.startDate)[0]}
              </span>
              <span className="text-gray-800 text-xl">
                {formatDate(event.startDate)[1]}
              </span>
              <Link href={"/wydarzenia/" + event.slug} passHref>
                <a className="text-gray-800 text-xl font-thin mt-6">
                  {event.title}
                </a>
              </Link>
              <div className="flex">
                <MdAccessTime className="text-rose-600 mt-1 mr-1" />
                <span className="text-gray-500">
                  {formatDate(event.startDate)[3] +
                    ":" +
                    formatDate(event.startDate)[4]}
                </span>
              </div>
              <div className="flex">
                <MdLocationPin className="text-rose-600 mt-1 mr-1" />
                <span className="text-gray-500">
                  {event.venue.address + ", " + event.venue.city}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);
