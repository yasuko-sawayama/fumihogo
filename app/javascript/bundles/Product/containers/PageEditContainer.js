// Single Product Editable Container

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import EditPage from '../components/edit/EditPage';
import * as editActions from '../actions/pageEditActionCreators';
import * as productActions from '../actions/productActionCreators';

// contentはマウント後にfetchしてくるのでここではなし
const mapStateToProps = state => ({
  initialValues: {
    id: state.product.id,
    pageId: state.product.currentPage,
  },
  product: state.product,
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ ...editActions, ...productActions, }, dispatch), };
}

const PageForm = reduxForm({
  form: 'edit_page',
})(EditPage);

export default connect(mapStateToProps, mapDispatchToProps)(PageForm);
