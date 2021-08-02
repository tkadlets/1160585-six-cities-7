export const getCurrentCityOffers = (state) => {
  const offersByCity = state.offers.filter((item) => item.city.name === state.currentCity);

  switch (state.currentSort) {
    case 2:
      offersByCity.sort((a, b) => a.price - b.price);
      break;
    case 3:
      offersByCity.sort((a, b) => b.price - a.price);
      break;
    case 4:
      offersByCity.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  return offersByCity;
};
