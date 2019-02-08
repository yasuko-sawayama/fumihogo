import React from "react";
import PropTypes from "prop-types";

// import Breadcrumbs from "../helpers/Breadcrumbs";
import Shortcuts from "../ui/Shortcut";

const PageTitle = ({title}) =>
     (
      <div className="page-title">
          {/*<Breadcrumbs/>*/}

          <h1>{title}</h1>

          <Shortcuts/>
      </div>
    );


PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageTitle