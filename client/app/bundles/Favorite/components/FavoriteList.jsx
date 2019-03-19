import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Frontend from "~/shared/components/layouts/Frontend.jsx";
import InfoBox from "~/shared/components/infoBox";

const FavoriteList = ({ products }) => {
  const favoriteBoxes = products.map(product => (
    <InfoBox key={product.id} product={product} />
  ));

  return (
    <Frontend>
      <div className="product-list">{favoriteBoxes}</div>
    </Frontend>
  );
};

FavoriteList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape())
};

FavoriteList.defaultProps = {
  products: []
};

const mapStateToProps = state => ({
  products: state.productData.products
});

export default connect(mapStateToProps)(FavoriteList);
