import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './components/mocks/offers';
import reviews from './components/mocks/reviews';
import 'leaflet/dist/leaflet.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';


const store = createStore(
  reducer,
  composeWithDevTools(),
);

const cities = [
  {id: 1, name: 'Paris'},
  {id: 2, name: 'Cologne'},
  {id: 3, name: 'Brussels'},
  {id: 4, name: 'Amsterdam'},
  {id: 5, name: 'Hamburg'},
  {id: 6, name: 'Dusseldorf'},
];

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={cities} offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
