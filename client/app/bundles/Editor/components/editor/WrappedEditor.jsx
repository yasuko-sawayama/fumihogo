import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ControlledEditor from "./ControlledEditor";

const StyledEditor = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
  color: #455a64;

  .editorArea {
    padding: 10px;
    height: ${props => (props.mobile ? "24em" : "45em")};
    line-height: 1.6;
    p {
      margin: 0;
    }
  }
`;

const WrappedEditor = props => {
  const {
    input,
    meta: { touched, error, warning },
    disabled,
    mobile
  } = props;

  const options = {
    // toolbaronfocus: mobile,
    toolbar: {
      options: mobile
        ? ["inline", "blockType", "fontSize"]
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
    <StyledEditor mobile={mobile}>
      <ControlledEditor
        disabled={disabled}
        input={input}
        options={options}
        mobile={mobile}
      />

      {touched && (error || warning) && (
        <span className="text-danger">{error || warning}</span>
      )}
    </StyledEditor>
  );
};

WrappedEditor.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  mobile: PropTypes.bool
};

WrappedEditor.defaultProps = {
  disabled: false,
  mobile: false
};

export default WrappedEditor;
