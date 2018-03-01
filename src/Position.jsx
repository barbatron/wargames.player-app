import React from 'react';

const Position = ({position}) => (
  <div className="location">
    <div>Long: {position.coords.longitude}</div>
    <div>Lat: {position.coords.latitude}</div>
  </div>
);

export default Position;
