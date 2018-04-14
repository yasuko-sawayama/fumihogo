import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import SpinerContainer from '../../shared/containers/SpinerContainer';

import ReactLoading from 'react-loading';

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
      <div>
      <header>
        <LoadingBar />
      </header>
      <section id="product">
        <SpinerContainer />
        <Page {...this.props} />
      </section>
      </div>
    );
  }
};

export default Product;
