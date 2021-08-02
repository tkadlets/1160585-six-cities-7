import React, {useState} from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';

function SortOptions (props) {
  const {sorts, currentSort, setSort} = props;
  const [sortMenuIsOpened, setSortMenuIsOpened] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => setSortMenuIsOpened(!sortMenuIsOpened)}>
        {sorts.find((item) => item.id === currentSort).name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened': sortMenuIsOpened})}>
        {sorts.map((item) => (
          <li
            key = {item.id}
            className={classNames('places__option', {'places__option--active': item.id === currentSort})}
            tabIndex="0"
            onClick={() => {setSort(item.id); setSortMenuIsOpened(false);}}
          >{item.name}
          </li>
        ))}
      </ul>
    </form>
  );
}

SortOptions.propTypes = {
  sorts: PropTypes.array.isRequired,
  currentSort: PropTypes.number.isRequired,
  setSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
  sorts: state.sorts,
});

const mapDispatchToProps = (dispatch) => ({
  setSort(sortId) {
    dispatch(ActionCreator.setCurrentSort(sortId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions);

