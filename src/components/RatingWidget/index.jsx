import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

// eslint-disable-next-line
const stars = [1, 2, 3, 4, 5];

const RatingWidget = ({ rating }) => {
  return (
    <div className="rating-container">
      <div className="star-container">
        {
          stars.map(val => (
            <div className="star" key={val}>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: (rating >= val ? '#ff9234' : '#cccccc') }}
              />
            </div>
          ))
        }
      </div>
      <div className="rating-number">{rating.toFixed(1)}</div>
    </div>
  );
};

RatingWidget.propTypes = { rating: PropTypes.number.isRequired };

export default RatingWidget;
