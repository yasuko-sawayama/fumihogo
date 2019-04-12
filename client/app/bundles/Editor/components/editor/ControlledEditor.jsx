import React, { Component } from "react";
import PropTypes from "prop-types";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState
} from "draft-js";
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";

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
    onChange: PropTypes.bool.isRequired,
    productId: PropTypes.number.isRequired,
    pageOrder: PropTypes.number
  };

  static defaultProps = {
    value: "",
    pageOrder: 1
  };

  constructor(props) {
    super(props);

    const { value, productId, pageOrder } = props;

    const editorState = createState(value);

    this.state = {
      editorState,
      productId,
      pageOrder
    };

    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());

    this.handleMyContentChange = this.handleMyContentChange.bind(this);
    this.props.onChange(draftToMarkdown(rawContent));
  }

  componentWillReceiveProps(nextProps) {
    const { value, productId, pageOrder } = nextProps;

    if (
      productId !== this.state.productId ||
      pageOrder !== this.state.pageOrder ||
      (!this.state.editorState.getCurrentContent().hasText() && value)
    ) {
      // ページ移動していればStateを作り直す
      this.setState({
        editorState: createState(value),
        productId,
        pageOrder
      });
    }
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

    return (
      <Editor
        editorState={editorState}
        wrapperClassName="textEditorForm"
        editorClassName="editorArea"
        toolbarOnFocus={this.state.pageEdit}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "emoji",
            "history"
          ],
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true }
        }}
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}

export default ControlledEditor;
