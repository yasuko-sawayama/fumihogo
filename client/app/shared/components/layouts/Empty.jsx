import React from "react";
import PropTypes from "prop-types";

export default function Empty(props) {
  return (
    <div className="page-empty">
      <div className="page-empty-content">
        {props.children}
      </div>
    </div>
  );
}

Empty.propTypes = {
  children: PropTypes.node.isRequired
}

