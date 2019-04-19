import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm, propTypes, SubmissionError } from "redux-form";

import { postEntities } from "~/utils/requestManager";

import { Mobile } from "~/shared/components/layouts/responsive.jsx";
import ProductInfo from "./ProductInfo";
import EditorField from "./EditorField";
import FormHeader from "./FormHeader";
import ErrorHeader from "./ErrorHeader";
import validate from "./validate";

const StyledForm = styled.form`
  padding-top: 40px;
`;

const submitNewForm = props => {
  return postEntities("/api/v1/products", props)
    .then(res => console.log("create!") || console.log(res.data))
    .catch(error => {
      throw new SubmissionError({
        _error: error.response.data
      });
    });
};
const NewForm = props => {
  const { error, pristine, submitting, handleSubmit } = props;

  return (
    <StyledForm onSubmit={handleSubmit(submitNewForm)}>
      <Mobile>
        <FormHeader title="編集" />
      </Mobile>
      {error && <ErrorHeader error={error} />}
      <ProductInfo />
      type="submit" className="button button-primary pull-right" disabled=
      {pristine || submitting}><button>登録</button>
    </StyledForm>
  );
};

NewForm.propTypes = {
  ...propTypes
};

export default reduxForm({ form: "editor", validate })(NewForm);
