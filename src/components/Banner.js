import React from "react";
import Filter from "./Filter";

const Banner = (props) => {
     
    return (
      <div className="banner">
        <Filter filterProp={props.props} filterEvents={props.filterEvents}/>
      </div>
    );
  };
  export default Banner;
  