import React from "react";
import Frontend from "../../../shared/components/layouts/Frontend";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <Frontend title="やすこの作品一覧">
      <ProductList/>
    </Frontend>
  );
};

export default Product;
