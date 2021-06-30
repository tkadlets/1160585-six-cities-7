import PropTypes from 'prop-types';

export const offerType = PropTypes.shape({
  id: PropTypes.number,
  'is_premium': PropTypes.bool,
  'preview_image': PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.number,
}).isRequired;

export const offersType = PropTypes.arrayOf(offerType);
