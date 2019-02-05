import PropTypes from 'prop-types';
import React from 'react';


import Styles from './CssModulesImagesFontsExample.scss';

const HelloWorld = ({ name, updateName }) => (
  <div>
    <h1 className={Styles.heading}>This should be open sans light</h1>
    <h3>
      Hello, {name}!
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HelloWorld;
