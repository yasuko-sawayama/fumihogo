import React from 'react';

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class PrivacyLevelSelector extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {

  }

  render() {
    const {
      input,
      label,
      type,
      componentClass,
      children,
      placeholder,
      help,
      meta: {
        touched,
        error,
        warning,
      },
    } = this.props;

    const validationState = touched && ( error && "error" ) || ( warning && "warning" ) || null;
    const Label = ({name, label}) => (
      <ControlLabel htmlFor={name}>
          {label}
      </ControlLabel>
    );
    
    return (
      <FormGroup>
        { label && <Label {...input} label={label} /> }

        <FormControl
          {...input}
          type = {"select"}
           componentClass = "select"
           onChange={ this.onChange }
           >
          {children}
        </FormControl>
        { help && <p className="help-block">{help}</p> }
        
        {touched && ( error || warning ) && <span className="text-danger">{ error || warning }</span>}
      </FormGroup>
    );
  }
}

export default PrivacyLevelSelector;
