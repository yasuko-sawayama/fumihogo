// Single Product Container

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Product from "../components/Product";
import * as productActions from "../actions/productActionCreators";

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  product: state.product,
  railsContent: state.railsContext
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(productActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
