import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

const Banner = (props) => {
  const { prop, filterEvents } = props;
  return (
    <div className="banner">
      <Filter filterProp={prop} filterEvents={filterEvents} />
    </div>
  );
};

Banner.propTypes = {
  prop: PropTypes.string.isRequired,
  filterEvents: PropTypes.func.isRequired,
};

export default Banner;
