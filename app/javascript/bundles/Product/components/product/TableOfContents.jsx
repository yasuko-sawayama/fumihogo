import React from "react";
import PropTypes from 'prop-types';

import PageLink from './PageLink';

const TableOfContents = ({ pages, url }) => {
  const pageLinks = pages.map((page) => (
    <PageLink  key={page.id} {...page} url={url} />
  ));
  
  return (
    <div className="tableOfContents">
      <h3>もくじ</h3>
      <ol className="nav nav-pills nav-stacked">
        {pageLinks}
      </ol>
    </div>
  );
};

TableOfContents.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default TableOfContents;
