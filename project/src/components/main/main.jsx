import React, { useState, useEffect } from 'react';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import OffersList from '../offers-list/offers-list';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { offersType } from '../../prop-types-const.js';
import Logo from '../logo/logo';
import Map from '../map/map';
import Cities from '../cities/cities';

function Main (props) {
  const {cities, sorts, getCityOffers, currentCity, currentOffersList} = props;
  const [activeItem, setActive] = useState('Popular');
  const [sortMenuIsOpened, setSortMenuIsOpened] = useState(false);
  useEffect(() => getCityOffers(currentCity), [currentCity, getCityOffers]);

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo isMainPage />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <Cities cities={cities} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffersList.length} places to stay in {currentCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0" onClick={() => setSortMenuIsOpened(!sortMenuIsOpened)}>
                    {activeItem}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened': sortMenuIsOpened})}>
                    {sorts.map((item) => (
                      <li
                        key = {item.id}
                        className={classNames('places__option', {'places__option--active': item.name === activeItem})}
                        tabIndex="0"
                        onClick={() => {setActive(item.name); setSortMenuIsOpened(false);}}
                      >{item.name}
                      </li>
                    ))}
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={currentOffersList} />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={currentOffersList} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

Main.propTypes = {
  cities: PropTypes.array.isRequired,
  sorts: PropTypes.array.isRequired,
  getCityOffers: PropTypes.func.isRequired,
  currentOffersList: offersType,
  currentCity: PropTypes.string,
};

const mapStateToProps = (state) => ({
  currentOffersList: state.currentOffersList,
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  getCityOffers(city) {
    dispatch(ActionCreator.getOffersByCity(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
