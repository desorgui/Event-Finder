import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const { filterProp, filterEvents } = props;
  return (
    <div className="filter">
      <button type="button" className="filterBtn" value="all" onClick={filterEvents}>All</button>
      {Object.keys(filterProp).map((classification) => (
        <button type="button" className="filterBtn" value={classification} key={classification} onClick={filterEvents}>{classification}</button>
      ))}
    </div>
  );
};

Filter.propTypes = {
  filterProp: PropTypes.string.isRequired,
  filterEvents: PropTypes.func.isRequired,
};

export default Filter;
