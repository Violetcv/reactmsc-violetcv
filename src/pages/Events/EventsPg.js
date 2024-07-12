import React, { useState } from "react";
import Head from "./head/Head";
import Calender from "./calender/Calender";
import "./CSS/eventspg.css";
//import Events from './events/Events'
import EventCol from "./events/EventCol";
import Eventcol from "./assets/Eventcol";

const EventsPg = () => {
  const [eventid, seteventId] = useState(1);
  //console.log(eventid)
  return (
    <div className="flex mt-0 1000px:flex-col">
      <div className="w-[70%] m-10 1200px:w-[65%] 1000px:w-[93%] 850px:w-[90%] 550px:w-[85%] 450px:m-[30px]">
        <div className="header_Container">
          <Head />
        </div>
        <div className="mt-[50px]">
          <Calender eventid={seteventId} />
        </div>
        {/* <div className="events_container">
                <Events />
            </div> */}
      </div>
      <div className="bg-[#012147] w-[30%] text-white mt-4 mr-4 rounded-[10px] h-[80vh] 1200px:w-[35%] 1000px:w-[93%] 1000px:ml-[40px] 1000px:mr-[40px] 1000px:rounded-[5px] 850px:w-[90%] 550px:w-[85%] 450px:ml-[30px] 450px:mr-[30px] max-900:mt-0">
        {/* <EventCol eventId={eventid} seteventId={seteventId} /> */}
        <Eventcol eventId={eventid} seteventId={seteventId} />
      </div>
    </div>
  );
};

export default EventsPg;
