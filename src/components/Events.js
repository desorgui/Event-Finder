import React, { useEffect, useState }  from "react";
import { useSelector } from "react-redux";
import Event from "./Event";
import Banner from "./Banner";

const Events = () => {
    const events = useSelector((state) => state.events);

  const [eventsFiltered, setEventsFiltered] = useState({});
  const [eventClassification, setGameClassification] = useState({});

  let classificationOptions = {};

  const filterEvents = (event) => {
    if (event.target.value !== 'all') {
      Object.keys(events).forEach((element) => {
        if (events[element].classification === event.target.value) {
          classificationOptions[element] = events[element];
        }
      });
      setEventsFiltered(classificationOptions);
    } else {
      setEventsFiltered(events);
    }
  };

  const classificationSelector = () => {
    classificationOptions = {};

    Object.keys(events).forEach((element) => {
      const tempData = events[element].classification;

      if (!classificationOptions[tempData]) {
        classificationOptions[tempData] = true;
      }
    });
    setGameClassification(classificationOptions);
  };

  useEffect(() => {
    setEventsFiltered(events);
    classificationSelector();
  }, [events]);


    return (
      <>     
      <Banner props={eventClassification} filterEvents={filterEvents} />
      <div className="events_container">
        {Object.keys(eventsFiltered).map((event) => {
          const singleEvent = eventsFiltered[event];
          return (
          <Event {...singleEvent} />)
        })
        }
      </div>
      </>
    );
  };
  export default Events;
  