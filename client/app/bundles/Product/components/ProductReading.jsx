import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchProductRequest } from "~/actions";
import RenderComponent from "./product/RenderComponent";

class ProductReading extends React.Component {
  componentDidMount() {
    const {
      fetchProduct,
      match: {
        params: { product_id }
      }
    } = this.props;
    fetchProduct(product_id);
  }

  componentDidUpdate(prevProps) {
    const {
      fetchProduct,
      match: {
        params: { product_id }
      }
    } = this.props;

    const {
      match: {
        params: { product_id: past_id }
      }
    } = prevProps;

    if (past_id === product_id && this.props.product) return;

    fetchProduct(product_id);
  }

  render() {
    const {
      match: { path },
      product
    } = this.props;

    if (product) {
      return <RenderComponent product={product} path={path}/>;
    }
    return null;
  }
}

ProductReading.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired,
  product: PropTypes.shape(),
  fetchProduct: PropTypes.func.isRequired
};

ProductReading.defaultProps = {
  product: null
};

const mapStateToProps = state => ({
  product: state.productData.currentProduct,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: product_id => dispatch(fetchProductRequest(product_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductReading);
