/* eslint import/no-extraneous-dependencies: off */
/* eslint no-console: off */
import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

import { withKnobs, array } from "@storybook/addon-knobs/react";
import { withViewport } from "@storybook/addon-viewport";
import Paginate from "../Paginate";

addDecorator(withViewport("iphone6"));

storiesOf("ページパーツ", module)
  .addDecorator(withKnobs)
  .addDecorator(withViewport())
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/", "products"]}>{story()}</MemoryRouter>
  ))
  .add("ページング", () => (
    <Paginate
      pages={array("ページ一覧", [1, 2, 3, 4, 5])}
      currentPage={1}
      productId={1}
      history={{ push: () => console.log("called!") }}
    />
  ));
