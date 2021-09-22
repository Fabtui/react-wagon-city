import React, { Component } from 'react';

class ActiveCity extends Component {
  render() {
    const { city } = this.props;
    if (!city) {
      return null;
    }

    return (
      <div>
        <h3>{this.props.city.name}</h3>
        <h3>{this.props.city.address}</h3>
      </div>
    );
  }
}

export default ActiveCity;
