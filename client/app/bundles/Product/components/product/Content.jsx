import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchProductRequest } from "../../../../actions";

class Content extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}).isRequired
    }).isRequired
  };

  componentDidMount() {
    const {
      match: {
        params: { page_order }
      },
      product: { id }
    } = this.props;

    this.props.fetchContent(id, page_order);
  }

  componentDidUpdate() {
    const {
      match: {
        params: { page_order }
      },
      product: { id }
    } = this.props;

    this.props.fetchContent(id, page_order);
  }

  render() {
    return <div>aaaaa</div>;
  }
}

Content.propTypes = {
  fetchContent: PropTypes.func.isRequired,
  product: PropTypes.shape().isRequired
};

const mapStateToProps = state => ({
  product: state.productData.currentProduct
});

const mapDispatchToProps = dispatch => ({
  fetchContent: (id, page) => dispatch(fetchProductRequest(id, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
