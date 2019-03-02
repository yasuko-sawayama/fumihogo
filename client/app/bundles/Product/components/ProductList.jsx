import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Frontend from "~/shared/components/layouts/Frontend";
import InfoBox from "./product/infoBox";

const ProductList = ({ products }) => {
  const productBoxes = products.map(product => (
    <InfoBox key={product.id} product={product} />
  ));

  return (
    <Frontend>
      <div className="product-list">{productBoxes}</div>
    </Frontend>
  );
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
