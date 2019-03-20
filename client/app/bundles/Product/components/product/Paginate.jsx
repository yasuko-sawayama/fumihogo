import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

const Paginate = ({ history, productId, pages, currentPage }) => {
  const pageCount = pages.length;
  const pageClick = ({ selected }) =>
    history.push(`/products/${productId}/pages/${selected + 1}`);

  return pageCount > 1 ? (
    <ReactPaginate
      containerClassName="pagination"
      pageCount={pageCount}
      marginPagesDisplayed={1}
      previousLabel="前のページ"
      nextLabel="次のページ"
      initialPage={currentPage - 1}
      pageRangeDisplayed={2}
      onPageChange={pageClick}
    />
  ) : null;
};

Paginate.propTypes = {
  history: PropTypes.shape().isRequired,
  productId: PropTypes.number.isRequired,
  pages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.number
};

Paginate.defaultProps = {
  currentPage: 1
};

export default Paginate;
