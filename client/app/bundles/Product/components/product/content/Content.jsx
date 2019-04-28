import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "~/shared/components/Loading.jsx";
import { fetchProductPageRequest } from "../../../../../actions";
import ContentReading from "./ContentReading";
import ContentNotFound from "./ContentNotFound";

class Content extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        page_order: PropTypes.number
      }).isRequired
    }).isRequired
  };

  componentDidMount() {
    const {
      fetchContent,
      match: {
        params: { page_order }
      },
      product: { id }
    } = this.props;

    fetchContent(id, page_order);
  }

  componentDidUpdate(prevProps) {
    const {
      fetchContent,
      match: {
        params: { page_order }
      },
      product: { id }
    } = this.props;

    if (
      prevProps.match.params.page_order === page_order &&
      prevProps.product.id === id
    )
      return;

    fetchContent(id, page_order);
  }

  render() {
    const {
      loading,
      page,
      page: { content }
    } = this.props;

    if (loading) return <Loading />;

    return page ? <ContentReading content={content} /> : <ContentNotFound />;
  }
}

Content.propTypes = {
  fetchContent: PropTypes.func.isRequired,
  product: PropTypes.shape().isRequired,
  page: PropTypes.shape(),
  loading: PropTypes.bool.isRequired
};

Content.defaultProps = {
  page: null
};

const mapStateToProps = state => ({
  product: state.productData.currentProduct,
  page: state.productData.currentPage,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchContent: (id, page) => dispatch(fetchProductPageRequest(id, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
