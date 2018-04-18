import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
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
    const ErrorMessages = ({ response: { data }}) => (
      <div className="row">
        <div className="col-xs-2 col-sm-1">
          <FontAwesome name="exclamation-triangle" size='3x'/>
        </div>
        <ul className="col-xs-10 col-sm-11">
          { data.map(cons => <li key={cons}>{cons}</li>) }
        </ul>
      </div>
    )
    
    if ( this.props.message && this.props.show ) {
      return (
        <Alert bsStyle={this.props.style} onDismiss={this.handleDismiss} >
          <h4> {this.props.message}</h4>
          { this.props.error && <ErrorMessages {...this.props.error} /> }
        </Alert>
      );
    } else {
      return false
    };
  }
}

export default MessageAlert;
