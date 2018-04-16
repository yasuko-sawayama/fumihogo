// Single Product Editable Container

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import Edit from '../components/Edit';
import * as productActions from '../actions/productActionCreators';
import * as editActions from '../actions/productEditActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => ({
  initialValues: state.product,
  form: state.form,
  product: state.product,
  railsContent: state.railsContext,
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ ...productActions, ...editActions }, dispatch), };
}

let EditForm = reduxForm({
  from: 'edit_product',
})(Edit);

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
