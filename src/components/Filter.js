import React from "react";

const Filter = (props) => {

    return (
      <div className="filter">
        <button className="filterBtn" value="all" onClick={props.filterEvents}>All</button>
        {Object.keys(props.filterProp).map((classification) => (            
            <button className="filterBtn" value={classification} key={classification} onClick={props.filterEvents}>{classification}</button>
          ))}
      </div>
    );
  };
  export default Filter;
  