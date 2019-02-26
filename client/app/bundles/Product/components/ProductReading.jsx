import React, { Component } from "react";
import PropTypes from "prop-types";

import Frontend from "~/shared/components/layouts/Frontend";
import { Mobile, Default } from "~/shared/components/layouts/responsive";
import ContentPage from "../../../shared/components/layouts/ContentPage";

import Content from "./Content";

class ProductReading extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        product_id: PropTypes.string,
        page_order: PropTypes.string
      }).isRequired
    }).isRequired
  };

  render() {
    const {
      match: {
        params: { product_id, page_order }
      }
    } = this.props;

    return (
      <div>
        <Mobile>
          <ContentPage>
            <Content id={product_id} page={page_order}/>
          </ContentPage>
        </Mobile>
        <Default>
          <Frontend>
            <Content id={product_id} page={page_order}/>
          </Frontend>
        </Default>
      </div>
    );
  }
}

export default ProductReading;
