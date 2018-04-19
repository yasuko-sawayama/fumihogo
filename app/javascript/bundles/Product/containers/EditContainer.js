// Single Product Editable Container

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import Edit from '../components/Edit';
import * as productActions from '../actions/productActionCreators';
import * as editActions from '../actions/productEditActionCreators';

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);

const PRIVACY_LEVEL = {
  public_open: "公開",
  login: "ログイン限定公開",
  closed: "非公開"
}

const initialValues = product => ({
  title: product.title,
  description: product.description,
  privacy_level: getKeyByValue(PRIVACY_LEVEL, product.about.privacyLevel),
});


// FormはReduxFormに任せる
const mapStateToProps = state => ({
  initialValues: initialValues(state.product),
  product: state.product,
  railsContent: state.railsContext,
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ ...productActions, ...editActions }, dispatch), };
}

let EditForm = reduxForm({
  form: 'edit_product',
})(Edit);

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);