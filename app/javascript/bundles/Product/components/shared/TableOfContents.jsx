import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";
import onClickOutside from "react-onclickoutside";
import FA from "react-fontawesome";
import styled from "styled-components";

import InnerTable from "./tableOfContents/InnerTable";

const StyledPanel = styled(Panel)`
  margin-top: 20px;
  .panel-title {
    cursor: pointer;
  }
`;

class TableOfContents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      allowIcon: "toggle-up"
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  // react-onclickoutside用設定
  handleClickOutside() {
    this.setState({ open: false, allowIcon: "toggle-down" });
  }

  togglePanel() {
    this.setState({
      open: !this.state.open,
      allowIcon: this.state.open ? "toggle-down" : "toggle-up"
    });
  }

  render() {
    return (
      <div id="pagePanel">
        <StyledPanel expanded={this.state.open}>
          <Panel.Heading>
            <Panel.Title onClick={this.togglePanel}>
              もくじ
              <FA name={this.state.allowIcon} />
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <InnerTable {...this.props} />
          </Panel.Body>
        </StyledPanel>
      </div>
    );
  }
}

export default onClickOutside(TableOfContents);
