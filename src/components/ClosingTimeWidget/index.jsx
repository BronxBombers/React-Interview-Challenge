import React from 'react';
import PropTypes from 'prop-types';
import myClock from '../../assets/clock.svg';

const noon = 12;
const hoursBegin = 0;
const hoursLen = 2;
const minutesBegin = 2;

const ClosingTimeWidget = ({ closeTime }) => {
  const timeStr = closeTime.toString();
  const hours24 = parseInt(timeStr.substr(hoursBegin, hoursLen));
  const minutes = timeStr.substr(minutesBegin);

  const ampm = (hours24 >= noon) ? 'pm' : 'am';

  let hours12 = hours24;

  if (hours24 > noon) {
    hours12 = hours24 - noon;
  } else if (hours24 === 0) {
    hours12 = noon;
  }

  return (
    <div className="time-container">
      <img className="sign" src={myClock} alt="clock" />
      <span>Open until: &nbsp;</span>
      <span className="hours">
        {hours12}
        :
        {minutes}
        &nbsp;
        {ampm}
      </span>
    </div>

  );
};

ClosingTimeWidget.propTypes = { closeTime: PropTypes.number.isRequired };

export default ClosingTimeWidget;
