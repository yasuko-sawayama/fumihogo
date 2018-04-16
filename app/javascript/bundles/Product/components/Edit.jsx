import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import ReactLoading from 'react-loading';
import {Field} from 'redux-form';
import { Button } from 'react-bootstrap'

import SpinerContainer from '../../shared/containers/SpinerContainer';
import About from './edit/About';
import Page from './product/Page';
import NewPage from './product/NewPage'
import InfoAlert from '../../shared/components/InfoAlert';

class Edit extends React.Component {
  static propTypes = {
    product: PropTypes.any.isRequired,
  };

  componentWillMount() {
    this.props.actions.fetchProduct(this.props.product.id);
  }

  componentWillReceiveProps(nextProp) {
    if(this.props.product.id !== nextProp.product.id) {
      this.props.actions.fetchProduct(nextProp.product.id);
    }
  }

  render() {
    console.log(this.props)
    const {
      values,
      handleSubmit,
      pristine,
      submitting
    } = this.props;

    const { id } = this.props.product;
    
    return (
      <div>
        <LoadingBar />
        <section id="product">
          <SpinerContainer />
          <InfoAlert
            message="各項目をクリックすると変更できます."
            />
          <form onSubmit={handleSubmit((values) => this.props.actions.updateProduct(values, { id }))} >

            <Button bsStyle="primary"
                    type="submit"
                    disabled={pristine || submitting} >
              変更を保存
            </Button>

          <About {...this.props} />
          <hr />
          { this.props.product.auth.update && 
            <Route path={`${this.props.match.url}/new/`}
                   render={ props => <NewPage {...props}
                                                product={this.props.product}
                                              actions={this.props.actions} /> }
              /> }
           <Route path={`${this.props.match.url}/:pageId(\\d+)/`}
                   render={ props => <Page {...props}
                                             product={this.props.product}
                                           actions={this.props.actions} /> }
                   />
           <Route exact path={`${this.props.match.url}/`}
                     render={ props => <Page {...props}
                                               product={this.props.product}
                                             actions={this.props.actions} />}
             />
          </form>
        </section>
      </div>
    );
  }
};

export default Edit;
