import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Editor } from "react-draft-wysiwyg";

import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState
} from "draft-js";
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
    value: PropTypes.string,
    onChange: PropTypes.bool.isRequired
  };

  static defaultProps = {
    value: ""
  };

  constructor(props) {
    super(props);

    const { value } = props;

    const editorState = createState(value);

    this.state = {
      editorState
    };

    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());

    this.props.onChange(draftToMarkdown(rawContent));
    this.handleMyContentChange = this.handleMyContentChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
  }

  onEditorStateChange(editorState) {
    const newValue = draftToMarkdown(
      convertToRaw(editorState.getCurrentContent())
    );
    this.handleMyContentChange(newValue, editorState);
  }

  handleChange(editorState) {
    this.setState({ editorState });
  }

  handleMyContentChange(newValue, editorState) {
    const { onChange, value } = this.props;

    if (!newValue) {
      editorState = EditorState.createEmpty();
    } else if (value !== newValue) {
      onChange(newValue);
    }

    this.setState({
      editorState
    });
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
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}

export default connect(state => console.log(state) || {})(ControlledEditor);
