import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './newForm/validate';
import newForm from './newForm/newForm';

const NewForm = reduxForm({
  form: 'new_form',
  validate,
})(newForm);

export default connect(state => ({
  currentUser: state.currentUser,
}))(NewForm);

