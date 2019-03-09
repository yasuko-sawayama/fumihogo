import React from "react";
import PropTypes from "prop-types";

const FavButton = ({ count, faved, handleClick }) => {
  const current = faved ? "favorite" : "favorite_border";
  const toggle = current === "favorite" ? "favorite_border" : "favorite";

  return (
    <div className="favorite">
      <i className="md-icon">{current}</i>
      <button onClick={handleClick}>
        <i className="md-icon">{toggle}</i>
      </button>
      <span>{count}</span>
    </div>
  );
};

FavButton.propTypes = {
  count: PropTypes.number,
  faved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

FavButton.defaultProps = {
  count: 0
};

export default FavButton;
