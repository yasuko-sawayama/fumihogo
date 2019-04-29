import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { formValueSelector  } from "redux-form";
import ControlledEditor from "./ControlledEditor";

const ContentInfo = styled.div`
  text-align: right;
  font-size: 14px;
  margin-bottom: 10px;
`;

const StyledEditor = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
  color: #455a64;

  .editorArea {
    padding: 10px;
    height: ${props => (props.mobile ? "24em" : "35em")};
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
    mobile,
    formContentLength,
    totalCharacterCount
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
    <div>
      <ContentInfo>
        <div>
          <b>このページ：</b>
          {formContentLength}字 / <b>作品全体：</b>
          {totalCharacterCount}字
        </div>
      </ContentInfo>
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
    </div>
  );
};

WrappedEditor.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  mobile: PropTypes.bool,
  formContentLength: PropTypes.number.isRequired,
  totalCharacterCount: PropTypes.number.isRequired
};

WrappedEditor.defaultProps = {
  disabled: false,
  mobile: false
};

const selector = formValueSelector("edit");

const mapStateToProps = state => ({
  totalCharacterCount: state.productData.currentProduct.info.character_count,
  formContentLength: selector(state, "content")
    ? selector(state, "content").length
    : 0
});

export default connect(mapStateToProps)(WrappedEditor);
