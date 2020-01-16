import React from 'react';
import PropTypes from 'prop-types';


const CityWidget = ({ address }) => {
  return (
    <div className="city-container">
      {`Urgent Care | ${address.city}`}
    </div>
  );
};

CityWidget.propTypes = { 
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityWidget;
