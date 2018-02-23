import React from 'react';

class Location extends React.Component {
  render() {
    return (
      <div className="location">
        <div>Long: {this.props.location.location.lng}</div>
        <div>Lat: {this.props.location.location.lat}</div>
        <div>Acc: {this.props.location.accuracy}</div>
      </div>
    );
  }
};

export default Location;
