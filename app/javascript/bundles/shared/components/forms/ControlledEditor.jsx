import React from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';

class ControlledEditor extends React.Component {
  constructor(props) {
    super(props);

    const { value, productId=null, pageId=null, } = props;

    let editorState = this.createState(value);

    const pageEdit = pageId ? true : false;
    
    this.state = {
      editorState,
      productId,
      pageId,
      pageEdit,
      readOnly: { pageEdit },
    }
    
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());

    this.handleMyContentChange = this.handleMyContentChange.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.props.onChange(draftToMarkdown(rawContent));
  }


  componentWillReceiveProps(nextProps) {
    const { value, productId, pageId } = nextProps;

    if (productId !== this.state.productId ||
        pageId !== this.state.pageId ||
        (!this.state.editorState.getCurrentContent().hasText() && value)) {
      // ページ移動していればStateを作り直す
      this.setState({
        editorState: this.createState(value),
        productId,
        pageId,
      });
    }
  }

  onDoubleClick() {
    console.log("test")
    this.setState({readOnly: false});
  }
  onBlur() { this.setState({readOnly: true}); }

  onEditorStateChange: Function = (editorState) => {
    const newValue = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));
    this.handleMyContentChange(newValue, editorState);
  };

  handleChange(editorState) {
	this.setState({editorState});
  }

  createState(value) {
    if (!value) {
      return EditorState.createEmpty();
    } else {
      return EditorState.createWithContent(
        convertFromRaw(markdownToDraft(value))
      )
    }
  }

  handleMyContentChange(newValue, editorState) {
    const { onChange, value } = this.props;
    if(!newValue) {
      editorState = EditorState.createEmpty();
    } else if (value !== newValue) {
      onChange(newValue);
    }
    
    this.setState({
      editorState,
    });
  }


  render() {
    const { editorState } = this.state;

    return(
      <div
        className={this.state.readOnly ? null : "pageEditor"}
        onDoubleClick={this.onDoubleClick}
        onBlur={this.onBlur}
        >
        <Editor
          editorState={editorState}
          wrapperClassName="textEditorForm"
          editorClassName="editorArea"
          toolbarOnFocus={ this.state.pageEdit }
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link',  'emoji', 'history'],
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true }
          }}
          onEditorStateChange={this.onEditorStateChange}
          readOnly={this.state.readOnly}
          />
      </div>
    );
  }
}

export default ControlledEditor;
