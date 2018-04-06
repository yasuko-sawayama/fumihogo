import React from 'react';


import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const testDiv = () => (<div className="test"/>)

class FumihogoEditor extends React.Component {
  render() {
    return(
      <Editor
        wrapperClassName="textEditorForm"
        editorClassName="editorArea"
        />   
    );
  }
}

export default FumihogoEditor;
