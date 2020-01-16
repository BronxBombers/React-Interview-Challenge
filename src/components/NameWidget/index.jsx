import React from 'react';
import PropTypes from 'prop-types';


const NameWidget = ({ name }) => {
  return (
    <div className="name-container">
      {name}
    </div>
  );
};

NameWidget.propTypes = { name: PropTypes.string.isRequired };

export default NameWidget;
