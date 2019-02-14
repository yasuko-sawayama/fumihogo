import React from "react";
import PropTypes from "prop-types";

import ProductButton from "./ProductButton";
import Info from "./Info";

const Author = ({ author: { id, nickname } }) => (
  <h4>
    <a href={`/users/${id}`}>{nickname}</a>
  </h4>
);

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
          <ProductButton auth={auth} to={`/products/${id}`} />
        </div>
      </div>
      <div className="infobox-content">
        <Info info={info} />
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default InfoBox;
