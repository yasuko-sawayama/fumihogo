import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { propTypes } from "redux-form";

import ControlledEditor from "./ControlledEditor";

const StyledEditor = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
  color: #455a64;

  .editorArea {
    padding: 10px;
  }
`;

const WrappedEditor = props => {
  const {
    input: { onChange, value },
    disabled,

    meta: { touched, error, warning },
    mobile
  } = props;

  const options = {
    toolbarOnFocus: mobile,
    toolbar: {
      options: mobile
        ? ["inline"]
        : [
            "inline",
            "blockType",
            "fontSize",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "emoji",
            "history"
          ],
      inline: {
        options: ["bold", "italic", "underline", "strikethrough"]
      }
    }
  };

  return (
    <StyledEditor>
      <ControlledEditor
        disabled={disabled}
        onChange={onChange}
        value={value}
        options={options}
      />

      {touched && (error || warning) && (
        <span className="text-danger">{error || warning}</span>
      )}
    </StyledEditor>
  );
};

WrappedEditor.propTypes = {
  ...propTypes,
  mobile: PropTypes.bool
};

WrappedEditor.defaultProps = {
  mobile: false
};

export default WrappedEditor;
