import React from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import SpinerContainer from '../../shared/containers/SpinerContainer';
import SuccessDialog from './SuccessDialog';
import {reset} from 'redux-form';

import NewForm from './NewForm';
import Title from '../../Product/components/product/Title';
import ErrorAlert from '../../shared/components/ErrorAlert';

class NewPage extends React.Component {
  static propTypes = {
    form: PropTypes.any.isRequired,
  }

  render() {
    return(
      <div>
        <header>
          <LoadingBar />
          <ErrorAlert { ...this.props.error } /> 
        </header>
        <section id="productNewForm">
          <SpinerContainer />
          <SuccessDialog {...this.props.product} />
          <Title title='新規作成' />
          <h3>小説の情報を入力してください。</h3>
          <p className="description">
            問題のあると思われる内容を投稿する時は、18歳未満の閲覧を禁止にチェックを入れて下さい。
          </p>
          <NewForm onSubmit={this.props.actions.createProduct} />
        </section>
      </div>
    );
  }
}

export default NewPage;
