import React from "react";
const Events = ({ id, img_url, content }) => {
  console.log("events");
  return (
    <div className="flex flex-col" id={id}>
      <h3>Name</h3>
      <div className="event_pic">
        <img className="w-[400px]" src={img_url} alt="" />
      </div>

      <div className="event_info">
        <div className="event_detail">
          <h4>Date, Name</h4>
        </div>
        {/* <div className="about_event">
          <p>{content}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Events;
