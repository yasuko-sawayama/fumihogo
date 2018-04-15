import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

import Title from './Title';
import TableOfContents from './TableOfContents';
import Description from './Description';

const productUrl = id => `/${id}/`;

const ButtonCol = styled(Col)`
padding-top: 20px;
`;

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
    <Row>
      <div className="col-sm-10">
        { about.pageCount > 1 && <TableOfContents pages={pages} url={productUrl(id)} /> }
      </div>
      <ButtonCol sm={2}>
        <LinkContainer to={`${productUrl(id)}pages/new`} >
          <Button bsStyle="primary">
            <FontAwesome name="plus-square"/>
            ページ追加
          </Button>
        </LinkContainer>
      </ButtonCol>
    </Row>
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
