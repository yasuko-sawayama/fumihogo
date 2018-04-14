import React from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';

class ControlledEditor extends React.Component {
  constructor(props) {
    super(props);

    const { value } = props;
    if (!value) {
      this.state = {
        editorState: EditorState.createEmpty()
      };
    } else {
      this.state = {
        editorState: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromMarkdown(value)
          )
        )
      }
    }
    

    
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());

    this.handleMyContentChange = this.handleMyContentChange.bind(this);
    
    this.props.onChange(draftToMarkdown(rawContent));
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    this.handleMyContentChange(value, this.state.editorState)
  }

  onEditorStateChange: Function = (editorState) => {
    const newValue = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));
    this.handleMyContentChange(newValue, editorState);
  };

  handleChange(editorState) {
	this.setState({editorState});
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
