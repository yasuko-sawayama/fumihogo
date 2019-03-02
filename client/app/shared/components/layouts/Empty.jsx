import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "./Frontend";

const Empty = props => (
  <div className="page-empty">
    <div className="page-empty-content">
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  </div>
);

Empty.propTypes = {
  children: PropTypes.node.isRequired
};

export default Empty;
