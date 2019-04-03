import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Field, reduxForm, propTypes, SubmissionError } from "redux-form";
import { postEntities } from "~/utils/requestManager";
import InputField from "./InputField";
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
    <StyledForm onSubmit={handleSubmit(submitEditorForm)}>
      {error && <FormHeader error={error} />}
      <Field name="title" type="text" component={InputField} label="タイトル" />

      <Field
        name="description"
        component={InputField}
        type="textarea"
        label="作品の説明"
      />
      <button
        type="submit"
        className="button button-primary pull-right"
        disabled={pristine || submitting}
      >
        登録
      </button>
    </StyledForm>
  );
};

EditorForm.propTypes = {
  ...propTypes
};

export default reduxForm({ form: "editor", validate })(EditorForm);
