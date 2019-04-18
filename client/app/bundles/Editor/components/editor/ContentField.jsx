import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import styled from "styled-components";

import { Mobile, Default } from "~/shared/components/layouts/responsive";
import ControlledEditor from "./ControlledEditor";

const StyledEditor = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
  color: #455a64;

  .editorArea {
    padding: 10px;
  }
`;

class ContentField extends Component {
  render() {
    const { match, productId } = this.props;

    const editProductId = (match && match.params.productId) || productId;
    const editPageOrder = (match && match.params.pageOrder) || 1;

    const WrappedEditorField = props => {
      const {
        input: { onChange, value },
        disabled,

        meta: { touched, error, warning }
      } = props;

      // 横幅によってEditorの表示オプションを変更。もう少し上手いやりかたはないものか…
      let options;
      return (
        <StyledEditor>
          {(
            <Default>
              {
                (options = [
                  "inline",
                  "blockType",
                  "fontSize",
                  "list",
                  "textAlign",
                  "colorPicker",
                  "link",
                  "emoji",
                  "history"
                ])
              }
            </Default>
          ) && null}
          {<Mobile>{(options = ["inline"])}</Mobile> && null}
          <ControlledEditor
            disabled={disabled}
            onChange={onChange}
            value={value}
            productId={editProductId}
            pageOrder={editPageOrder}
            options={options}
          />
          {touched && (error || warning) && (
            <span className="text-danger">{error || warning}</span>
          )}
        </StyledEditor>
      );
    };

    return (
      <div className="form-group">
        <Field type="text" component={WrappedEditorField} />
      </div>
    );
  }
}

ContentField.propTypes = {
  match: PropTypes.shape().isRequired,
  productId: PropTypes.string
};

ContentField.defaultProps = {
  productId: null
};

export default ContentField;
