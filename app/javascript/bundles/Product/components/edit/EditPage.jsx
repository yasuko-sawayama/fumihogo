import React from 'react';
import PropTypes from 'prop-types';

import PageEditForm from './PageEditForm';
import Pager from '../product/Pager';
import { TwitterLink } from '../shared';

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
    const { pageId } = this.props.match.params;

    if (pageId && pageId !== nextProps.match.params.pageId) {
      this.props.actions.changePage(nextProps.match.params.pageId);
      this.fetchContent(nextProps.match.params.pageId, nextProps.product.pages);
    }
  }

  targetPage(pageId, pages) {
    // Paramがない場合は常に1ページ目
    return pageId || pages[0].id;
  }

  fetchContent(pageId, pages) {
    this.props.change('content', this.props.product.content);
    this.props.actions.fetchPageContent(
      this.props.product.id,
      this.targetPage(pageId, pages)
    );
  }

  render() {
    return (
      <section id="pageEdit" className="page">
        <TwitterLink url="dummy" title="dummy" />
        <PageEditForm {...this.props} />
        <Pager
          {...this.props.product.pageInfo}
          url={`/${this.props.product.id}/`}
        />
      </section>
    );
  }
}

export default EditPage;
