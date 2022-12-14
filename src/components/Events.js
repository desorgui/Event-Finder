import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Event from './Event';
import Banner from './Banner';

function Events() {
  const events = useSelector((state) => state.events);

  const [eventsFiltered, setEventsFiltered] = useState({});
  const [eventClassification, setEventClassification] = useState({});

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
    setEventClassification(classificationOptions);
  };

  useEffect(() => {
    setEventsFiltered(events);
    classificationSelector();
  }, [events]);

  return (
    <>
      <Banner prop={eventClassification} filterEvents={filterEvents} />
      <h1 className="section-title">
        Upcoming
        <span className="span"> Events</span>
      </h1>
      <div className="events_container">
        {Object.keys(eventsFiltered).map((event) => {
          const singleEvent = eventsFiltered[event];
          return (
            <Link to={singleEvent.id} key={singleEvent.id}>
              <Event {...singleEvent} /> {/* eslint-disable-line*/}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Events;
