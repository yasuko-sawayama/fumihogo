import React from "react";
import PropTypes from "prop-types";

const FavButton = props => {
  return (
    <div className="favorite">
      <i className="md-icon">favorite_border</i>
      <button>
        <i className="md-icon">favorite</i>
      </button>
      <span>24</span>
    </div>
  );
};

FavButton.propTypes = {};

export default FavButton;
