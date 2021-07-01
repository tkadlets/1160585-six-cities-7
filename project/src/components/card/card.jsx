/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { offerType } from '../../prop-types-const.js';
import { Link } from 'react-router-dom';

function Card (props) {
  const {offer} = props;
  const {'is_premium': isPremium, 'preview_image': previewImage, price, name, type, rating, id} = offer;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article onMouseEnter= {() => setIsHovered(true)} onMouseLeave= {() => setIsHovered(false)} className="cities__place-card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={name}></img>
        </Link>

      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {name}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: offerType,
};

export default Card;
