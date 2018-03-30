import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route } from 'react-router-dom';

/**
 * @param props - Comes from your rails view.
 */
const editProduct = () => (<h1>編集</h1>);

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
    this.state = {
      name: this.props.name,
      id: this.props.match.params.id,
    };
  }

  render() {
    return (
      <div>
        <Link to={`/${this.state.id}/edit`}>EDIT</Link>
        <h3>
          Hello, Product
        </h3>
        <hr />
        some text { this.state.name }

        <Route path="/:id(\d+)/edit" component={editProduct} />

      </div>
    );
  }
};

export default Product;
