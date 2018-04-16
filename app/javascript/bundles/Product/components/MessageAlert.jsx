import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';

class MessageAlert extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);

    this.state = {
      show: true
    };
  }

  static propTypes = {
    style: PropTypes.string,
    message: PropTypes.string,
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  render() {

    if ( this.props.message && this.state.show ) {
      return (
        <Alert bsStyle={this.props.style} onDismiss={this.handleDismiss} >
          <p>{this.props.message}</p>
        </Alert>
      );
    } else {
      return false
    };
  }
}

export default MessageAlert;
