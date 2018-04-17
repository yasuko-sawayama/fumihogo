import React from 'react';
import { Provider } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import configureStore, { history } from '../store/productStore';

import MessageContainer from '../containers/MessageContainer';
import ProductContainer from '../containers/ProductContainer';
import EditContainer from '../containers/EditContainer'
// import TestForm from './TestForm';

const information = (props) =><h1>Information:{props}</h1>;

// route /products
// Indexからリンクで移動するとparamが含まれないためルートパスを追記

const targetContainer = updatable => (updatable ? EditContainer : ProductContainer);

const ProductApp = props => (
  <Provider store={configureStore(props)}>
    <ConnectedRouter history={history}>
      <div>
        <MessageContainer />
        <NavLink activeClassName="active" to={`/${props.product.id}`}>SHOW</NavLink> | 
        <NavLink activeClassName="active" to={`/${props.product.id}/information`}>INFORMATION</NavLink>
        <hr />
        <Switch>
          <Route path="/:id(\d+)/information" render={()=>information(props.product.id)} />
          <Route path="/:id?/(.*)" component={targetContainer(props.product.auth.update)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);


export default ProductApp;
