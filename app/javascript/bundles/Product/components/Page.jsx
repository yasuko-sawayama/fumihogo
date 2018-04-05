import React from "react";
import PropTypes from 'prop-types';

import Title from './product/Title';
import TableOfContents from './product/TableOfContents';
import Content from './product/Content';
import Description from './product/Description';
import Pager from './product/Pager';

class Page extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.object.isRequired,
      about: PropTypes.string,
      pageInfo: PropTypes.object.isRequired,
      currentPage: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  }
  
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.actions.changePage(this.props.match.params.pageId);
    this.fetchContent(this.props.match.params.pageId, this.props.product.pages);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pageId &&
        this.props.match.params.pageId !== nextProps.match.params.pageId) {
      this.fetchContent(nextProps.match.params.pageId, nextProps.product.pages);
      this.props.actions.changePage(nextProps.match.params.pageId)
    }
  }
  
  targetPage(pageId, pages) {
    // Paramがない場合は常に1ページ目
    return pages.find((page) => page.id === Number(pageId)) || pages[0];
  };

  fetchContent(pageId, pages) {
    this.props.actions.fetchPageContent(this.targetPage(pageId, pages).api);
  };

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
          pageId={this.props.product.currentPage}
          pageTitle={this.props.product.pageInfo.pageTitle}
          totalPage={this.props.product.about.pageCount}
          content={this.props.product.content}
          />
        <Pager {...this.props.product.pageInfo} url={`/${this.props.product.id}/`} />
      </section>
    );
  }
}

export default Page;
