import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Frontend from "~/shared/components/layouts/Frontend";
import { Default, Mobile } from "~/shared/components/layouts/responsive";
import ContentPage from "~/shared/components/layouts/ContentPage";
import InfoBox from "./infoBox";
import Content from "./content";

const InnerContent = ({ product, path }) => (
  <div>
    <InfoBox product={product}/>
    <Switch>
      <Route path={`${path}/pages/:page_order`} component={Content}/>
      <Route exact path={`${path}/`} component={Content}/>
    </Switch>
  </div>
);

InnerContent.propTypes = {
  product: PropTypes.shape(),
  path: PropTypes.string.isRequired
};

InnerContent.defaultProps = {
  product: null
};

const RenderComponent = props => (
  <div>
    <Mobile>
      <ContentPage>
        <InnerContent {...props} />
      </ContentPage>
    </Mobile>
    <Default>
      <Frontend>
        <InnerContent {...props} />
      </Frontend>
    </Default>
  </div>
);

export default RenderComponent;
