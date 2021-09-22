import React, { Component } from 'react';
import City from './city';

class CityList extends Component {

  render() {
    console.log(this.props)
    return (
      <ul className="list-group cities">
        { this.props.cities.map((city) => <City city={city} key={city.name} selectCity={this.props.selectCity}/>) }
      </ul>
    );
  }
}

export default CityList;
