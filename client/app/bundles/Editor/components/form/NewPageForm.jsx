import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { reduxForm } from "redux-form";
import FormFrame from "./editorForm";
import { compose } from "redux";
import { connect } from "react-redux";
import { createNewPageRequest } from "~/actions";

const NewPageForm = props => {
  const {
    change,
    match: {
      params: { productId }
    }
  } = props;

  const backLink = `/products/${productId}/`;

  useEffect(() => { change("productId", productId) }, [productId])

  return (
      <FormFrame {...props} buttonText="ページを追加する" backLink={backLink}/>
  );
};

NewPageForm.propTypes = {
  change: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired
    })
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  submitChanges: values => dispatch(createNewPageRequest(values))
});

export default compose(
  reduxForm({ form: "edit" }),
  connect(
    null,
    mapDispatchToProps
  )
)(NewPageForm);
