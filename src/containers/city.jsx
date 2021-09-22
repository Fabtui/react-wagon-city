import React, { Component } from 'react';

class City extends Component {

  render() {
    return (
      <div className="active-city">
       <h3> { this.props.city.name }</h3>
      </div>
    );
  }
}

export default City;
