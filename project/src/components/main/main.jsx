import React from 'react';
import { connect, useSelector } from 'react-redux';
import OffersList from '../offers-list/offers-list';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import Map from '../map/map';
import Cities from '../cities/cities';
import {getCurrentCityOffers} from '../../store/selectors';
import SortOptions from '../sort-options/sort-options';

function Main (props) {
  const {cities, currentCity} = props;
  const currentOffersList = useSelector(getCurrentCityOffers);

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
                <SortOptions />
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
  currentCity: PropTypes.string,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

export default connect(mapStateToProps, null)(Main);
