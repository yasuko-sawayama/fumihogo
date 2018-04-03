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

  constructor(props) {
    super(props);

    this.state = { contentPage: this.setPage(this.props.match.params.pageId, this.props.product.pages) }
  }

  componentWillMount() {
    this.props.actions.changePage(this.props.match.params.pageId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pageId &&
        this.props.match.params.pageId !== nextProps.match.params.pageId) {
      this.setState({contentPage: this.setPage(nextProps.match.params.pageId, nextProps.product.pages)});
      this.props.actions.changePage(nextProps.match.params.pageId);
    }
  }

  setPage(pageId, pages) {
    // Paramがない場合は常に1ページ目
    return pages.find((page) => page.id === Number(pageId)) || pages[0];
  }

  render() {
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
          pageTitle={this.props.product.pageInfo.pageTitle}
          content={this.props.product.content}
          url={this.state.contentPage.api}
          fetchPageContent={this.props.actions.fetchPageContent}
          />
        <Pager {...this.props.product.pageInfo} url={productUrl} />
      </section>
    );
  }
}

export default Page;
