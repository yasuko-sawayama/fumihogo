import React from "react";
import PropTypes from "prop-types";
import Frontend from "~/shared/components/layouts/Frontend";

const FavoriteList = props => {
  const productBoxes = () => <div>一覧</div>;
  return (
    <Frontend>
      <div className="product-list">{productBoxes}</div>
    </Frontend>
  );
};

// FavoriteList.propTypes = {};

export default FavoriteList;
