import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { reduxForm, propTypes, SubmissionError } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import { fetchProductPageRequest, updateProductPageRequest } from "~/actions";

import { Mobile } from "~/shared/components/layouts/responsive.jsx";
import ProductInfo from "./ProductInfo";
import EditorField from "./EditorField";
import FormHeader from "./FormHeader";
import ErrorHeader from "./ErrorHeader";
import validate from "./validate";

const EditForm = props => {
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
      <EditorField />
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
  ...propTypes
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
