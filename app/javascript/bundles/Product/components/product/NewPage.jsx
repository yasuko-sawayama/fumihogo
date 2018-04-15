import React from 'react';
import PropTypes from 'prop-types';

import NewPageForm from './newPage/NewPageForm';

const NewPage = ({ product }) => (
  <section id="newPage">
    <h2>新しいページを追加</h2>
    <NewPageForm {...product} />
  </section>
);

export default NewPage;
