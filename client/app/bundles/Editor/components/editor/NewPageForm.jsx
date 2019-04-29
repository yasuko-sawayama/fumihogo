import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import { fetchProductPageRequest, updateProductPageRequest } from "~/actions";
import { Mobile, Default} from "~/shared/components/layouts/responsive.jsx";

import ProductInfo from "./ProductInfo";
import EditorField from "./EditorField";
import FormHeader from "./FormHeader";
import ErrorHeader from "./ErrorHeader";
import validate from "./validate";

const NewPageForm = props => {
  const {
    handleSubmit,
    pristine,
    submitting,
    error,
    match: {
      params: { productId }
    }
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Mobile>
        <FormHeader title="新しいページを追加" />
      </Mobile>
      <Default>
        <h3>新しいページを追加</h3>
      </Default>
      {error && <ErrorHeader error={error} />}
      <ProductInfo />

      <EditorField autoFocus />
      <button
        type="submit"
        className="button button-primary pull-right"
        disabled={pristine || submitting}
      >
        修正を反映
      </button>
    </form>);
};

NewPageForm.propTypes = {
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.shape().isRequired,
  handleSubmit: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  fetchPageContent: (productId, pageOrder) =>
    dispatch(fetchProductPageRequest(productId, pageOrder)),
  submitChanges: values => dispatch(updateProductPageRequest(values))
});

export default compose(
  reduxForm(
    {form: "newPage"},
    validate
  ),
  connect(null, mapDispatchToProps)
)(NewPageForm);
