import React from 'react';

import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './newForm/validate';
import newForm from './newForm/newForm';

export default reduxForm({
  form: 'new_form',
  validate,
})(newForm);

