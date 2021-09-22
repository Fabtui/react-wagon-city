import React, { Component } from 'react';
import selectCity from '../components/app'

class City extends Component {

  handleClick = () => {
    console.log('click')
    if (this.props.selectCity) {
      this.props.selectCity(this.props.city)
    }
  }


  render() {
    const { city } = this.props;
    if (!city) {
      return null;
    }

    return (
      <div className="list-group-item" onClick={props.handleClick()}>
        <h3 > { this.props.city.name }</h3>
      </div>
    );
  }
}

export default City;
