import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { reduxForm, propTypes, SubmissionError } from "redux-form";

import { postEntities } from "~/utils/requestManager";

import { Mobile } from "~/shared/components/layouts/responsive.jsx";
import ProductInfo from "./ProductInfo";
import EditorField from "./EditorField";
import FormHeader from "./FormHeader";
import ErrorHeader from "./ErrorHeader";
import validate from "./validate";

const submitEditorForm = props => {
  return postEntities("/api/v1/products", props)
    .then(res => console.log("create!") || console.log(res.data))
    .catch(error => {
      throw new SubmissionError({
        _error: error.response.data
      });
    });
};

const EditForm = props => {
  const {
    error,
    pristine,
    submitting,
    handleSubmit,
    change,
    match: {
      params: { productId, pageOrder }
    }
  } = props;

  useEffect(() => {
    change("productId", productId);
    change("pageOrder", pageOrder);
  }, [productId, pageOrder]);

  return (
    <form onSubmit={handleSubmit(submitEditorForm)}>
      <Mobile>
        <FormHeader title="編集" />
      </Mobile>
      {error && <ErrorHeader error={error} />}
      <ProductInfo />
      <EditorField />
      <button
        type="submit"
        className="button button-primary pull-right"
        disabled={pristine || submitting}
      >
        登録
      </button>
    </form>
  );
};

EditForm.propTypes = {
  ...propTypes
};

export default reduxForm({
  form: "editor",
  validate,
  initialValues: {
    productId: null,
    pageOrder: null
  }
})(EditForm);
