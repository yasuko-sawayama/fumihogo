import React from "react";
import PropTypes from 'prop-types';

import Content from './Content';
import Pager from './Pager';

class Page extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      pageInfo: PropTypes.object.isRequired,
      currentPage: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  }

  constructor(props) {
    super(props)

    this.fetchContent = this.fetchContent.bind(this);
    this.targetPage = this.targetPage.bind(this);
  }

  componentWillMount() {
    this.props.actions.changePage(this.props.match.params.pageId);
    this.fetchContent(this.props.match.params.pageId, this.props.product.pages);
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.match.params.pageId !== nextProps.match.params.pageId) {
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
    return (
      <section id="page" className="page">
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
