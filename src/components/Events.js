import React from "react";
import { useSelector } from "react-redux";
import Event from "./Event";

const Events = () => {
    const events = useSelector((state) => state.events);
    return (
      <div className="events_container">
        {events && events.map((event) => {
          return (
          <Event {...event} />)
        })
        }
      </div>
    );
  };
  export default Events;
  