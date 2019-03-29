/* eslint import/no-extraneous-dependencies: off */
/* eslint no-alert: off */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";

import { withKnobs, boolean, number } from "@storybook/addon-knobs/react";
import { withViewport } from "@storybook/addon-viewport";
import FavButton from "../favorite/FavButton";
import Edit from "../edit/Edit";

addDecorator(withViewport("iphone6"));

storiesOf("作品パネル", module)
  .addDecorator(withKnobs)
  .addDecorator(withViewport())
  .add("お気に入りボタン", () => (
    <FavButton
      count={number("お気に入り数", 0)}
      faved={boolean("お気に入り", true)}
      handleClick={() => alert("faved!")}
    />
  ))
  .add("編集ボタン", () => (
    <Edit productId={1} auth={{ update: boolean("編集可能", true) }} />
  ));
