import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';


function Logo (props) {
  const { isMainPage } = props;
  return (
    <Link className={classNames('header__logo-link', {'header__logo-link--active': isMainPage})} to="/">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
    </Link>
  );
}

Logo.propTypes = {
  isMainPage: PropTypes.bool,
};

export default Logo;

