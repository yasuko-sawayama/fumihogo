import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import ProductButton from "./ProductButton";
import Info from "./Info";
import PageList from "./PageList";

const Author = ({ author: { id, nickname } }) => (
  <h4>
    <a href={`/users/${nickname}`}>{nickname}</a>
  </h4>
);

Author.propTypes = {
  author: PropTypes.shape().isRequired
};

const InfoBox = ({
  product: { id, title, description, info, author, auth }
}) => (
  <div className="infobox" id={`product-${id}`}>
    <div className="infobox-inner">
      <div className="infobox-header">
        <div className="infobox-header-content">
          <h3>{title}</h3>
          <Author author={author} />
        </div>

        <div className="infobox-header-action">
          <ProductButton auth={auth} product_id={id} />
        </div>
      </div>

      <Route path="*/pages" component={PageList} />

      <div className="infobox-content">
        <Info info={info} />
        <p>{description}</p>
      </div>
    </div>
  </div>
);

InfoBox.propTypes = {
  product: PropTypes.shape().isRequired
};

export default InfoBox;
