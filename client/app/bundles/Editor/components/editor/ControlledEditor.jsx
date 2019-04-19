import React, { Component } from "react";
import PropTypes from "prop-types";
import { Editor } from "react-draft-wysiwyg";

import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const createState = value => {
  if (!value) {
    return EditorState.createEmpty();
  }
  return EditorState.createWithContent(
    convertFromRaw(
      markdownToDraft(value, {
        preserveNewlines: true
      })
    )
  );
};

class ControlledEditor extends Component {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired
    }).isRequired,
    options: PropTypes.shape()
  };

  static defaultProps = {
    options: null
  };

  constructor(props) {
    super(props);
    const {
      input: { value }
    } = props;

    const editorState = createState(value);

    this.state = {
      editorState
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      input: { value }
    } = nextProps;

    // Contentを取ってきたらエディタに反映
    if (this.props.input.value === "") {
      this.setState({ editorState: createState(value) });
    }
  }

  handleChange(editorState) {
    this.setState({ editorState });
    this.changeInputValue(editorState);
  }

  changeInputValue(editorState) {
    const value = draftToMarkdown(
      convertToRaw(editorState.getCurrentContent())
    );
    this.props.input.onChange(value);
  }

  render() {
    const { editorState } = this.state;
    const { options } = this.props;

    return (
      <Editor
        editorState={editorState}
        wrapperClassName="textEditorForm"
        editorClassName="editorArea"
        {...options}
        onEditorStateChange={editorState => this.handleChange(editorState)}
      />
    );
  }
}

export default ControlledEditor;
