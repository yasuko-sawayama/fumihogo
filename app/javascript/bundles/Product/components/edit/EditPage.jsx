import React from "react";
import PropTypes from "prop-types";

import PageEditForm from "./PageEditForm";
import Pager from "../shared/Pager";

class EditPage extends React.Component {
  // static propTypes = {
  //   actions: PropTypes.arrayOf(
  //     changePage: PropTypes.func.isRequired,
  //   ).isRequired,
  //   match: PropTypes.shape({
  //     params: PropTypes.shape({
  //       pageId: PropTypes.number.isRequired,
  //     }),
  //   }),
  // }

  constructor(props) {
    super(props);

    this.targetPage = this.targetPage.bind(this);
    this.fetchContent = this.fetchContent.bind(this);
  }

  componentWillMount() {
    this.props.actions.changePage(this.props.match.params.pageId);
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
      this.props.actions.changePage(pageId);
      this.scrollToTop();
    }
  }

  targetPage(pageId, pages) {
    // Paramがない場合は常に1ページ目
    return pageId || pages[0].id;
  }

  fetchContent(pageId, pages) {
    this.props.change("content", this.props.product.content);
    this.props.actions.fetchPageContent(this.props.product.id, this.targetPage(pageId, pages));
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
