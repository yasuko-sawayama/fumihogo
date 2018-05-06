import React from 'react';
import PropTypes from 'prop-types';
import { RIETextArea } from 'riek';

class RIEKTextarea extends React.Component {
  static propTypes = {
    input: PropTypes.any.isRequired,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      text: props.input.value,
    };

    this.changeCallback = this.changeCallback.bind(this);
    this.changeState = this.changeState.bind(this);
    // this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ text: nextProps.input.value });
  }

  changeState(value) {
    this.setState({ text: value });
  }

  changeCallback(newState) {
    const { [this.props.input.name]: value } = newState;

    this.changeState(value);
    this.props.input.onChange(value);
  }

  render() {
    const {
      input, className = '', rows = 3, cols = 50, ...props
    } = this.props;
    return (
      <RIETextArea
        value={input.value}
        change={this.changeCallback}
        propName={input.name}
        className={className}
        editProps={{ rows, cols }}
      />
    );
  }
}

export default RIEKTextarea;
