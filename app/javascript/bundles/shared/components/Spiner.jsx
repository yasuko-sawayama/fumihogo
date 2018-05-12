import React from "react";
import PropTypes from "prop-types";

import InnerSpiner from "./spiner/InnerSpiner";

class Spiner extends React.Component {
  static propTypes = {
    loading: PropTypes.shape({
      content: PropTypes.number
    })
  }

  render() {
    return (
      this.props.loading.content > 0 && <InnerSpiner />
    );
  }
}

export default Spiner;
