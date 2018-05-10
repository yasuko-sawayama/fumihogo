import React from 'react';
import ReactDOM from 'react-dom';
import { Alert, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class InfoAlert extends React.Component {
  constructor(props) {
    super(props);
    this.handleDismiss = this.handleDismiss.bind(this);

    this.state = {
      show: true,
    };
  }

  componentWillReceiveProps = () => {
    this.setState({ show: true, });
  }

  componentDidUpdate = () => {
    const thisDOM = ReactDOM.findDOMNode(this);
    thisDOM && thisDOM.scrollIntoView();
  }

  handleDismiss() {
    this.setState({ show: false, });
  }

  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle="info" onDismiss={this.handleDismiss}>
          { this.props.title && <h4><FontAwesome name="info-circle" size="2x" />{this.props.title}</h4> }
          <p>
            { !this.props.title && <FontAwesome name="info-circle" /> }
            {this.props.message}
          </p>
        </Alert>
      );
    }
    return false;
  }
}

export default InfoAlert;
