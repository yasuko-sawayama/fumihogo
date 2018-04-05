import React from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import SpinerContainer from '../containers/SpinerContainer';
import {reset} from 'redux-form';

import NewForm from './newForm/NewForm';
import Title from './product/Title';

class NewPage extends React.Component {
  static propTypes = {
    form: PropTypes.any.isRequired,
  }

  submit(values) {
    console.log(values);
    dispatch(reset('new_form'));
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
          <h3>小説の情報を入力してください。</h3>
          <p className="description">
            小説タイトルは必須です。 <br />
            問題のあると思われる内容を投稿する時は、18歳未満の閲覧を禁止にチェックを入れて下さい。
          </p>
          <hr />
          <NewForm onSubmit={this.submit} />
        </section>
      </div>
    );
  }
}

export default NewPage;
