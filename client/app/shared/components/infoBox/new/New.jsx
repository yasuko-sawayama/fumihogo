import React from "react";
import PropTypes from "prop-types";

const New = ({ auth, productId }) => {
  if (!auth.update) return null;

  const editorUrl = `/products/${productId}/pages/new`;

  return (
    <div className="edit">
      <a href={editorUrl}>
        <i className="md-icon">add_circle</i>
      </a>
      <span>追加</span>
    </div>
  );
};

New.propTypes = {
  productId: PropTypes.number.isRequired,
  auth: PropTypes.shape().isRequired
};

export default New;
