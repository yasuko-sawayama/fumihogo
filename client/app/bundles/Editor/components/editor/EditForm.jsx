import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import { fetchProductPageRequest, updateProductPageRequest } from "~/actions";

import { Mobile } from "~/shared/components/layouts/responsive.jsx";
import ProductInfo from "./ProductInfo";
import PageInfo from "./PageInfo";
import EditorField from "./EditorField";
import FormHeader from "./FormHeader";
import ErrorHeader from "./ErrorHeader";
import validate from "./validate";


export const EditForm = props => {
  const {
    error,
    pristine,
    submitting,
    handleSubmit,
    change,
    fetchPageContent,
    submitChanges,
    match: {
      params: { productId, pageOrder }
    }
  } = props;

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
    <form onSubmit={handleSubmit(submitChanges)}>
      <Mobile>
        <FormHeader title="作品の編集" />
      </Mobile>
      {error && <ErrorHeader error={error} />}
      <ProductInfo />
      <PageInfo />

      <EditorField autoFocus />
      <button
        type="submit"
        className="button button-primary pull-right"
        disabled={pristine || submitting}
      >
        修正を反映
      </button>
    </form>
  );
};

EditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.shape(),
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
  fetchPageContent: PropTypes.func.isRequired,
  submitChanges: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.number.isRequired,
      pageOrder: PropTypes.number
    })
  }),
  totalCharacterCount: PropTypes.number,
  formContentLength: PropTypes.number
};

EditForm.defaultProps = {
  error: null,
  match: {
    params: {
      pageOrder: 1
    }
  },
  totalCharacterCount: 0,
  formContentLength: 0
};

const mapDispatchToProps = dispatch => ({
  fetchPageContent: (productId, pageOrder) =>
    dispatch(fetchProductPageRequest(productId, pageOrder)),
  submitChanges: values => dispatch(updateProductPageRequest(values))
});

export default compose(
  reduxForm({
    form: "edit",
    validate,
    initialValues: {
      productId: null,
      pageOrder: 1
    }
  }),
  connect(
    null,
    mapDispatchToProps
  )
)(EditForm);
