import { configure, addDecorator } from "@storybook/react";

import { withNotes } from "@storybook/addon-notes";
import "./particles.scss";

addDecorator(withNotes);

function loadStories() {
  require("../stories/index.js");
  // You can require as many stories as you need.
}

configure(loadStories, module);
