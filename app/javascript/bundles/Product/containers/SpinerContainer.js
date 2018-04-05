import { connect } from 'react-redux';
import Spiner from '../components/Spiner';

const mapStateToProps = state => ({
  loading: state.loadingBar,
});

export default connect(mapStateToProps, null)(Spiner);
