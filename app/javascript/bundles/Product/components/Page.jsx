import React from "react";
import PropTypes from 'prop-types';

import Title from './product/Title';
import TableOfContents from './product/TableOfContents';
import Content from './product/Content';
import Description from './product/Description';
import Pager from './product/Pager';
import { Route } from 'react-router-dom';

class Page extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
  }

  componentWillMount() {
    console.log("called");
  }

  render() {
    const pageTitle = this.props.pages.find(page => (page.id === 1)).title;

    return (
      <section id="page" className="page">
        <Title title={this.props.title} />
        <Description
          description={this.props.description}
          author={this.props.author}
          about={this.props.about}
          />
        { this.props.about.pageCount > 1 && <TableOfContents pages={this.props.pages} url={this.props.url} /> }
        <hr />
        <Content
          content={this.props.content}
          pageTitle={pageTitle}
          fetchPageContent={this.props.actions.fetchPageContent}
          />
        <Pager {...this.props.pageInfo} url={this.props.url} />
      </section>
    );
  }
}

export default Page;
