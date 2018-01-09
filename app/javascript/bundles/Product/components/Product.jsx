import PropTypes from 'prop-types';
import React from 'react';

/**
 * @param props - Comes from your rails view.
 */
const Product = (props) => {
  (
    <div>
      <h3>
        Hello, Product
      </h3>
      <hr />
      some text { props.name }
    </div>
  );
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Product;
