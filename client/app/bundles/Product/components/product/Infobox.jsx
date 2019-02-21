import React from "react";
import PropTypes from "prop-types";
import { Route, NavLink } from "react-router-dom";
import ProductButton from "./ProductButton";
import Info from "./Info";
import PageList from "./PageList";
import PageTitle from "./PageTitle";

const Author = ({ author: { id, nickname } }) => (
  <h4>
    <a href={`/users/${nickname}`}>{nickname}</a>
  </h4>
);

Author.propTypes = {
  author: PropTypes.shape().isRequired
};

const InfoBoxContent = ({ info, description }) => {
  return (
    <div className="infobox-content">
      <Info info={info}/>
      <p>{description}</p>
    </div>
  );
};

const InfoBox = ({
  product: { id, title, description, info, author, auth }
}) => (
  <div className="infobox" id={`product-${id}`}>
    <div className="infobox-inner">
      <div className="infobox-header">
        <div className="infobox-header-content">
          <h3>
            <NavLink to={`/products/${id}`} disabled={!auth.show}>
              {title}
            </NavLink>
          </h3>
          <Author author={author} />
        </div>

        <div className="infobox-header-action">
          <ProductButton auth={auth} product_id={id} />
        </div>
      </div>

      <Route exact path="*/pages" component={PageList}/>
      <Route
        exact
        path="/products/:product_id"
        render={() => <InfoBoxContent info={info} description={description}/>}
      />
      <Route
        exact
        path="/products/:product_id/pages/:page_id"
        component={PageTitle}
      />
    </div>
  </div>
);

InfoBox.propTypes = {
  product: PropTypes.shape().isRequired
};

export default InfoBox;
