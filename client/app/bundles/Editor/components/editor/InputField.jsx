import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Error = styled.span`
  color: #ee5342;
  font-size: 13px;
  line-height: 18px;
  padding-top: 4px;
  display: block;
`;

const Warning = styled.span`
  color: #ff5722;
`;

const StyledArea = styled.textarea`
  line-height: 1.5em;
  height: 7em;
  padding: 3px 5px;
`;

const InputField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label htmlFor={input.name}>{label}</label>
    <div>
      {type === "text" && (
        <input
          {...input}
          placeholder={placeholder}
          type={type}
          className="form-control"
        />
      )}
      {type === "textarea" && (
        <StyledArea
          {...input}
          placeholder={placeholder}
          type={type}
          className="form-control"
        />
      )}
      {touched &&
        ((error && <Error>{error}</Error>) ||
          (warning && <Warning>{warning}</Warning>))}
    </div>
  </div>
);

InputField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape()
};

InputField.defaultProps = {
  placeholder: null,
  type: "text",
  meta: null
};

export default InputField;
