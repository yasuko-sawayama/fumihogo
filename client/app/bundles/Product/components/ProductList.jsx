import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InfoBox from "./product/Infobox";

const ProductList = ({ products }) => {
  const productBoxes = products.map(product => (
    <InfoBox key={product.id} product={product} />
  ));

  return <div className="product-list">{productBoxes}</div>;
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape())
};

ProductList.defaultProps = {
  products: []
};

const mapStateToProps = state => ({
  products: state.productData.products
});

export default connect(mapStateToProps)(ProductList);
