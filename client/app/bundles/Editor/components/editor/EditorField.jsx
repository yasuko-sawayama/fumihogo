import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { Default, Mobile } from "~/shared/components/layouts/responsive.jsx";
import WrappedEditor from "./WrappedEditor";

const EditorField = ({ autoFocus }) => (
  <div className="form-group">
    <Mobile>
      <Field
        type="text"
        component={WrappedEditor}
        mobile={true}
        name="content"
        autoFocus={autoFocus}
      />
    </Mobile>
    <Default>
      <Field
        type="text"
        component={WrappedEditor}
        default={true}
        name="content"
        autoFocus={autoFocus}
      />
    </Default>
  </div>
);

EditorField.propTypes = {
  autoFocus: PropTypes.bool
};

EditorField.defaultProps = {
  autoFocus: true
};

export default EditorField;
