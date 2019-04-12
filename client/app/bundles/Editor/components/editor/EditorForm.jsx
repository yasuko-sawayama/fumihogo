import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm, propTypes, SubmissionError } from "redux-form";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { postEntities } from "~/utils/requestManager";

import ProductInfo from "./ProductInfo";
import ContentField from "./ContentField";
import FormHeader from "./FormHeader";
import validate from "./validate";

const StyledForm = styled.form`
  padding-top: 40px;
`;

const submitEditorForm = props => {
  return postEntities("/api/v1/products", props)
    .then(res => console.log("create!") || console.log(res.data))
    .catch(error => {
      throw new SubmissionError({
        _error: error.response.data
      });
    });
};
const EditorForm = props => {
  const { error, pristine, submitting, handleSubmit } = props;

  return (
    <Router basename="/products">
      <StyledForm onSubmit={handleSubmit(submitEditorForm)}>
        {error && <FormHeader error={error} />}
        <ProductInfo />
        <Route
          exact
          path="/:productId/:path(edit|pages)/:pageOrder/:edit"
          component={ContentField}
        />
        <Route exact path="/new" component={ContentField} />
        <button
          type="submit"
          className="button button-primary pull-right"
          disabled={pristine || submitting}
        >
          登録
        </button>
      </StyledForm>
    </Router>
  );
};

EditorForm.propTypes = {
  ...propTypes
};

export default reduxForm({ form: "editor", validate })(EditorForm);
