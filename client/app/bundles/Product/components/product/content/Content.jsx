import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "~/shared/components/Loading.jsx";
import { fetchProductPageRequest } from "../../../../../actions";
import ContentReading from "./ContentReading";
import ContentNotFound from "./ContentNotFound";

class Content extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number
    }).isRequired,
    pageOrder: PropTypes.string.isRequired,
    fetchContent: PropTypes.func.isRequired,
    page: PropTypes.shape(),
    loading: PropTypes.bool.isRequired
  };

  static defaultProps = {
    page: null
  };

  componentDidMount() {
    const {
      fetchContent,
      pageOrder,
      product: { id }
    } = this.props;

    fetchContent(id, pageOrder);
  }

  componentDidUpdate(prevProps) {
    const {
      fetchContent,
      pageOrder,
      product: { id }
    } = this.props;

    const {
      pageOrder: pastPageOrder,
      product: { id: pastProductId }
    } = prevProps;

    if (pastPageOrder === pageOrder && pastProductId === id) return;

    fetchContent(id, pageOrder);
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
