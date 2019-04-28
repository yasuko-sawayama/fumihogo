import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm } from "redux-form";

// import { Mobile } from "~/shared/components/layouts/responsive.jsx";
// import ProductInfo from "./ProductInfo";
// import EditorField from "./EditorField";
// import FormHeader from "./FormHeader";
// import ErrorHeader from "./ErrorHeader";
import validate from "./validate";

const StyledForm = styled.form`
  padding-top: 40px;
`;

const NewForm = ({ handleSubmit }) => {
  return <StyledForm onSubmit={handleSubmit} />;
};

NewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: "editor", validate })(NewForm);
