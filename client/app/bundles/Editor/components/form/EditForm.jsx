import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import { fetchProductPageRequest, updateProductPageRequest } from "~/actions";

import PageInfo from "./editorForm/PageInfo";
import validate from "./validate";
import FormFrame from "./editorForm";

export const EditForm = props => {
  const {
    change,
    fetchPageContent,
    match: {
      params: { productId, pageOrder }
    }
  } = props;

  const backLink = `/products/${productId}/pages/${pageOrder}`;

  const setInitialValues = (productId, pageOrder) => {
    fetchPageContent(productId, pageOrder);
    // IDとページ番号はサーバー応答を待たない（変更するかも？
    change("productId", productId);
    change("pageOrder", pageOrder);
  };

  useEffect(() => {
    setInitialValues(productId, pageOrder);
  }, [productId, pageOrder]);

  return (
    <FormFrame {...props} buttonText="修正を反映" backLink={backLink}>
      <PageInfo />
    </FormFrame>
  );
};

EditForm.propTypes = {
  change: PropTypes.func.isRequired,
  fetchPageContent: PropTypes.func.isRequired,
  submitChanges: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired,
      pageOrder: PropTypes.string
    })
  })
};

EditForm.defaultProps = {
  match: {
    params: {
      pageOrder: "1"
    }
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPageContent: (productId, pageOrder) =>
    dispatch(fetchProductPageRequest(productId, pageOrder)),
  submitChanges: values => dispatch(updateProductPageRequest(values))
});

export default compose(
  reduxForm({
    form: "edit",
    validate
  }),
  connect(
    null,
    mapDispatchToProps
  )
)(EditForm);
