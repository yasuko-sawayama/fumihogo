import React from "react";
import PropTypes from "prop-types";

const PanelAction = ({ icon, title, onClick }) => (
  <div className="panel-action" onClick={onClick}>
    <div className="panel-action-inner">
      {icon ? <i className="md-icon">{icon}</i> : ""}

      {title ? <strong>{title}</strong> : ""}
    </div>
  </div>
);

PanelAction.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
};

PanelAction.defaultProps = {
  icon: null,
  title: null,
  onClick: null
};

export default PanelAction;
