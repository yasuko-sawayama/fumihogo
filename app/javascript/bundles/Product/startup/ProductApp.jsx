import React from "react";
import { Provider } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import configureStore, { history } from "../store/productStore";

import MessageContainer from "../containers/MessageContainer";
import ProductContainer from "../containers/ProductContainer";
import EditContainer from "../containers/EditContainer";

const information = props => <h1>Information:{props}</h1>;

const targetContainer = updatable => (updatable ? EditContainer : ProductContainer);

const ProductApp = props => (
  <Provider store={configureStore(props)}>
    <ConnectedRouter history={history}>
      <div>
        <MessageContainer />
        <Switch>
          <Route path="/:id(\d+)/information" render={() => information(props.product.id)} />
          <Route path="/:id?/(.*)" component={targetContainer(props.product.auth.update)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);


export default ProductApp;
