import React from 'react';
import { Provider } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import configureStore, { history } from '../store/productStore';

import MessageContainer from '../containers/MessageContainer';
import ProductContainer from '../containers/ProductContainer';

const information = (props) =><h1>Information:{props}</h1>;

// route /products
// Indexからリンクで移動するとparamが含まれないためルートパスを追記
        
const ProductApp = props => (
  <Provider store={configureStore(props)}>
    <ConnectedRouter history={history}>
      <div>
        <MessageContainer />
        <NavLink activeClassName="active" to={`/${props.product.id}`}>SHOW</NavLink> | 
        <NavLink activeClassName="active" to={`/${props.product.id}/information`}>INFORMATION</NavLink>
        <hr />
        <Route path="/:id(\d+)/information" render={()=>information(props.product.id)} />
        <Route path="/:id(\d+)/pages/" component={ProductContainer} />
        <Route exact path="/:id(\d+)/" component={ProductContainer} />
        <Route exact path="/" component={ProductContainer} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default ProductApp;
