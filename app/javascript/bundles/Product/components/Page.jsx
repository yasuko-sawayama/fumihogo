import React from "react";
import PropTypes from 'prop-types';

import Title from './product/Title';
import TableOfContents from './product/TableOfContents';
import Content from './product/Content';
import Description from './product/Description';
import Pager from './product/Pager';

const Page = ({ title }) => (
  <section id="page">
    <Title title={title} />
    <Description />
    <TableOfContents />
    <hr />
    <Content content="aaaaa"/>
    <Pager />
  </section>
);

export default Page;
