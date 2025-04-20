import React from 'react';
import PropTypes from 'prop-types';

const AnalogClock = ({ hours, minutes, seconds }) => {

  const hourStyle = {
    transform: `rotate(${((hours + 3) % 12) * 30 + minutes / 2}deg)`
  };
  const minuteStyle = {
    transform: `rotate(${(minutes + 15) * 6}deg)`
  };
  const secondStyle = {
    transform: `rotate(${(seconds + 15) * 6}deg)`
  };

  const markers = Array.from({ length: 12 }, (_, i) => {
    const angle = i * 30; 
    const markerStyle = {
      transform: `rotate(${angle - 90}deg) translate(90px) rotate(${90 - angle}deg)` 
      
    };
    return (
      <div
        key={i}
        className="absolute top-23 left-24 w-4 h-4 flex items-center justify-center text-md font-bold"
        style={markerStyle}
      >
        {i === 0 ? 12 : i} 
      </div>
    );
  });

  return (
    <div className="relative w-52 h-52 border-2 border-violet-600 border-black shadow-lg rounded-full">
      
      {markers}
      
      <div className="absolute w-1/2 h-0.5 bg-red-500 top-1/2 origin-right" style={secondStyle}></div>
      <div className="absolute w-1/2 h-1 bg-black top-1/2 origin-right rounded-sm" style={minuteStyle}></div>
      <div className="absolute w-1/3 h-1 bg-black top-1/2 left-1/6 origin-right rounded-sm" style={hourStyle}></div>
    </div>
  );
};


AnalogClock.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
};

export default AnalogClock;
