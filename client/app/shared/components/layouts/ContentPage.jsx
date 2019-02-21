import React from "react";
import PropTypes from "prop-types";

const ContentPage = props => (
  <div className="page-content">
    <div className="page-content-inner">{props.children}</div>
  </div>
);

ContentPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentPage;
