import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import CityList from '../containers/city_list';
import City from '../containers/city';
import ActiveCity from '../containers/active_city';
import cities from '../../data/cities';

class App extends Component {
  render () {
    return (
      <div className="app">
          <CityList />
          <ActiveCity />
      </div>
    );
  };
}

export default App;
