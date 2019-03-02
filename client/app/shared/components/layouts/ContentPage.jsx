import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "./ErrorBoundary";

const ContentPage = props => (
  <div className="page-content">
    <div className="page-content-inner">
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  </div>
);

ContentPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentPage;
