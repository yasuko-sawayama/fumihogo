import React from "react";
import PropTypes from "prop-types";

const Empty = props => (
  <div className="page-empty">
    <div className="page-empty-content">{props.children}</div>
  </div>
);

Empty.propTypes = {
  children: PropTypes.node.isRequired
};

export default Empty;
