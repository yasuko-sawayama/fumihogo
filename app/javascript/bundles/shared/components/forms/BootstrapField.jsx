import React from 'react';

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class BootstrapField extends React.Component {
  render() {
    // input と meta は redux-form が渡してくる props。
    // type や label は Field に渡した props がそのまま渡ってくる。
    // select や textarea に対応するために componentClass を受け取る。
    // select の option に対応するために children も受け取る。
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
          type = {type || "text"}
          componentClass = {componentClass || "input"}
          placeholder={placeholder} >
          {children}
        </FormControl>
        { help && <p className="help-block">{help}</p> }
        
        {touched && ( error || warning ) && <span className="text-danger">{ error || warning }</span>}
      </FormGroup>
    );
  }
}

export default BootstrapField;
