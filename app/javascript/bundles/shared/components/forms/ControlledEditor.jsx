import React from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';

class ControlledEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());

    this.props.onChange(draftToMarkdown(rawContent));
  }

  onEditorStateChange: Function = (editorState) => {
    const { onChange, value } = this.props;

    const newValue = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));

    if (value !== newValue) {
      onChange(newValue);
    }
    
    this.setState({
      editorState,
    });
  };

  handleChange(editorState) {
	this.setState({editorState});
  }


  render() {
    const { editorState } = this.state;
    
    return(
      <Editor
        editorState={editorState}
        wrapperClassName="textEditorForm"
        editorClassName="editorArea"
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link',  'emoji', 'history'],
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
