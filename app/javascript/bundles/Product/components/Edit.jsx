import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import ReactLoading from 'react-loading';
import {Field} from 'redux-form';
import { Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

import SpinerContainer from '../../shared/containers/SpinerContainer';
import About from './edit/About';
import Page from './product/Page';
import NewPage from './edit/NewPage'
import InfoAlert from '../../shared/components/InfoAlert';
import PageEditContainer from '../containers/PageEditContainer';

import { pageDestroy } from '../actions/pageDestroyActionCreators';

class Edit extends React.Component {
  static propTypes = {
    product: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleDestroy = this.handleDestroy.bind(this);
  }

  componentWillMount() {
    this.props.actions.fetchProduct(this.props.product.id);
  }

  componentWillReceiveProps(nextProp) {
    if(this.props.product.id !== nextProp.product.id) {
      this.props.actions.fetchProduct(nextProp.product.id);
    }
  }

  handleDestroy() {
    this.props.actions.pageDestroy(this.props.product.id, this.props.product.currentPage);
  }

  render() {
    const {
      values,
      dirty,
      reset,
      handleSubmit,
      pristine,
      submitting
    } = this.props;

    const { id } = this.props.product;

    const TrashButton = styled(Button)`
.fa {
margin: 0;
}
`;
    
    const SubmitButton = () => (
      <div>
        <Button bsStyle="primary"
                type="submit"
                disabled={pristine || submitting} >
          変更を保存
        </Button>
        {' '}
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">
          キャンセル
        </button>
        <TrashButton bsStyle="default" onClick={this.handleDestroy} className="pull-right">
          <FontAwesome name="trash" />
        </TrashButton>
      </div>
    );
    
    return (
      <div>
        <LoadingBar />
        <section id="product">
          <SpinerContainer />
          <InfoAlert
            message="各項目をクリックすると変更できます."
            />
          <form onSubmit={handleSubmit((values) => this.props.actions.updateProduct(values, { id }))} >
            <SubmitButton />
            <About {...this.props} />
          </form>
          <hr />
          <Switch>
            <Route path={`/${id}/pages/new/`}
                   render={ props => <NewPage {...props}
                                                product={this.props.product}
                                              actions={this.props.actions} /> }
              />
           <Route path={`/${id}/:pages?/:pageId(\\d+)?/`}
                  component={PageEditContainer}
                   />
           <Route path='/' component={PageEditContainer} />
          </Switch>
        </section>
      </div>
    );
  }
};

export default Edit;
