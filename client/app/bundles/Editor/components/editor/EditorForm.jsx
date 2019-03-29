import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import InputField from "./InputField";
import validate from "./validate";

const StyledForm = styled.form`
  padding-top: 40px;
`;

const EditorForm = props => {
  const { handleSubmit } = props;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field name="title" type="text" component={InputField} label="タイトル" />

      <Field
        name="description"
        component={InputField}
        type="textarea"
        label="作品の説明"
      />
      <button type="submit" className="button pull-right">
        登録
      </button>
    </StyledForm>
  );
};

EditorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: "editor", validate })(EditorForm);
