import React from "react";
import PropTypes from "prop-types";

const Edit = ({ match, auth, productId }) => {
  if (!auth.update) return null;

  let editorUrl;

  if (match) {
    const { params } = match;

    editorUrl = params.pageOrder
      ? `/products/${params.productId}/pages/${params.pageOrder}/edit`
      : `/products/${params.productId}/pages/1/edit`;
  } else {
    editorUrl = `/products/${productId}/edit`;
  }

  return (
    <div className="edit">
      <a href={editorUrl}>
        <i className="md-icon">edit</i>
      </a>
      <span>編集</span>
    </div>
  );
};

Edit.propTypes = {
  match: PropTypes.shape().isRequired,
  auth: PropTypes.shape().isRequired,
  productId: PropTypes.string
};

Edit.defaultProps = {
  productId: null
};

export default Edit;
