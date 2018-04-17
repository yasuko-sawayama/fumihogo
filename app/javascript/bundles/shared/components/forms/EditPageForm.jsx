import React from 'react';
import { Field } from 'redux-form';

import RIEKInput from '../../../shared/components/forms/riek/RIEKInput';
import EditorField from './EditorField';

const EditPageForm = ({ id=null, pageId=1 }) => (
    <div id="pageContent">
      <h3>
        ページタイトル＞
        {'　'}
        <Field
          name="title"
          component={RIEKInput}
          type="text"
          size={40}
          placeholder="New"
          className="ProductTitle"
          />
        {'　'}
        ：{ pageId }ページ
      </h3>

      <EditorField
        key="field"
        name="content"
        id="inputEditorText"
        disabled={false}
        label={null}
        productId={id}
        pageId={pageId}
        />
    </div>
);

export default EditPageForm;
