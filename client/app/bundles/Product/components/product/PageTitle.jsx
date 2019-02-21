import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const pageTitle = (pages, page_id) =>
  pages.find(page => page.id === parseInt(page_id)).title || "";

const PageTitle = ({
                     match: {
                       params: { page_id }
                     },
                     pages
                   }) => (
  <div className="infobox-content">
    {pageTitle(pages, page_id)} /ページ{page_id}
  </div>
);

PageTitle.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page_id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return {
    pages: state.productData.currentProduct.pages
  };
};

export default connect(mapStateToProps)(PageTitle);
