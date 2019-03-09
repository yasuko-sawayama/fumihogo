import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs/react";
import { withViewport } from "@storybook/addon-viewport";
import FavButton from "../FavButton";

addDecorator(withViewport("iphone6"));

storiesOf("作品パネル", module)
  .addDecorator(withKnobs)
  .addDecorator(withViewport())
  .add("お気に入りボタン", () => <FavButton/>);
