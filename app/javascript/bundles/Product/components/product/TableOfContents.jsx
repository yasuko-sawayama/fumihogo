import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import onClickOutside from 'react-onclickoutside';
import FA from 'react-fontawesome';
import styled from 'styled-components';

import PageLink from './PageLink';

const StyledPanel = styled(Panel)`
margin-top: 20px;
.panel-title {
  cursor: pointer;
}
`;

const tableOfContents = ({ pages, url }) => {
  const pageLinks = pages.map(page => (
    <PageLink key={page.position} {...page} url={url} />
  ));
  
  return (
    <div className="tableOfContents">
      <ol className="nav nav-pills nav-stacked">
        {pageLinks}
      </ol>
    </div>
  );
};

tableOfContents.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  url: PropTypes.string.isRequired,
}

class TableOfContents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      allowIcon: 'toggle-up',
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  // react-onclickoutside用設定
  handleClickOutside() {
    this.setState({ open: false, allowIcon: 'toggle-down', });
  }

  togglePanel() {
    this.setState({
      open: !this.state.open,
      allowIcon: this.state.open ? 'toggle-down' : 'toggle-up',
    });
  }

  render() {
    return (
      <div id="pagePanel">
        <StyledPanel expanded={this.state.open} >
          <Panel.Heading>
            <Panel.Title onClick={this.togglePanel} >
              もくじ
              　
              <FA name={this.state.allowIcon} />
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            {tableOfContents(this.props)}
          </Panel.Body>
        </StyledPanel>

      </div>
    );
  }
}

export default onClickOutside(TableOfContents);
