import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

import "../app/assets/styles/test.scss"

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
))
.add(
  'with some emoji',
  () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Button>
  ),
  { notes: 'A very simple component' }
);