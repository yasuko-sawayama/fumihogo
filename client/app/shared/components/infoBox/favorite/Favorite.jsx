import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleFav as toggle } from "../../../../actions";
import FavButton from "./FavButton";

const Favorite = props => {
  const { productId, faved, count, toggleFav } = props;
  return (
    <FavButton
      faved={faved}
      count={count}
      handleClick={() => toggleFav(productId, !faved, count)}
    />
  );
};

Favorite.propTypes = {
  productId: PropTypes.number.isRequired,
  faved: PropTypes.bool.isRequired,
  count: PropTypes.number,
  toggleFav: PropTypes.func.isRequired
};

Favorite.defaultProps = {
  count: 0
};

const mapDispatchToProps = dispatch => ({
  toggleFav: (productId, faved, prevCount) =>
    dispatch(toggle(productId, faved, prevCount))
});

export default connect(
  null,
  mapDispatchToProps
)(Favorite);
