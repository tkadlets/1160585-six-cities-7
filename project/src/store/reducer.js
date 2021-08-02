import {ActionType} from './action';
import offers from '../components/mocks/offers.js';

export const initialState = {
  currectCity: 'Paris',
  offers,
  sorts: [
    {id: 1, name: 'Popular'},
    {id: 2, name: 'Price: low to high'},
    {id: 3, name: 'Price: high to low'},
    {id: 4, name: 'Top rated first'},
  ],
  currentSort: 1,
  hoveredOffer: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return {...state, currentCity: action.payload};
    case ActionType.SET_CURRENT_SORT:
      return {...state, currentSort: action.payload};
    case ActionType.SET_HOVERED_OFFER:
      return {...state, hoveredOffer: action.payload};
    default:
      return state;
  }
};
