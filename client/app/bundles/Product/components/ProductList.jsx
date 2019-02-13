 import React from "react";
import PropTypes from "prop-types";
import Frontend from "../../../shared/components/layouts/Frontend";
import InfoBox from "./Infobox";

const ProductList = ({ products }) => {
  const productBoxes = products.map(product => (
    <InfoBox key={product.id} product={product} />
  ));

  return (
    <Frontend title="やすこの作品一覧">
    <div className="content-inner">
      <div className="product-list">{productBoxes}</div>
    </div>
    </Frontend>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape())
};

ProductList.defaultProps = {
  products: []
};

export default ProductList;
