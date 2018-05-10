import React from 'react';

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const Label = ({ name, label, }) => (
  <ControlLabel htmlFor={name}>
    {label}
  </ControlLabel>
);

const PermissionsListSelector = (props) => {
  const {
    input,
    label,
    help,
    privacyLevel,
    currentUser,
    meta: {
      touched,
      error,
      warning,
    },
  } = props;

  return (privacyLevel === 'list') && (
    <FormGroup>
      { label && <Label {...input} label={label} /> }

      <FormControl
        {...input}
        type="select"
        componentClass="select"
      >
        {currentUser.permissions_lists.map(list => <option value={list.id} key={list.id}>{list.name}</option>)}
      </FormControl>
      { help && <p className="help-block">{help}</p> }

      {touched && (error || warning) && <span className="text-danger">{ error || warning }</span>}
    </FormGroup>
  );
};

export default PermissionsListSelector;
