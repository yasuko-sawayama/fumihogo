// Single Product Editable Container

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { formValueSelector } from 'redux-form';

import Edit from '../components/Edit';
import * as productActions from '../actions/productActionCreators';
import * as editActions from '../actions/productEditActionCreators';
import * as deletePageActions from '../actions/pageDestroyActionCreators';

// const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value); //
const selector = formValueSelector('edit_product');

// const PRIVACY_LEVEL = {
//   public_open: "公開",
//   login: "ログイン限定公開",
//   closed: "非公開"
// }

const initialValues = product => ({
  title: product.title,
  description: product.description,
  privacy_level: product.info.privacy_level,
  permissions_list_id: product.info.permissions_list_id,
});


// FormはReduxFormに任せる
const mapStateToProps = state => ({
  initialValues: initialValues(state.product),
  currentUser: state.currentUser,
  product: state.product,
  editAttributes: {
    updatedPrivacyLevel: selector(state, 'privacy_level'),
    permission_list_id: selector(state, 'permission_list_id'),
  },
  railsContent: state.railsContext,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...productActions,
        ...editActions,
        ...deletePageActions,
      },
      dispatch,
    ),
  };
}

const EditForm = reduxForm({
  form: 'edit_product',
})(Edit);

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
