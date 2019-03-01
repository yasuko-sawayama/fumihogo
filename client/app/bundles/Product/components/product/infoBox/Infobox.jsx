import React from "react";
import PropTypes from "prop-types";
import { Route, NavLink } from "react-router-dom";

import InfoBoxContent from "./InfoBoxContent";
import Author from "./Author";
import ProductButton from "../ProductButton";
import PageList from "../PageList";
import PageTitle from "../PageTitle";
import ProductNotFound from "../ProductNotFound";

const InfoBox = props => {
  if (!props.product) {
    return <ProductNotFound/>;
  }

  const {
    product: { id, title, description, info, author, auth }
  } = props;

  return (
    <div className="infobox" id={`product-${id}`}>
      <div className="infobox-inner">
        <div className="infobox-header">
          <div className="infobox-header-content">
            <h3>
              <NavLink to={`/products/${id}`} disabled={!auth.show}>
                {title}
              </NavLink>
            </h3>
            <Author author={author}/>
          </div>

          <div className="infobox-header-action">
            <ProductButton auth={auth} product_id={id}/>
          </div>
        </div>

        <Route exact path="*/pages" component={PageList}/>
        <Route
          exact
          path="/products/:product_id"
          render={() => (
            <InfoBoxContent info={info} description={description}/>
          )}
        />
        <Route
          exact
          path="/products/:product_id/pages/:page_order"
          component={PageTitle}
        />
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  product: PropTypes.shape().isRequired
};

export default InfoBox;
