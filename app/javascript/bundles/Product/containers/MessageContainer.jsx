import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessageAlert from '../components/MessageAlert';
import * as alertActions from '../actions/alertActionCreators';

const mapStateToProps = state => ({
  ...state.alert,
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(alertActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageAlert);
