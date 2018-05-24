import React from "react";
import PropTypes from "prop-types";

import PageEditForm from "./PageEditForm";
import Pager from "../shared/Pager";

class EditPage extends React.Component {
  static defaultProps = {
    match: {}
  };

  static propTypes = {
    actions: PropTypes.arrayOf(PropTypes.func).isRequired,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      pages: PropTypes.array.isRequired,
      pageInfo: PropTypes.shape().isRequired
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        pageId: PropTypes.number.isRequired
      })
    })
  };

  static targetPage(pageId, pages) {
    // Paramがない場合は常に1ページ目
    if (!pageId) {
      return pages[0];
    }
    return pages.find(page => page.position === Number(pageId)) || pages[0];
  }

  constructor(props) {
    super(props);

    this.fetchContent = this.fetchContent.bind(this);
  }

  componentWillMount() {
    this.fetchContent(this.props.match.params.pageId, this.props.product.pages);
  }

  componentWillReceiveProps(nextProps) {
    const {
      product: { pages },
      match: {
        params: { pageId }
      }
    } = nextProps;

    if (pageId && this.props.match.params.pageId !== pageId) {
      this.fetchContent(pageId, pages);
    }
  }

  fetchContent(pageId, pages) {
    this.props.actions.fetchPageContent(
      this.props.product.id,
      EditPage.targetPage(pageId, pages).position
    );
  }

  render() {
    return (
      <section id="pageEdit" className="page">
        <PageEditForm {...this.props} />
        <Pager {...this.props.product.pageInfo} url={`/${this.props.product.id}/`} />
      </section>
    );
  }
}

export default EditPage;
