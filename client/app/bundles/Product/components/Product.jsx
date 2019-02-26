import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductReading from "./ProductReading";

const Product = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/users/:nickname" component={ProductList} />
        <Route path="/products/:product_id" component={ProductReading} />
      </Switch>
    </Router>
  );
};

export default Product;
