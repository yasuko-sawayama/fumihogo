import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Page from './Page';

class Product extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };


  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.actions.fetchProduct(this.props.product.id);
  }

  componentWillReceiveProps(nextProp) {
    if(this.props.product.id !== nextProp.product.id) {
      this.props.actions.fetchProduct(nextProp.product.id);
    }
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
