import offers from '../components/mocks/offers.js';

export const ActionType = {
  SET_CURRENT_CITY: 'SET_CURRENT_CITY',
  SET_CURRENT_OFFERS_LIST: 'SET_CURRENT_OFFERS_LIST',
};

export const ActionCreator = {
  setCurrentCity: (city) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: city,
  }),
  setCurrentOffersList: (offersList) => ({
    type: ActionType.SET_CURRENT_OFFERS_LIST,
    payload: offersList,
  }),
  getOffersByCity: (city) => {
    const offersByCity = offers.filter((item) => item.city.name === city);
    return {
      type: ActionType.SET_CURRENT_OFFERS_LIST,
      payload: offersByCity,
    };
  },
};
