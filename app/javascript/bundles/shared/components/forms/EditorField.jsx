import React from "react";

import WrappedEditor from "./WrappedEditor";
import { Field } from "redux-form";
import { FormGroup, ControlLabel } from 'react-bootstrap';

const EditorField = props => {
  return (
    <FormGroup>
      { props.label && <ControlLabel>{props.label}</ControlLabel> }
      <Field {...props} component={WrappedEditor} />
    </FormGroup>
  );
}

export default EditorField;
