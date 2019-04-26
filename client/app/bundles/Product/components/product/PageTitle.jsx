import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const pageTitle = (pages, page_order) =>
  pages.find(page => page.id === parseInt(page_order)).title || "";

const PageTitle = ({
  match: {
    params: { page_order }
  },
  pages
}) => (
  <h4 className="page-title">
    {pageTitle(pages, page_order)} ページ {page_order}/{pages.length}
  </h4>
);

PageTitle.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page_order: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  pages: state.productData.currentProduct.pages
});

export default connect(mapStateToProps)(PageTitle);
