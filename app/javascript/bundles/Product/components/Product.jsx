import PropTypes from 'prop-types';
import React from 'react';

/**
 * @param props - Comes from your rails view.
 */

class Product extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  render() {
    return (
      <div>
        <h3>
          Hello, Product
        </h3>
        <hr />
        some text { this.state.name }
      </div>
    );
  }
};

export default Product;
