import React from "react";
import PropTypes from 'prop-types';

import Title from './product/Title';
import TableOfContents from './product/TableOfContents';
import Content from './product/Content';
import Description from './product/Description';
import Pager from './product/Pager';

const Page = ({ title, description, author, about }) => (
  <section id="page">
    <Title title={title} />
    <Description
      description={description}
      author={author}
      about={about}
      />
    <TableOfContents />
    <hr />
    <Content content="aaaaa"/>
    <Pager />
  </section>
);

export default Page;
