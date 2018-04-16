import React from 'react';
import PropTypes from 'prop-types';
import { RIEInput } from 'riek';

class RIEKInput extends React.Component {
  static propTypes = {
    input: PropTypes.any.isRequired,
    size: PropTypes.number,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = {
      title: props.input.value
    };

    this.changeCallback = this.changeCallback.bind(this);
    this.changeState = this.changeState.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    console.log("submitted");
  }

  changeState(newState) {
    this.setState(newState);
  }
  
  changeCallback(newState) {
    this.changeState(newState);
    this.props.input.onChange(newState);
  }

  render() {
    const {input, size=20, className="", ...props} = this.props
    return (
      <RIEInput
        propName={input.name}
        name={input.name}
        value={this.state.title}
        change={this.changeCallback}
        editProps={{ size }}
        afterFinish={this.submit}
        classEditing="form-control"
        className={className}
        />
    )
  }
}

export default RIEKInput;
