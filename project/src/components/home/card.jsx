// react, redux, types
import React from 'react';
import PropTypes from 'prop-types';

function Card (props) {
  const { data } = props;
  const { mark, imageSrc, priceValue, priceText, name, type } = data;

  return (
    <article className="cities__place-card place-card">
      {mark &&
        <div className="place-card__mark">
          <span>{ mark }</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imageSrc} width="260" height="200" alt={name} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
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
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    mark: PropTypes.string,
    imageSrc: PropTypes.string,
    priceValue: PropTypes.number,
    priceText: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default Card;
