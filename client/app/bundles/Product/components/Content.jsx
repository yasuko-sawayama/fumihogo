import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProductRequest } from "~/actions"
import InfoBox from "./product/Infobox";

const fetchContent = id => console.log("aaaaaaa") || { test: "test" };

class Content extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.fetchProductRequest(this.props.id)
  }

  componentDidUpdate() {
    console.log(this.props)
    fetchContent(this.props.id);
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

const mapStateToProps = state => ({
  product: state.productData.currentProduct
});

const mapDispatchToProps = {
  fetchProductRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
