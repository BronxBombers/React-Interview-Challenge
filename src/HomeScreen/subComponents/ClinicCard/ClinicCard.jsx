import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as solidStar,
  faLocationArrow,
  faMapMarkerAlt,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/fontawesome-free-regular';
import Rating from 'react-rating';

import './styles/ClinicCard.styles.css';

function ClinicCard(props) {
  const { image, address, closeTime, distance, name, rating } = props;
  const { city, street } = address;
  const closeTimeNums = closeTime.toString().split('');


  return (
    <div className='card'>
      <div className='card-left-section'>
        <img
          src={image}
          className='card-left-section__image'
          alt='Not published yet'
        />
      </div>
      <div className='card-right-section'>
        <div className='distance card-right-section__distance'>
          <FontAwesomeIcon icon={faLocationArrow} color={'#FFC000'} />
          <div className='distance__miles'>{`${distance} ml`}</div>
        </div>
        <div className='card-right-section__name'>{name}</div>
        <div className='card-right-section__city'>{`Urgent Care | ${city}`}</div>
        <div className='rating card-right-section__rating'>
          <div className='rating__stars'>
            <Rating
              emptySymbol={<FontAwesomeIcon icon={regularStar} color={'#FF9234'} />}
              fullSymbol={<FontAwesomeIcon icon={solidStar} color={'#FF9234'} />}
              initialRating={rating}
              readonly
            />
          </div>
          <div className='rating__number'>{rating}</div>
        </div>
        <div className='card-street'>
          <FontAwesomeIcon
            className='card-street__icon'
            icon={faMapMarkerAlt}
            color={'#15A20C'}
          />
          <span className='card-street__text'>{street}</span>
        </div>
        <div className='working-till'>
          <FontAwesomeIcon
            className='working-till__icon'
            icon={faClock}
            color={'#15A20C'}
          />
          <div className='working-till__placeholder'>Open until:</div>
          <div className='working-till__hours'>
            {`${closeTimeNums[0]}${closeTimeNums[1]}:${closeTimeNums[2]}${closeTimeNums[3]}`}
          </div>
        </div>
      </div>
    </div>
  );
}

ClinicCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
  closeTime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default React.memo(ClinicCard);