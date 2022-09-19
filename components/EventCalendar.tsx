import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRouter } from "next/router";

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

const headerToolbar = {
  left: "prev,next",
  center: "title",
  right: "dayGridMonth,timeGridDay",
};

export function EventCalendar({ events }: any) {
  const calendar = events.map(({ startDate, slug, ...e }: any) => ({
    ...e,
    date: startDate,
    url: slug,
  }));

  return (
    <>
      <div className="mt-4 mx-1 xl:mx-4 text-gray-800">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          contentHeight={700}
          initialView="dayGridMonth"
          headerToolbar={headerToolbar}
          locale="pl"
          events={calendar}
          buttonText={buttonText}
          eventDisplay="auto"
          navLinks={true}
          //@ts-ignore
          eventTimeFormat={slotLabelFormat}
          firstDay={1}
        />
      </div>
    </>
  );
}
