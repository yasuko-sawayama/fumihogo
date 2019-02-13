import React from "react";
import PropTypes from "prop-types";

import InfoBox from "./Infobox";

const ProductList = ({ products }) => {
  const productBoxes = products.map(product => (
    <InfoBox key={product.id} product={product} />
  ));

  return (
    <div className="content-inner">
      <div className="members">{productBoxes}</div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape())
};

ProductList.defaultProps = {
  products: []
};

export default ProductList;
