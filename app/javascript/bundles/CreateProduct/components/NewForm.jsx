import React from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import SpinerContainer from '../containers/SpinerContainer';

import NewForm from './newForm/NewForm';
import Title from './product/Title';

class NewPage extends React.Component {
  static propTypes = {
    product: PropTypes.any.isRequired,
  }

  render() {
    return(
      <div>
        <header>
          <LoadingBar />
        </header>
        <section id="productNewForm">
          <SpinerContainer />
          <Title title='新規作成' />
          <NewForm />
        </section>
      </div>
    );
  }
}

export default NewPage;
