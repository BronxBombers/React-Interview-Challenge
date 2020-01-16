import React from 'react';
import PropTypes from 'prop-types';
import myLocation from '../../assets/point.svg';

const AddressWidget = ({ address }) => {
  return (
    <div className="address-container">
      <img className="sign" src={myLocation} alt="location" />
      {address.street}
    </div>
  );
};

AddressWidget.propTypes = { address: PropTypes.shape({ street: PropTypes.string.isRequired }).isRequired };

export default AddressWidget;
