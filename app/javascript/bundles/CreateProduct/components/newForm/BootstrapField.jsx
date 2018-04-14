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

    return (
      <FormGroup>
        <ControlLabel htmlFor={input.name}>
          {label}
        </ControlLabel>
        { help && <p className="help-block">{help}</p> }
        
        <FormControl
          {...input}
          type = {type || "text"}
          componentClass = {componentClass || "input"}
          placeholder={placeholder} >
          {children}
        </FormControl>
        
        {touched && ( error || warning ) && <span className="text-danger">{ error || warning }</span>}
      </FormGroup>
    );
  }
}

export default BootstrapField;
