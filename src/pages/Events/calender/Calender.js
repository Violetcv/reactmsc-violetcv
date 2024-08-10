import React, { useState } from "react";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../CSS/calender.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    id: 1,
    title: "Insider Series 1",
    allDay: true,
    start: new Date(2023, 5, 20),
    end: new Date(2023, 5, 20),
  },
  {
    id: 2,
    title: "Insider Series 2",
    start: new Date(2023, 6, 23),
    end: new Date(2023, 6, 23),
  },
  {
    id: 3,
    title: "Bootcamp Start",
    start: new Date(2023, 5, 5),
    end: new Date(2023, 5, 5),
  },
  {
    id: 4,
    title: "Insider 3",
    start: new Date(2023, 7, 18),
    end: new Date(2023, 7, 18),
  },
];

const Calender = ({ eventid }) => {
  const [allEvents, setAllEvents] = useState(events);

  const handleEventClick = (event) => {
    const eventId = event.id;
    eventid(eventId);
  };

  return (
    <div className="mx-12 h-custom-400 bg-[#012147] text-white text-center rounded-md p-8 -mt-12 450px:mx-0 450px:mt-[-18vh] 450px:w-[100%] 550px:mx-0 550px:mt-[-18vh] 550px:w-[100%] 650px:mx-0 650px:mt-[-18vh] 650px:w-[95vh] 750px:mx-0 750px:mt-[-18vh] 750px:w-[103vh] 850px:mx-4 850px:mt-[-18vh] 850:w-[120vh] max-900:mx-0 max-900:mt-[-5vh] max-900:w-[130vh] 1000px:mx-8 1000px:mt-[-5vh] 1000px:w-[140vh]">
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleEventClick}
      />
    </div>
  );
};

export default Calender;
