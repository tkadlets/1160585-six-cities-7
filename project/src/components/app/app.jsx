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
  const {cities, sorts, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main cities={cities} sorts={sorts} offers={offers} reviews={reviews} />;
        </Route>
        <Route path={AppRoute.SIGNIN} exact>
          <SignIn />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <Favorites offers={offers} reviews={reviews} />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <Offer offers={offers} reviews={reviews} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>);

}

App.propTypes = {
  cities: PropTypes.array.isRequired,
  sorts: PropTypes.array.isRequired,
  offers: offersType,
  reviews: PropTypes.array.isRequired,
};

export default App;
