import { configure, addDecorator } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { configureViewport } from '@storybook/addon-viewport';

// import "./particles.scss";
import "../../app/assets/stylesheets/application.scss";
addDecorator(withNotes);

const req = require.context("../app", true, /\.stories\.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
