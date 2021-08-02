export const ActionType = {
  SET_CURRENT_CITY: 'data/setCurrentCity',
  SET_CURRENT_SORT: 'data/setCurrentSort',
  SET_HOVERED_OFFER: 'data/setHoveredOffer',
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
  setCurrentSort: (sortId) => ({
    type: ActionType.SET_CURRENT_SORT,
    payload: sortId,
  }),
  setHoveredOffer: (offerId) => ({
    type: ActionType.SET_HOVERED_OFFER,
    payload: offerId,
  }),
};
