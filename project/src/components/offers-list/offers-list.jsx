import React from 'react';
import Card from '../card/card';
import { offersType } from '../../prop-types-const';

function OffersList (props) {
  const {offers} = props;

  return (
    <>
      {
        offers.map((item) => (
          <Card key={item.id} offer={item}/>
        ))
      }
    </>
  );
}

OffersList.propTypes = {
  offers: offersType,
};

export default OffersList;
