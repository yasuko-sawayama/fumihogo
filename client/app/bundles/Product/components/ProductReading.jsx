import React, { Component } from "react";
import Frontend from "~/shared/components/layouts/Frontend";
import {
  Mobile,
  Tablet,
  Default
} from "~/shared/components/layouts/responsive";
import Empty from "../../../shared/components/layouts/Empty";

class ProductReading extends Component {
  render() {
    console.log(this.props.match);
    return (
      <div>
        <Mobile>
          <Empty>モバイルのなかみ</Empty>
        </Mobile>
        <Default>
          <Frontend>デフォルトのなかみ</Frontend>
        </Default>
      </div>
    );
  }
}

export default ProductReading;
