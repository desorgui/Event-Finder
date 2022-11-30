import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux/es/exports';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsCashCoin } from 'react-icons/bs';
import { FcHome } from 'react-icons/fc';
import LocationMap from './LocationMap';

const EventDetails = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.events.find((event) => JSON.stringify(event.id) === JSON.stringify(id))); //eslint-disable-line

  if (!event) {
    return (
      <>
        <Link to="/">
          <FcHome />
          {' '}
          Home
        </Link>
        <section className="not-found">
          <h2>Event not found!</h2>
        </section>
      </>
    );
  }

  return (
    <div className="singleEvent-details">
      <header className="details-Banner">

        <h2 className="home-link">
          <Link to="/">
            <FcHome />
            {' '}
            Home
            {' '}
          </Link>
          &#62; Details
        </h2>
        <div className="details-title"><h1>{event.name}</h1></div>
      </header>
      <div className="details-content">
        <div className="left-side">
          <img src={`${event.image}`} alt={`${event.name}`} />
        </div>
        <div className="right-side">
          <h3>Event Details</h3>
          <div className="event-info">
            <span className="event-info-detail">
              <span className="detail-icon">
                <AiOutlineCalendar />
              </span>
              <span>
                <h5>Event date</h5>
                {event.localDate}
                ,
                {event.localTime}
              </span>
            </span>
            <span className="event-info-detail">
              <span className="detail-icon">
                <BiCategoryAlt />
              </span>
              <span>
                <h5>Event Category</h5>
                {event.classification}
              </span>
            </span>
            <span className="event-info-detail">
              <span className="detail-icon">
                <BiCategoryAlt />
              </span>
              <span>
                <h5>Venue</h5>
                {event.venue[0].name}
              </span>
            </span>
            <span className="event-info-detail">
              <span className="detail-icon">
                <BiCategoryAlt />
              </span>
              <span>
                <h5>Event Location</h5>
                {event.venue[0].state.name}
                ,
                {event.venue[0].city.name}
              </span>
            </span>
            <span className="event-info-detail">
              <span className="detail-icon">
                <BiCategoryAlt />
              </span>
              <span>
                <h5>Event Address</h5>
                {event.venue[0].address.line1}
              </span>
            </span>
            <span className="event-info-detail">
              <span className="detail-icon">
                <BsCashCoin />
              </span>
              <span>
                <h5>Event Price</h5>
                {event.priceRanges !== 'undefined' ? (
                  <span>
                    {' '}
                    $
                    {event.priceRanges[0].min}
                    {' '}
                    - $
                    {event.priceRanges[0].max}
                  </span>
                ) : <span>Free</span>}
              </span>
            </span>

          </div>
        </div>
      </div>
      <LocationMap {...event.location} /> {/* eslint-disable-line */}
    </div>
  );
};
export default EventDetails;
