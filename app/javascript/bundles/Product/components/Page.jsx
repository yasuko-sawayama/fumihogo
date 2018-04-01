import React from "react";
import PropTypes from 'prop-types';

import Title from './product/Title';
import TableOfContents from './product/TableOfContents';
import Content from './product/Content';
import Description from './product/Description';
import Pager from './product/Pager';
import { Route } from 'react-router-dom';

const Page = ({
  id,
  title,
  description,
  currentPage,
  author,
  about,
  content,
  pages,
  pageInfo,
  path,
  url
}) => {
  const pageTitle = pages.find((page)=>{return page.id === 1}).title;
  
  return (
    <section id="page" className="page">
      <Title title={title} />
      <Description
        description={description}
        author={author}
        about={about}
        />
      { about.pageCount > 1 && <TableOfContents pages={pages} url={url} /> }
      <hr />
      <Route exact path={`${path}/`} render={()=> <Content content={content} pageTitle={pageTitle} />} />
      <Route path={`${path}/pages/:page_id/`} render={()=> <Content content={content} pageTitle={pageTitle} />} />
      <Pager {...pageInfo} url={url} />
    </section>
  );
}

export default Page;
