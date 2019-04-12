import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import ControlledEditor from "./ControlledEditor";

class ContentField extends Component {
  render() {
    console.log(this.props);
    const { match, productId } = this.props;

    const editProductId = (match && match.params.productId) || productId;
    const editPageOrder = (match && match.params.pageOrder) || 1;

    const WrappedEditorField = props => {
      const {
        input: { onChange, value },
        disabled,

        meta: { touched, error, warning }
      } = props;

      return (
        <div>
          <ControlledEditor
            disabled={disabled}
            onChange={onChange}
            value={value}
            productId={editProductId}
            pageOrder={editPageOrder}
          />
          {touched && (error || warning) && (
            <span className="text-danger">{error || warning}</span>
          )}
        </div>
      );
    };

    return (
      <div className="form-group">
        <Field type="text" component={WrappedEditorField} />
      </div>
    );
  }
}

ContentField.propTypes = {};

export default ContentField;
