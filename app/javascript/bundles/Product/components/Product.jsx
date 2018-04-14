import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import ReactLoading from 'react-loading';

import SpinerContainer from '../../shared/containers/SpinerContainer';
import About from './product/About';
import Page from './product/Page';

class Product extends React.Component {
  static propTypes = {
    product: PropTypes.any.isRequired,
  };

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
      <div>
        <LoadingBar />
        <section id="product">
          <SpinerContainer />
          <About {...this.props} />
          <hr />
          <Page {...this.props} />
        </section>
      </div>
    );
  }
};

export default Product;
