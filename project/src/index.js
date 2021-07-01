import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './components/mocks/offers';
import reviews from './components/mocks/reviews';
const cards = [
  {
    id: 1,
    mark: 'Premium',
    imageSrc: 'img/apartment-01.jpg',
    priceValue: 120,
    priceText: 'night',
    name: 'Beautiful luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    mark: '',
    imageSrc: 'img/room.jpg',
    priceValue: 80,
    priceText: 'night',
    name: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 3,
    mark: '',
    imageSrc: 'img/apartment-02.jpg',
    priceValue: 132,
    priceText: 'night',
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    mark: 'Premium',
    imageSrc: 'img/apartment-03.jpg',
    priceValue: 180,
    priceText: 'night',
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 5,
    mark: '',
    imageSrc: 'img/room.jpg',
    priceValue: 80,
    priceText: 'night',
    name: 'Wood and stone place',
    type: 'Private room',
  },
];
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
    <App cards={cards} cities={cities} sorts={sorts} offers={offers} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
