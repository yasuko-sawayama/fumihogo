import React from 'react';
import { Provider } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import configureStore, { history } from '../store/productStore';

import ProductContainer from '../containers/ProductContainer';
import PostProductContainer from '../containers/PostProductContainer';

const information = (props) =><h1>Information:{props}</h1>;

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const ProductApp = props => (
  <Provider store={configureStore(props)}>
    <ConnectedRouter history={history}>
      <div>
        <NavLink activeClassName="active" to="/new" >新規作成</NavLink>|
        { this.props && <NavLink activeClassName="active" to={`/${props.product.id}`}>SHOW</NavLink> }
        { this.props && <NavLink activeClassName="active" to={`/${props.product.id}/information`}>INFORMATION</NavLink> }
        <hr />
        <Route exact path="/new" component={PostProductContainer} />
        { this.props && <Route path="/:id(\d+)/information" render={()=>information(props.product.id)} /> }
        { this.props && <Route exact path="/:id/pages/:pageId/" component={ProductContainer} /> }
        { this.props && <Route exact path="/:id/" component={ProductContainer} /> }
      </div>
    </ConnectedRouter>
  </Provider>
);

export default ProductApp;
