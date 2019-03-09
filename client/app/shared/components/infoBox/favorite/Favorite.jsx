import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleFav } from "../../../../actions";
import FavButton from "./FavButton";

const Favorite = ({ productId, faved, count, toggleFav }) => {
  return (
    <FavButton
      faved={faved}
      count={count}
      handleClick={() => toggleFav(productId)}
    />
  );
};

Favorite.propTypes = {
  productId: PropTypes.number.isRequired,
  faved: PropTypes.bool.isRequired,
  count: PropTypes.number
};

Favorite.defaultProps = {
  count: 0
};

const mapDispatchToProps = dispatch => ({
  toggleFav: productId => dispatch(toggleFav(productId))
});
export default connect(
  null,
  mapDispatchToProps
)(Favorite);
