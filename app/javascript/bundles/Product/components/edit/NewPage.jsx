import React from 'react';
import PropTypes from 'prop-types';

import NewPageForm from './newPage/NewPageForm';

const NewPage = ({ product, actions, }) => (
  <section id="newPage">
    <h2>新しいページを追加</h2>
    <NewPageForm {...product} submitPage={actions.postPage} />
  </section>
);

export default NewPage;
