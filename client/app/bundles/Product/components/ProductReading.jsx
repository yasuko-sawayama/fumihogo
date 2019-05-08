import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchProductRequest } from "~/actions";
import Responsive from "~/shared/components/layouts/responsive.jsx";
import InfoBox from "~/shared/components/infoBox";
import Paginate from "./product/Paginate";
import Content from "./product/content";

// import ProductNotFound from "./product/ProductNotFound";

class ProductReading extends React.Component {
  componentDidMount() {
    const {
      product,
      fetchProduct,
      match: {
        params: { product_id }
      }
    } = this.props;

    if (!product) fetchProduct(product_id);
  }

  componentDidUpdate(prevProps) {
    const {
      fetchProduct,
      product,
      match: {
        params: { productId }
      }
    } = this.props;

    const {
      match: {
        params: { productId: pastId }
      }
    } = prevProps;

    if (pastId === productId && product) return;

    fetchProduct(productId);
  }

  render() {
    const {
      match: {
        params: { productId, pageOrder }
      },
      history,
      product,
      product: { pages }
    } = this.props;

    if (product) {
      return (
        <Responsive>
          <InfoBox product={product} />
          <Content pageOrder={pageOrder} />
          <Paginate
            history={history}
            productId={parseInt(productId)}
            pages={pages}
            currentPage={parseInt(pageOrder)}
          />
        </Responsive>
      );
    }
    return null;
  }
}

ProductReading.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
      pageOrder: PropTypes.string
    })
  }),
  history: PropTypes.shape().isRequired,
  product: PropTypes.shape(),
  fetchProduct: PropTypes.func.isRequired
};

ProductReading.defaultProps = {
  product: null,
  match: {
    params: {
      productId: null,
      pageOrder: 1 // 指定が無い場合は1ページ
    }
  }
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
