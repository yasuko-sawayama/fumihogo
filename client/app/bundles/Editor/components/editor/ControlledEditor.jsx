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
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);

    const {
      input: { value }
    } = props;

    this.state = {
      editorState
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.changeValue = this.changeValue.bind(this);

    this.changeValue(editorState);

    const editorState = createState(value);
  }

  // componentWillReceiveProps(nextProps) {
  //   const { value } = nextProps;
  // }

  onEditorStateChange(editorState) {
    // const newValue = draftToMarkdown(
    //   convertToRaw(editorState.getCurrentContent())
    // );
    // this.handleMyContentChange(newValue, editorState);

    // 一旦markdownなしで実装

    this.setState({ editorState });
    this.changeValue(editorState);
  }

  changeValue(editorState) {
    const value = draftToMarkdown(
      convertToRaw(editorState.getCurrentContent())
    );
    this.props.input.onChange(value);
  }
  // handleMyContentChange(newValue, editorState) {
  //   const { onChange, value } = this.props;
  //
  //   if (!newValue) {
  //     editorState = EditorState.createEmpty();
  //   } else if (value !== newValue) {
  //     onChange(newValue);
  //   }
  //
  //   this.setState({
  //     editorState
  //   });
  // }

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
