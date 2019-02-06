import { configure, addDecorator } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import "./particles.scss";

addDecorator(withNotes);

const req = require.context('../app', true, /\.stories\.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
