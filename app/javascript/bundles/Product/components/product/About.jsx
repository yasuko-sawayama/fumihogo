import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import TableOfContents from './TableOfContents';
import Description from './Description';

const productUrl = id => `/${id}/`;

const About = ({
  product: {
    id,
    title,
    description,
    author,
    about,
    pages,
  },
}) => (
  <section id="about">
    <Title title={title} />
    <Description
      description={description}
      author={author}
      about={about}
    />
    { about.pageCount > 1 && <TableOfContents pages={pages} url={productUrl(id)} /> }
  </section>
);

About.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    about: PropTypes.shape({
      pageCount: PropTypes.number.isRequired,
    }).isRequired,
    pages: PropTypes.array,
  }).isRequired,
};

export default About;
