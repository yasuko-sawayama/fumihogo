import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Page from './Page';

/**
 * @param props - Comes from your rails view.
 */

class Product extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
  }

  render() {
    return (
      <section id="product">
        <Page {...this.props} />
      </section>
    );
  }
};

export default Product;
