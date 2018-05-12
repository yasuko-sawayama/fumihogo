import React from "react";
import ReactDOM from "react-dom";
import { Alert, Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

import ErrorList from "./errors/ErrorList";

class ErrorAlert extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  componentWillReceiveProps = () => {
    this.setState({ show: true });
  }

  componentDidUpdate = () => {
    const thisDOM = ReactDOM.findDOMNode(this);
    thisDOM && thisDOM.scrollIntoView();
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.props.showError && this.state.show) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
          <h4>
            <FontAwesome name="exclamation-circle" size="2x" />
            {this.props.title}
          </h4>
          <p>
            {this.props.message}
          </p>
          {this.props.dataErrors && <ErrorList errors={this.props.dataErrors} />}
        </Alert>
      );
    }
    return false;
  }
}

export default ErrorAlert;
