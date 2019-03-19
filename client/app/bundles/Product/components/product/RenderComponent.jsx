import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Responsive from "~/shared/components/layouts/responsive.jsx";
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
    <Responsive>
      <InnerContent {...props} />
      <Paginate
        history={props.history}
        productId={props.product.id}
        pages={props.product.pages}
        currentPage={currentPageId}
      />
    </Responsive>
  )
};

RenderComponent.propTypes = {
  product: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired
};

export default RenderComponent;
