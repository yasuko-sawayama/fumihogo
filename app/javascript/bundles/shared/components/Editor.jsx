import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';

import styled from 'styled-components';

const WrapperStyleObject = styled.div`
border: solid red 1px;
`;

const EditorComponent = () => (
  <Editor
    wrapperStyle={<WrapperStyleObject />}
    />
);

export default EditorComponent;

