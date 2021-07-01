import React from 'react';
import FavoritesCard from '../favorites-card/favorites-card';
import { offersType } from '../../prop-types-const';

function FavoritesList (props) {
  const {offers} = props;

  return (
    <>
      {
        offers.map((item) => (
          <FavoritesCard key={item.id} offer={item}/>
        ))
      }
    </>
  );
}

FavoritesList.propTypes = {
  offers: offersType,
};

export default FavoritesList;
