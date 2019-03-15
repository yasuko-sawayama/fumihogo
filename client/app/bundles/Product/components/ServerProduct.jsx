import React from "react";
import { StaticRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductReading from "./ProductReading";

const Product = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/products" component={ProductList}/>
        <Route exact path="/users/:nickname" component={ProductList}/>
        <Route path="/products/:product_id" component={ProductReading}/>
      </Switch>
    </Router>
  );
};

export default Product;