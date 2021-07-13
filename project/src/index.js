import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './components/mocks/offers';
import reviews from './components/mocks/reviews';
import 'leaflet/dist/leaflet.css';

const cities = [
  {id: 1, name: 'Paris'},
  {id: 2, name: 'Cologne'},
  {id: 3, name: 'Brussels'},
  {id: 4, name: 'Amsterdam'},
  {id: 5, name: 'Hamburg'},
  {id: 6, name: 'Dusseldorf'},
];

const sorts = [
  {id: 1, name: 'Popular'},
  {id: 2, name: 'Price: low to high'},
  {id: 3, name: 'Price: high to low'},
  {id: 4, name: 'Top rated first'},
];

ReactDOM.render(
  <React.StrictMode>
    <App cities={cities} sorts={sorts} offers={offers} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
