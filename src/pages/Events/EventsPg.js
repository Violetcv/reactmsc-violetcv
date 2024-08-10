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
      <div className="w-[70%] m-10 450px:m-[30px] 550px:w-[85%] 850px:w-[90%] 1000px:w-[93%] 1200px:w-[65%]">
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
      <div className="bg-[#012147] w-[30%] text-white mt-4 mr-4 rounded-[10px] h-[80vh] 450px:ml-8 550px:w-[85%] 550px:ml-[40px] 650px:w-[95vh] 650px:ml-[40px] 750px:w-[103vh] 750px:ml-[40px] 850px:ml-[10px] 850px:w-[500vh] 1000px:w-[150vh] 1000px:ml-[70px] 1000px:rounded-[5px] 1200px:w-[35%] ">
        {/* <EventCol eventId={eventid} seteventId={seteventId} /> */}
        <Eventcol eventId={eventid} seteventId={seteventId} />
      </div>
    </div>
  );
};

export default EventsPg;
