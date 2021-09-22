import React, { Component } from 'react';

class City extends Component {


  handleClick = () => {
    if (this.props.city) {
      this.props.selectCity(this.props.city)
    }
  }

  render() {
    const { city } = this.props;
    if (!city) {
      return null;
    }

    return (
      <li
        className="list-group-item"
        onClick={() => this.handleClick(this.props.city)}
        >{this.props.city.name}</li>
    );
  }
}

export default City;
