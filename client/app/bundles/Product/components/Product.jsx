import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontend from "~/shared/components/layouts/Frontend";
import ProductList from "./ProductList";
import ProductReading from "./ProductReading";

const Product = () => {
  return (
    <Router>
      <Frontend title="やすこの作品一覧">
        <div className="content-inner">
          <Switch>
            <Route path="/" component={ProductList} />
            <Route path="/:product_id" component={ProductReading} />
          </Switch>
        </div>
      </Frontend>
    </Router>
  );
};

export default Product;
