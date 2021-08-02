import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';


function Cities (props) {
  const {cities, setCity} = props;

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((item) => (
              <li key={item.id} className="locations__item" onClick={() => setCity(item.name)}>
                <a className="locations__item-link tabs__item" href="#">
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  setCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCurrentCity(city));
  },
});

export default connect(null, mapDispatchToProps)(Cities);
