import Link from "next/link";
import Image from "next/image";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const buttonText = {
  today: "Teraz",
  month: "Miesiąc",
  week: "Tydzień",
  day: "Dzień",
  list: "Lista",
};

const slotLabelFormat = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  omitZeroMinute: false,
};

export const EventCalendar = ({ events }: any) => {
  const calendar = events.map(({ startDate, ...e }: any) => ({
    ...e,
    date: startDate,
  }));

  return (
    <>
      <div className="mt-4">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locale="pl"
          events={calendar}
          buttonText={buttonText}
          eventDisplay="auto"
          //@ts-ignore
          eventTimeFormat={slotLabelFormat}
          firstDay={1}
        />
      </div>
    </>
  );
};
