import React from "react";
import PropTypes from "prop-types";

const Edit = ({ productId, auth }) => {
  if (!auth.update) return null;
  return (
    <div className="edit">
      <a href={`/products/${productId}/edit`}>
        <i className="md-icon">edit</i>
      </a>
      <span>編集</span>
    </div>
  );
};

Edit.propTypes = {
  productId: PropTypes.number.isRequired,
  auth: PropTypes.shape().isRequired
};
export default Edit;
