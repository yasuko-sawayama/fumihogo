/* eslint import/no-extraneous-dependencies: off */
import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withViewport } from "@storybook/addon-viewport";
import Loading from "../Loading";

addDecorator(withViewport("iphone6"));

storiesOf("ロード", module)
  .addDecorator(withKnobs)
  .addDecorator(withViewport())
  .add("ロード中", () => <Loading />);

/* eslint-enable */
