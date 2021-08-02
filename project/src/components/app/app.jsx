import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import { offersType } from '../../prop-types-const.js';

function App(props) {
  const {cities, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact render={() => (<Main cities={cities} offers={offers} reviews={reviews} />)}/>
        <Route path={AppRoute.SIGNIN} exact render={() => (<SignIn />)} />
        <Route path={AppRoute.FAVORITES} exact render={() => (<Favorites offers={offers} reviews={reviews} />)} />
        <Route path={AppRoute.ROOM} exact render={() => (<Offer offers={offers} reviews={reviews} />)} />
        <Route render={() => (<NotFoundPage />)} />
      </Switch>
    </BrowserRouter>);

}

App.propTypes = {
  cities: PropTypes.array.isRequired,
  offers: offersType,
  reviews: PropTypes.array.isRequired,
};

export default App;
