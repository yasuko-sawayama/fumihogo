import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContentLink, { PageListLink } from "./ContentLink";

const ProductButton = props => {
  const { pages } = props;

  if (pages) {
    return <PageListLink {...props} />;
  }
  return <ContentLink {...props} />;
};

ProductButton.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape()),
  product_id: PropTypes.number.isRequired,
  auth: PropTypes.shape({ show: PropTypes.bool }).isRequired
};

ProductButton.defaultProps = {
  pages: null
};

const mapStateToProps = state => {
  if (state.productData.currentProduct) {
    return {
      info: state.productData.currentProduct.info,
      pages: state.productData.currentProduct.pages
    };
  }
  return {};
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
  ...propsFromState,
  ...propsFromDispatch,
  ...ownProps
});

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(ProductButton);
