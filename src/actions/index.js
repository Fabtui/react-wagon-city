import cities from '../../data/cities';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export default function selectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}

export function activeCity(city) {
  return {
    type: 'ACTIVE_CITY',
    payload: city
  }
}
