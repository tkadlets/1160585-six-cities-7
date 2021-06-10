import React from 'react';
import Home from '../home/home';
import PropTypes from 'prop-types';

function App(props) {
  const {cards, cities, sorts} = props;

  return <Home cards={cards} cities={cities} sorts={sorts} />;
}

App.propTypes = {
  cards: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  sorts: PropTypes.array.isRequired,
};

export default App;
