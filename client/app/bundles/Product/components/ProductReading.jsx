import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Frontend from "~/shared/components/layouts/Frontend";
import { Default, Mobile } from "~/shared/components/layouts/responsive";
import ContentPage from "../../../shared/components/layouts/ContentPage";
import InfoBox from "./product/Infobox";
import Content from "./product/Content";

const ProductReading = ({ match: { path } }) => {
  const InnerContent = () => (
    <div>
      <InfoBox/>
      <Switch>
        <Route path={`${path}/pages/:page_order`} component={Content}/>
        <Route exact path={`${path}/`} component={Content}/>
      </Switch>
    </div>
  );

  return (
    <div>
      <Mobile>
        <ContentPage>
          <InnerContent/>
        </ContentPage>
      </Mobile>
      <Default>
        <Frontend>
          <InnerContent/>
        </Frontend>
      </Default>
    </div>
  );
};

ProductReading.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
};

export default ProductReading;
