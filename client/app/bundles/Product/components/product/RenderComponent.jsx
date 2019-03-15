import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Frontend from "~/shared/components/layouts/Frontend";
import { Default, Mobile } from "~/shared/components/layouts/responsive";
import ContentPage from "~/shared/components/layouts/ContentPage";
import InfoBox from "../../../../shared/components/infoBox";
import Content from "./content";
import Paginate from "./Paginate";

const InnerContent = ({ product, path }) => (
  <div>
    <InfoBox product={product} />
    <Switch>
      <Route path={`${path}/pages/:page_order`} component={Content} />
      <Route exact path={`${path}/`} component={Content} />
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

const RenderComponent = props => {
  const currentPageId =
    props.product && props.product.currentPage && props.product.currentPage.id;

  return (
    <div>
      <Mobile>
        <ContentPage>
          <InnerContent {...props} />
          <Paginate
            history={props.history}
            productId={props.product.id}
            pages={props.product.pages}
            currentPage={currentPageId}
          />
        </ContentPage>
      </Mobile>
      <Default>
        <Frontend>
          <InnerContent {...props} />
          <Paginate
            history={props.history}
            productId={props.product.id}
            pages={props.product.pages}
            currentPage={currentPageId}
          />
        </Frontend>
      </Default>
    </div>
  );
};

export default RenderComponent;
