import React from "react";
import PropTypes from "prop-types";

import PageLink from "./PageLink";

const tableOfContents = ({ pages, productId }) => {
  const pageLinks = pages.map(page => (
    <PageLink key={page.position} {...page} productId={productId} />
  ));

  return (
    <div className="tableOfContents">
      <ol className="nav nav-pills nav-stacked">{pageLinks}</ol>
    </div>
  );
};

tableOfContents.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  productId: PropTypes.number.isRequired
};

export default tableOfContents;
