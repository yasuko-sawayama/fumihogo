import React from "react";
import PropTypes from "prop-types";

import NewPageForm from "./newPage/NewPageForm";

const NewPage = ({ product, actions }) => (
  <section id="newPage">
    <h2 className="text-info">新しいページを追加</h2>
    <br />
    <NewPageForm {...product} submitPage={actions.postPage} />
  </section>
);

export default NewPage;
