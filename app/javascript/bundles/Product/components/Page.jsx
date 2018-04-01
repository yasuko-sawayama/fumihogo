import React from "react";
import PropTypes from 'prop-types';

import Title from './product/Title';
import TableOfContents from './product/TableOfContents';
import Content from './product/Content';
import Description from './product/Description';
import Pager from './product/Pager';
import { Route } from 'react-router-dom';

const Page = ({ id,
                title,
                description,
                author,
                about,
                content,
                pages,
                pageInfo,
                path,
                url
              }) => (
  <section id="page" className="page">
    <Title title={title} />
    <Description
      description={description}
      author={author}
      about={about}
      />
    { about.pageCount > 1 && <TableOfContents pages={pages} url={url} /> }
    <hr />
    <Route exact path={`${path}/`} render={()=> <Content content={content} />} />
    <Route path={`${path}/pages/:page_id/`} render={()=> <Content content={content} />} />
    <Pager {...pageInfo} url={url} />
  </section>
);

export default Page;
