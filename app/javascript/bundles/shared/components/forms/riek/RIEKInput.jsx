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
      text: props.input.value
    };

    this.changeCallback = this.changeCallback.bind(this);
    this.changeState = this.changeState.bind(this);
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
      input,
      size=20,
      className="",
      meta: {
        touched,
        error,
        warning,
      },
      ...props
    } = this.props

    return (
      <span>
        <RIEInput
          propName={input.name}

          value={this.state.text || "　　　　　"}
          change={this.changeCallback}
          editProps={{
            size,
          }}
          classEditing="form-control"
          className={className}
          />
        {touched && ( error || warning ) && <p className="text-danger">{ error || warning }</p>}
      </span>
    )
  }
}

export default RIEKInput;
