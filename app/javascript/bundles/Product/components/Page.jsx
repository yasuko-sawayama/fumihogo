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
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired,
    }),
    actions: PropTypes.object.isRequired,
  }

  componentWillMount() {
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.props.actions.changePage(nextProps.match.params.pageId);
  }

  render() {
    const pageTitle = this.props.product.pages.find(page => (page.id === 1)).title;
    const productUrl = `/${this.props.product.id}/`;
    
    return (
      <section id="page" className="page">
        <Title title={this.props.product.title} />
        <Description
          description={this.props.product.description}
          author={this.props.product.author}
          about={this.props.product.about}
          />
        { this.props.product.about.pageCount > 1 && <TableOfContents pages={this.props.product.pages} url={productUrl} /> }
        <hr />
        <Content
          productId={this.props.product.id}
          pageId={this.props.product.currentPage}
          pageTitle={pageTitle}
          content={this.props.product.content}
          fetchPageContent={this.props.actions.fetchPageContent}
          />
        <Pager {...this.props.product.pageInfo} url={productUrl} />
      </section>
    );
  }
}

export default Page;
