import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductReading from "./ProductReading";

const Product = () => (
  <Router>
    <Switch>
      <Route exact path="/products" component={ProductList} />
      <Route exact path="/users/:nickname" component={ProductList} />
      <Route
        path="/products/:productId/:pages?/:pageOrder?"
        component={ProductReading}
      />
    </Switch>
  </Router>
);

export default Product;
