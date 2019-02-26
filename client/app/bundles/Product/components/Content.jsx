import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import InfoBox from "./product/Infobox";
import { fetchProductRequest } from "../../../actions";

class Content extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    console.log(this.props);
    this.props.fetchContent(this.props.id);
  }

  componentDidUpdate() {
    console.log(this.props);
    this.props.fetchContent(this.props.id);
  }

  render() {
    return (
      <div>
        <InfoBox product={this.props.product}/>
        <Switch>
          <Route path="/pages/:page_order" render={() => <div>なかみ1</div>}/>
          <Route path="/" render={() => <div>なかみ</div>}/>
        </Switch>
      </div>
    );
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
  fetchContent: id => dispatch(fetchProductRequest(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
