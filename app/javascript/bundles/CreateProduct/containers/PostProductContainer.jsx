// Post Product Container

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import NewPage from "../components/NewPage";
import * as productActions from "../actions/productActionCreators";

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => ({
  currentUser: state.currentUser,
  product: state.product,
  error: state.errorMessage,
  loadingBar: state.loadingBar,
  railsContext: state.railsContext
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(productActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
