import React from 'react';

import WrappedEditor from './WrappedEditor';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel } from 'react-bootstrap';


const EditorField = props => (
  <FormGroup>
    { props.label && <ControlLabel>{props.label}</ControlLabel> }
    <Field {...props} type="text" component={WrappedEditor} />
  </FormGroup>
);

export default EditorField;
