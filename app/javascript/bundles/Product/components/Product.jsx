import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Page from './Page';
import Information from './Information';

/**
 * @param props - Comes from your rails view.
 */
const editProduct = () => (<h1>編集</h1>);

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
    this.state = {
      name: this.props.product.name,
      id: this.props.match.params.id,
    };
  }

  render() {
    return (
      <section id="product">
        <NavLink activeClassName="active" to={`/${this.state.id}`}>SHOW</NavLink>|
        <NavLink activeClassName="active" to={`/${this.state.id}/edit`}>EDIT</NavLink>|
        <NavLink activeClassName="active" to={`/${this.state.id}/information`}>INFORMATION</NavLink>
        <hr />
        <Route exact path="/:id(\d+)/" render={()=> <Page {...this.props.product} {...this.props.match} />} />
        <Route path="/:id(\d+)/pages/:page_id(\d+)/" render={()=> <Page {...this.props.product} {...this.props.match} />} />
        <Route path="/:id(\d+)/edit" component={editProduct} />
        <Route path="/:id(\d+)/information" render={()=>Information(this.state.id)} />
      </section>
    );
  }
};

export default Product;
