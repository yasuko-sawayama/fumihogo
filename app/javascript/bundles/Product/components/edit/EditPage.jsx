import React from "react";
import PropTypes from 'prop-types';

import PageEditForm from './PageForm';

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
    
    if ( pageId && pageId !== nextProps.match.params.pageId) {
      this.fetchContent(nextProps.match.params.pageId, nextProps.product.pages);
      this.props.actions.changePage(nextProps.match.params.pageId)
    }
  }

  targetPage(pageId, pages) {
    // Paramがない場合は常に1ページ目
    return pages.find((page) => page.id === Number(pageId)) || pages[0];
  };

  fetchContent(pageId, pages) {
    this.props.actions.fetchPageContent(this.props.product.id, this.targetPage(pageId, pages).id);
    this.props.change('content', this.props.product.content)
  };

  render () {
    return (
      <section id="pageEdit" className="page">
        <PageEditForm {...this.props} />
      </section>
    )
  }
}

export default EditPage;
