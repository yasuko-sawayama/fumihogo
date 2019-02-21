import React, { Component } from "react";
import Frontend from "~/shared/components/layouts/Frontend";
import { Mobile, Default } from "~/shared/components/layouts/responsive";
import ContentPage from "../../../shared/components/layouts/ContentPage";

import Content from "./Content";

class ProductReading extends Component {
  render() {
    const {
      match: {
        params: { product_id }
      }
    } = this.props;
    return (
      <div>
        <Mobile>
          <ContentPage>
            <Content id={product_id} />
          </ContentPage>
        </Mobile>
        <Default>
          <Frontend>
            <Content id={product_id} />
          </Frontend>
        </Default>
      </div>
    );
  }
}

export default ProductReading;
