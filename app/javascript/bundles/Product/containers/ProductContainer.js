// Single Product Container

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from '../components/Product';
import * as productActions from '../actions/productActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => ({
  currentUser: state.currentUser,
  product: state.product,
  railsContent: state.railsContext
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(productActions, dispatch) };
}

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(Product);
