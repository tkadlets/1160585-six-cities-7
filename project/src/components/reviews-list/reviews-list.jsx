import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';

function ReviewsList (props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
