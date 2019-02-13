import React from "react";
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductList from "./ProductList";

const Product = () => {
  return (
<Router>
<Switch>
  <Route path="/" component={ProductList} />
</Switch>
</Router>
  );
};

export default Product;
