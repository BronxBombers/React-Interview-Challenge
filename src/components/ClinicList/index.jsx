/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from '../RatingWidget';
import ClosingTimeWidget from '../ClosingTimeWidget';
import AddressWidget from '../AddressWidget';
import CityWidget from '../CityWidget';
import NavWidget from '../NavWidget';
import NameWidget from '../NameWidget';

const ClinicList = ({ clinics }) => {
  const sortedByDistance = arr => {
    // eslint-disable-next-line no-magic-numbers
    arr.sort((left, right) => (left.distance > right.distance ? 1 : -1));
  };

  sortedByDistance(clinics);

  const clinicList = clinics.map(item => (
    <div className="clinic-block" key={item.name}>
      <div className="clinic-picture">
        <img src={item.image} className="clinic-photo" alt="clinicPhoto" />
      </div>
      <div className="clinic-details">
        <div className="clinic-details-list">
          <NameWidget name={item.name} />
          <CityWidget address={item.address} />
          <RatingWidget rating={item.rating} />
          <AddressWidget address={item.address} />
          <ClosingTimeWidget closeTime={item.closeTime} />
        </div>
        <NavWidget distance={item.distance} />
      </div>
    </div>
  ));


  return <div className="clinic-list">{clinicList}</div>;
};

ClinicList.propTypes = {
  clinics: PropTypes.arrayOf(PropTypes.shape({
    closeTime: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default ClinicList;
