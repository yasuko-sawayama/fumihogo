import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { Color } from "~/shared/constants";

const BookIcon = styled.i`
  font-size: 42px;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.45em 0.5em;

  background-color: ${props =>
    props.disabled ? Color.UNREADABLE : "transparent"};
`;

const CircleButton = styled(NavLink)`
  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  div {
    width: 100%;
    text-align: center;
    margin-top: 5px;
    font-family: "hannari";
  }
`;

const ContentLink = ({ product_id, auth: { show } }) => (
  <CircleButton to={`/products/${product_id}`} disabled={!show}>
    <BookIcon className="fas fa-book" disabled={!show} />
    {show && <div>よむ</div>}
  </CircleButton>
);

ContentLink.propTypes = {
  product_id: PropTypes.number.isRequired,
  auth: PropTypes.shape().isRequired
};

const PageListLink = ({ product_id, auth: { show } }) => (
  <CircleButton to={`/products/${product_id}/pages`} disabled={!show}>
    <BookIcon className="fas fa-list-alt" disabled={!show} />
    {show && <div>もくじ</div>}
  </CircleButton>
);

PageListLink.propTypes = {
  product_id: PropTypes.number.isRequired,
  auth: PropTypes.shape().isRequired
};

const ProductButton = props => {
  if (props.pages) {
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