import React from 'react';
import { Field } from 'redux-form';

import BootstrapField from './BootstrapField';
import EditorField from './EditorField';

const Notice = () => (
  <div className="description">
    2ページ目以降は小説投稿後に追加できます
  </div>
);

const PageForm = ({ id=null, pageCount=0 }) => (
    <div id="pageInfo">
      <h4>本文：{ pageCount + 1 }ページ</h4>
      { pageCount < 1 && <Notice /> }
      <Field name="pageTitle"
             component={ BootstrapField }
             type="text"
             help="ページごとのタイトルは省略できます。"
             label="タイトル"
           />

      <EditorField
        key="field"
        name="content"
        id="inputEditorText"
        disabled={false}
        placeholder="Type here"
        label="本文"
      />
    </div>
);

export default PageForm;
