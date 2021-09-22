import React, { Component } from 'react';
import CityList from '../containers/city_list';
import City from '../containers/city';

const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: cities,
      selectedCity: null
    };
    this.selectCity = this.selectCity.bind(this);
  }

  selectCity(city) {
    this.setState({
      selectedCity: city
    });
  }

  render () {
    return (
      <div className="app">
        <div className="cities">
          <CityList cities={cities} />
        </div>
        <div className="active-city">
          <City city={this.state.selectedCity} />
        </div>
      </div>
    );
  };
}

export default App;
