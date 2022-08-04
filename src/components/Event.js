import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsCash } from "react-icons/bs";

const Event = ({id, name, image, classification, localDate, priceRanges}) => {
    return (
      <div className="singleEvent" key={id}>
				<div className="event-inner">
						<div className="event-event-style-3" data-event-id="143">
							<div className="event-image">
									<img src={`${image}`} alt={`${name}`} />
							</div>
							<div className="event-content"><div className="event-title">
									{name}
							</div>
							<div className="event-details">
								<div className="event-category">
											{classification}
								</div>
								<div className="event-date event-start-date">
									<span><AiOutlineCalendar /> {localDate}</span></div>
								</div>
								<div className="event-details">
									<div className="event-status">
										{priceRanges !== "undefined"? <span><BsCash /> ${priceRanges[0].min} - ${priceRanges[0].max}</span> : <span><BsCash /> Free</span>}
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
    );
  };
  export default Event;
  

	