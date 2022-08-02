import React from "react";
import { useSelector } from "react-redux";

const Filter = () => {
    const newArray = [];
    let unique = []
    const events = useSelector((state) => state.events);
    events.map((event) => {
        newArray.push(event.classification);
        unique = [... new Set(newArray)]
    })
    return (
      <div className="events_container">
        {unique.map((item) => {
                return (
                    <button className="filterBtn" key={item}>{item}</button>
                  )
            })}
      </div>
    );
  };
  export default Filter;
  