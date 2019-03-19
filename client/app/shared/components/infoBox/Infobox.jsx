import React from "react";
import PropTypes from "prop-types";
import { Route, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import InfoBoxContent from "./InfoBoxContent";
import Author from "./Author";
import { Favorite } from "./favorite";
import ProductButton from "./ProductButton";
import PageList from "../../../bundles/Product/components/product/PageList";
import PageTitle from "../../../bundles/Product/components/product/PageTitle";
import ProductNotFound from "../../../bundles/Product/components/product/ProductNotFound";

const InfoBox = props => {
  if (!props.product) {
    return <ProductNotFound />;
  }

  const {
    match: { path },
    product: { id, title, description, info, author, auth, favorite }
  } = props;

  const pageLink = () => {
    if (!auth.show) return <span className="disabled">({title})</span>
    if (path.match(/products/)) {
      return (
        <NavLink to={`/products/${id}`} disabled={!auth.show}>
          {title}
        </NavLink>
      );
    }
    return (
      <a href={`/products/${id}`} >
        {title}
      </a>
    );
  };

  return (
    <div className="infobox" id={`product-${id}`}>
      <div className="infobox-inner">
        <div className="infobox-header">
          <div className="infobox-header-content">
            <h3>{pageLink()}</h3>
            <Author author={author} />
            <Route
              exact
              path="/products/:product_id/pages/:page_order"
              component={PageTitle}
            />
          </div>

          <div className="infobox-header-action">
            <ProductButton auth={auth} product_id={id} />
          </div>
        </div>
        <Route exact path="*/pages" component={PageList} />
        <div className="infobox-meta">
          <ul>
            <li>
              <Favorite
                count={favorite.count}
                faved={favorite.faved}
                productId={id}
              />
            </li>
          </ul>
        </div>

        <Route
          exact
          path="/products/:product_id"
          render={() => (
            <InfoBoxContent info={info} description={description} />
          )}
        />
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  product: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired
};

export default withRouter(InfoBox);
