import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class PrivacyLevelSelector extends React.Component {
  static propTypes = {
    currentUser: PropTypes.any.isRequired
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { input: { value } } = this.props;
    this.props.input.onChange(event);

    // this.props.handleChange();
  }

  render() {
    const {
      input,
      label,
      placeholder,
      help,
      currentUser,
      meta: {
        touched,
        error,
        warning
      }
    } = this.props;

    const Label = ({ name, label }) => (
      <ControlLabel htmlFor={name}>
        {label}
      </ControlLabel>
    );

    return (
      <FormGroup>
        { label && <Label {...input} label={label} /> }

        <FormControl
          {...input}
          type="select"
          componentClass="select"
          onChange={e => this.handleChange(e)}
        >
          <option value="public_open">公開</option>
          <option value="login">ログイン限定公開</option>
          { currentUser.permissions_lists && <option value="list">リスト限定公開</option> }
          <option value="closed">非公開</option>
        </FormControl>
        { input.value === "closed" && <p className="help-block">非公開の作品は自分だけが見ることができます。</p> }
        { input.value === "list" && <p className="text-info">リストに追加されているユーザーだけが作品を見ることができます。</p> }
        { help && <p className="help-block">{help}</p> }

        {touched && (error || warning) && <span className="text-danger">{ error || warning }</span>}
      </FormGroup>
    );
  }
}

export default PrivacyLevelSelector;
