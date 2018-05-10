import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import FontAwesome from 'react-fontawesome';

import RIEKInput from '../../../shared/components/forms/riek/RIEKInput';
import EditorField from './EditorField';

const EditPageForm = ({ id, pageId = 1, }) => (
  <div id="pageContent">
    <h3>
      ページタイトル
      {'　'}
      <FontAwesome name="quote-left" />
      <Field
        name="title"
        component={RIEKInput}
        type="text"
        size={40}
        placeholder="New"
        className="ProductTitle"
      />
      <FontAwesome name="quote-right" />
      <span className="text-muted">（{ pageId }ページ）</span>
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

EditPageForm.propTypes = {
  id: PropTypes.number.isRequired,
  pageId: PropTypes.number.isRequired,
};

export default EditPageForm;
