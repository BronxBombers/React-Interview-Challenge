import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const NavWidget = ({ distance }) => {
  return (
    <div className="nav-container clinic-details-distance">
      <FontAwesomeIcon
        icon={faLocationArrow}
        style={{ color: '#ffc000', marginRight: '5px' }}
      />
      {`${distance} mi`}
    </div>

  );
};

NavWidget.propTypes = { distance: PropTypes.number.isRequired };

export default NavWidget;
