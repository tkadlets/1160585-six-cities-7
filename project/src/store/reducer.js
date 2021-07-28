import {ActionType} from './action';

export const initialState = {
  currectCity: 'Paris',
  currentOffersList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return {...state, currentCity: action.payload};
    case ActionType.SET_CURRENT_OFFERS_LIST:
      return {...state, currentOffersList: action.payload};
    default:
      return state;
  }
};
