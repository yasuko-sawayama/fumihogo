import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

import Product from "../Product";
import ProductList from "../ProductList";

storiesOf("作品ページ", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/", "products"]}>{story()}</MemoryRouter>
  ))
  .add("基本レイアウト", () => <Product/>)
  .add("作品リスト", () => <ProductList/>);