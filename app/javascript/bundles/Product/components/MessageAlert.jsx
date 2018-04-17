import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';

class MessageAlert extends React.Component {
  constructor(props, context) {
    super(props, context);

    props.actions.showMessage();
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  static propTypes = {
    style: PropTypes.string,
    message: PropTypes.string,
  }

  handleDismiss() {
    this.props.actions.dismissMessage();
  }
  
  render() {

    if ( this.props.message && this.props.show ) {
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
