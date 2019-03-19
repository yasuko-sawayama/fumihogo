import React from "react";
import PropTypes from "prop-types";

const Author = ({ author: { id, nickname } }) => (
  <h4>
    <a href={`/users/${nickname}`} id={`author-${id}`}>
      {nickname}
    </a>
  </h4>
);

Author.propTypes = {
  author: PropTypes.shape().isRequired
};

export default Author;
