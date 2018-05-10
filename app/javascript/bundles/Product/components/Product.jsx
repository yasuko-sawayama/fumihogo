import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import SpinerContainer from '../../shared/containers/SpinerContainer';
import About from './product/About';
import Page from './product/Page';

class Product extends React.Component {
  static propTypes = {
    currentUser: PropTypes.shape().isRequired,
    product: PropTypes.shape().isRequired,
    actions: PropTypes.shape({
      fetchProduct: PropTypes.func.isRequired
    }).isRequired
  };

  componentWillMount() {
    this.props.actions.fetchProduct(this.props.product.id);
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.product.id !== nextProp.product.id) {
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
          <Switch>
            <Route
              path={`/${this.props.product.id}/pages/:pageId/`}
              render={props => (
                <Page
                  {...props}
                  currentUser={this.props.currentUser}
                  product={this.props.product}
                  actions={this.props.actions}
                />
              )}
            />
            <Route
              path="/"
              render={props => (<Page
                {...props}
                product={this.props.product}
                currentUser={this.props.currentUser}
                actions={this.props.actions}
              />)}
            />
          </Switch>
        </section>
      </div>
    );
  }
}

export default Product;
